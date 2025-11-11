"use client";

import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { format, addDays, isBefore, startOfDay } from "date-fns";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { ConsultationFormData } from "./types";

interface DateSelectionStepProps {
  form: UseFormReturn<ConsultationFormData>;
  isPending: boolean;
}

export function DateSelectionStep({ form, isPending }: DateSelectionStepProps) {
  const [calendarMonth, setCalendarMonth] = useState(new Date());
  const selectedDate = form.watch("selectedDate");

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const handleNextMonth = () => {
    setCalendarMonth(addDays(calendarMonth, 32));
  };

  const handlePreviousMonth = () => {
    setCalendarMonth(addDays(calendarMonth, -32));
  };

  const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(calendarMonth);

  // Generate calendar days
  const calendarDays = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(new Date(year, month, day));
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between mb-6 bg-gradient-to-r from-[#34156e]/10 to-[#340cac]/10 p-4 rounded-xl border border-[#340cac]/20">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePreviousMonth}
          type="button"
          disabled={isPending}
          className="hover:bg-gradient-to-r hover:from-[#34156e] hover:to-[#340cac] hover:text-white transition-all duration-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h3 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#34156e] to-[#340cac]">
          📅 {format(calendarMonth, "MMMM yyyy")}
        </h3>
        <Button
          variant="outline"
          size="sm"
          onClick={handleNextMonth}
          type="button"
          disabled={isPending}
          className="hover:bg-gradient-to-r hover:from-[#34156e] hover:to-[#340cac] hover:text-white transition-all duration-300"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-bold text-sm bg-gradient-to-r from-[#34156e]/20 to-[#340cac]/20 py-2 rounded-lg text-[#34156e]">
            {day}
          </div>
        ))}

        {calendarDays.map((day, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              if (day) {
                form.setValue("selectedDate", day);
              }
            }}
            disabled={!day || isBefore(day, startOfDay(new Date())) || isPending}
            className={`
              p-3 rounded-lg text-sm font-semibold transition-all transform hover:scale-105 duration-300 active:scale-95
              ${!day ? "invisible" : ""}
              ${isBefore(day || new Date(), startOfDay(new Date())) ? "opacity-30 cursor-not-allowed" : ""}
              ${
                selectedDate && day && format(selectedDate, "yyyy-MM-dd") === format(day, "yyyy-MM-dd")
                  ? "bg-gradient-to-br from-[#34156e] to-[#340cac] text-white shadow-lg shadow-[#340cac]/50"
                  : "bg-white border-2 border-gray-200 hover:border-[#340cac] hover:bg-gradient-to-br hover:from-[#34156e]/5 hover:to-[#340cac]/5"
              }
            `}
          >
            {day ? day.getDate() : ""}
          </button>
        ))}
      </div>

      {selectedDate && (
        <div className="mt-6 p-4 bg-gradient-to-r from-[#1B9AAA]/10 to-[#1B9AAA]/5 border-2 border-[#1B9AAA] rounded-xl animate-slideIn">
          <Calendar className="inline h-5 w-5 mr-2 text-[#1B9AAA]" />
          <strong className="text-[#1B9AAA]">Selected:</strong> <span className="ml-2 font-semibold text-gray-700">{format(selectedDate, "EEEE, MMMM do, yyyy")}</span>
        </div>
      )}
    </div>
  );
}
