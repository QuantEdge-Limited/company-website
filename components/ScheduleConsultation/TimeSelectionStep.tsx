"use client";

import { UseFormReturn } from "react-hook-form";
import { format } from "date-fns";
import { Clock, Calendar } from "lucide-react";
import { ConsultationFormData, AVAILABLE_HOURS } from "./types";
import { useEffect, useState } from "react";

interface TimeSelectionStepProps {
  form: UseFormReturn<ConsultationFormData>;
  isPending: boolean;
}

export function TimeSelectionStep({ form, isPending }: TimeSelectionStepProps) {
  const selectedDate = form.watch("selectedDate");
  const selectedTime = form.watch("selectedTime");
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [loadingBooked, setLoadingBooked] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function fetchBooked() {
      if (!selectedDate) {
        setBookedSlots([]);
        return;
      }

      setLoadingBooked(true);
      try {
        const yyyy = selectedDate.getFullYear();
        const mm = String(selectedDate.getMonth() + 1).padStart(2, "0");
        const dd = String(selectedDate.getDate()).padStart(2, "0");
        const dateStr = `${yyyy}-${mm}-${dd}`;

        const res = await fetch(`/api/consultations/booked?date=${dateStr}`);
        if (!res.ok) {
          setBookedSlots([]);
        } else {
          const json = await res.json();
          if (mounted && Array.isArray(json.bookedTimes)) {
            setBookedSlots(json.bookedTimes);
            // If the currently selected time is now booked, clear it
            if (json.bookedTimes.includes(selectedTime)) {
              form.setValue("selectedTime", "");
            }
          }
        }
      } catch (err) {
        console.error("Failed to fetch booked slots:", err);
        setBookedSlots([]);
      } finally {
        if (mounted) setLoadingBooked(false);
      }
    }

    fetchBooked();

    return () => {
      mounted = false;
    };
  }, [selectedDate]);

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="p-4 bg-gradient-to-r from-[#1B9AAA]/10 to-[#1B9AAA]/5 border-2 border-[#1B9AAA] rounded-xl animate-slideIn">
        <Calendar className="inline h-5 w-5 mr-2 text-[#1B9AAA]" />
        <strong className="text-[#1B9AAA]">Date:</strong> <span className="ml-2 font-semibold text-gray-700">{format(selectedDate || new Date(), "EEEE, MMMM do, yyyy")}</span>
      </div>

      <div>
        <h4 className="font-bold text-lg mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#34156e] to-[#340cac]">
          ⏰ Select Available Time Slot
        </h4>
        {loadingBooked ? (
          <p className="text-sm text-gray-500">Checking availability...</p>
        ) : null}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {AVAILABLE_HOURS.map((hour) => {
            const isBooked = bookedSlots.includes(hour);
            return (
              <button
                key={hour}
                type="button"
                onClick={() => !isBooked && form.setValue("selectedTime", hour)}
                disabled={isPending || isBooked}
                title={isBooked ? "Already booked" : undefined}
                className={`
                  p-3 rounded-lg font-bold transition-all transform duration-300 hover:scale-105 active:scale-95
                  flex items-center justify-center gap-2
                  ${
                    selectedTime === hour
                      ? "bg-gradient-to-br from-[#34156e] to-[#340cac] text-white shadow-lg shadow-[#340cac]/50"
                      : isBooked
                      ? "bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed"
                      : "bg-white border-2 border-gray-300 hover:border-[#340cac] hover:bg-gradient-to-br hover:from-[#34156e]/5 hover:to-[#340cac]/5"
                  }
                `}
              >
                <Clock className="h-4 w-4" />
                {hour}
              </button>
            );
          })}
        </div>
      </div>

      {selectedTime && (
        <div className="mt-6 p-4 bg-gradient-to-r from-[#34156e]/10 to-[#340cac]/10 border-2 border-[#340cac] rounded-xl animate-slideIn">
          <Clock className="inline h-5 w-5 mr-2 text-[#340cac]" />
          <strong className="text-[#34156e]">Selected Time:</strong> <span className="ml-2 font-bold text-lg text-[#340cac]">{selectedTime}</span>
        </div>
      )}
    </div>
  );
}
