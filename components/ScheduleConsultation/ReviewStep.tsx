"use client";

import { UseFormReturn } from "react-hook-form";
import { format } from "date-fns";
import { ConsultationFormData } from "./types";

interface ReviewStepProps {
  form: UseFormReturn<ConsultationFormData>;
  isPending?: boolean;
}

export function ReviewStep({ form, isPending  }: ReviewStepProps) {
  const firstName = form.getValues("firstName");
  const lastName = form.getValues("lastName");
  const email = form.getValues("email");
  const phone = form.getValues("phone");
  const service = form.getValues("service");
  const selectedDate = form.getValues("selectedDate");
  const selectedTime = form.getValues("selectedTime");
  const additionalNotes = form.getValues("additionalNotes");
  const googleMeetLink = form.getValues("googleMeetLink");

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Status badge - shows Pending until user confirms, and Processing while submission is in progress */}
      <div className="flex justify-center">
        {isPending ? (
          <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium border border-yellow-200">
            <svg className="animate-spin h-4 w-4 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
            ⏳ Pending — not confirmed
          </span>
        )}
      </div>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#34156e] to-[#340cac]">
          ✨ Review Your Booking Details
        </h3>
        <p className="text-gray-600 mt-2">Please verify all information before confirming</p>
      </div>

      {/* Personal Info Section */}
      <div className="bg-gradient-to-br from-[#34156e]/5 to-[#340cac]/5 border-2 border-[#340cac]/30 rounded-xl p-6">
        <h4 className="font-bold text-lg text-[#34156e] mb-4 flex items-center gap-2">
          👤 Your Information
        </h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center pb-3 border-b border-[#340cac]/20">
            <span className="font-semibold text-gray-700">Name:</span>
            <span className="font-bold text-[#340cac]">{firstName} {lastName}</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-[#340cac]/20">
            <span className="font-semibold text-gray-700">Email:</span>
            <span className="font-bold text-[#340cac]">{email}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Phone:</span>
            <span className="font-bold text-[#340cac]">{phone}</span>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <div className="bg-gradient-to-br from-[#1B9AAA]/5 to-[#1B9AAA]/5 border-2 border-[#1B9AAA]/30 rounded-xl p-6">
        <h4 className="font-bold text-lg text-[#1B9AAA] mb-4 flex items-center gap-2">
          🎯 Service
        </h4>
        <div className="inline-block bg-gradient-to-r from-[#1B9AAA] to-[#15757a] text-white px-4 py-2 rounded-full font-semibold">
          {service}
        </div>
      </div>

      {/* Date & Time Section */}
      <div className="bg-gradient-to-br from-[#34156e]/10 to-[#340cac]/10 border-2 border-[#340cac]/40 rounded-xl p-6">
        <h4 className="font-bold text-lg text-[#34156e] mb-4 flex items-center gap-2">
          📅 Scheduled Meeting
        </h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Date:</span>
            <span className="font-bold text-lg text-[#340cac]">{format(selectedDate || new Date(), "EEEE, MMMM do, yyyy")}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-700">Time:</span>
            <span className="font-bold text-lg text-[#340cac]">{selectedTime}</span>
          </div>
        </div>
      </div>

      {/* Meeting Link Section */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-[#340cac]/40 rounded-xl p-6">
        <h4 className="font-bold text-lg text-[#34156e] mb-4 flex items-center gap-2">
          🎥 Video Meeting
        </h4>
        {googleMeetLink ? (
          <a
            href={googleMeetLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1B9AAA] to-[#15757a] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#1B9AAA]/50 transition-all duration-300"
          >
            Join Google Meet →
          </a>
        ) : (
          <div className="px-4 py-3 rounded-md bg-white border border-gray-200 text-gray-700">
            A Google Meet link will be used from our settings if you didn't provide one. It will be included in the confirmation email.
          </div>
        )}
      </div>

      {/* Additional Notes Section */}
      {additionalNotes && (
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300/50 rounded-xl p-6">
          <h4 className="font-bold text-lg text-orange-700 mb-4 flex items-center gap-2">
            📝 Your Notes
          </h4>
          <p className="text-gray-700 leading-relaxed italic">{additionalNotes}</p>
        </div>
      )}

      {/* Confirmation Message */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-300 rounded-xl p-6 text-center animate-slideIn">
        <p className="text-green-700 font-semibold text-lg">✅ All set! Click "Confirm Booking" to complete your reservation.</p>
        <p className="text-gray-600 text-sm mt-2">Confirmation email will be sent to: <strong>{email}</strong></p>
      </div>
    </div>
  );
}
