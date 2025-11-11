"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { scheduleConsultation } from "@/actions/consultation";
import { PersonalInfoStep } from "./PersonalInfoStep";
import { DateSelectionStep } from "./DateSelectionStep";
import { TimeSelectionStep } from "./TimeSelectionStep";
import { NotesAndLinkStep } from "./NotesAndLinkStep";
import { ReviewStep } from "./ReviewStep";
import { consultationSchema, ConsultationFormData, FormStep } from "./types";

const STEP_LABELS = [
  "Personal Info",
  "Pick a Date",
  "Pick a Time",
  "Add Details",
  "Review",
];

const STEP_DESCRIPTIONS = [
  "Tell us about yourself",
  "Choose your preferred date",
  "Select an available time",
  "Add notes and meeting link",
  "Review your booking",
];

// Animation styles
const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-10px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
  .animate-slideIn { animation: slideIn 0.5s ease-out forwards; }
  .animate-slideUp { animation: slideUp 0.5s ease-out forwards; }
`;

export function ScheduleConsultationForm() {
  const [currentStep, setCurrentStep] = useState<FormStep>(FormStep.PERSONAL_INFO);
  const [isPending, startTransition] = useTransition();
  const [isValidating, setIsValidating] = useState(false);
  const [isMarkedPending, setIsMarkedPending] = useState(false);
  const router = useRouter();

  const form = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    mode: "onBlur", // Validate only on blur, not onChange
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      selectedDate: undefined,
      selectedTime: "",
      additionalNotes: "",
      googleMeetLink: "",
    },
  });

  // Validate only the current step fields
  const validateCurrentStep = async () => {
    const fieldsToValidate: Record<FormStep, (keyof ConsultationFormData)[]> = {
      [FormStep.PERSONAL_INFO]: ["firstName", "lastName", "email", "phone", "service"],
      [FormStep.DATE_SELECTION]: ["selectedDate"],
      [FormStep.TIME_SELECTION]: ["selectedTime"],
      [FormStep.NOTES_AND_LINK]: ["googleMeetLink"],
      [FormStep.REVIEW]: [],
    };

    const fieldsForCurrentStep = fieldsToValidate[currentStep];
    const isValid = await form.trigger(fieldsForCurrentStep);
    return isValid;
  };

  const handleNextStep = async () => {
    setIsValidating(true);
    try {
      const isValid = await validateCurrentStep();
      if (isValid) {
        const next = currentStep + 1;
        setCurrentStep(next);
        // If user navigates to review step, mark the application as pending (client-side)
        if (next === FormStep.REVIEW) {
          setIsMarkedPending(true);
        }
      }
    } finally {
      setIsValidating(false);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      const prev = currentStep - 1;
      setCurrentStep(prev);
      // If moving away from review, unmark pending so user can edit
      if (currentStep === FormStep.REVIEW) {
        setIsMarkedPending(false);
      }
    }
  };

  // Called when the user confirms on the Review step. This will send the emails
  // and persist the consultation by calling the server action.
  const handleConfirm = async () => {
    // Ensure the application was marked pending before confirming
    if (!isMarkedPending) {
      toast.error("Please review your booking before confirming.");
      return;
    }

    const values = form.getValues();

    startTransition(async () => {
      try {
        const result = await scheduleConsultation({
          ...values,
          selectedDate: values.selectedDate,
        });

        if (result.success) {
          toast.success("Consultation scheduled!", {
            description: "Confirmation emails sent to you and our team.",
          });
          form.reset();
          setIsMarkedPending(false);
          // Navigate back to homepage after confirmation
          router.push("/");
        } else {
          toast.error("Failed to schedule", {
            description: result.error || "Please try again",
          });
        }
      } catch (error: any) {
        toast.error("Error", {
          description: error.message || "Something went wrong",
        });
      }
    });
  };

  return (
    <>
      <style>{animationStyles}</style>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Main Content */}
        <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
          <Card className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-md border-2 border-gradient-to-r from-[#34156e]/30 to-[#340cac]/30 shadow-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#34156e] to-[#340cac] text-white text-center py-8">
              <CardTitle className="text-3xl font-bold">🎯 Schedule Your Consultation</CardTitle>
              <CardDescription className="text-white/90 text-base mt-2">{STEP_DESCRIPTIONS[currentStep]}</CardDescription>
            </CardHeader>

            <CardContent className="py-8">
              {/* Progress Indicator with Step Numbers */}
              <div className="mb-10">
                <div className="flex gap-2 mb-4">
                  {[0, 1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex-1 h-3 rounded-full transition-all duration-500 bg-gray-200 relative overflow-hidden group">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          step < currentStep
                            ? "bg-gradient-to-r from-[#34156e] to-[#340cac] w-full"
                            : step === currentStep
                            ? "bg-gradient-to-r from-[#1B9AAA] to-[#0d9488] w-full animate-pulse"
                            : "bg-gray-300 w-0"
                        }`}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs font-semibold">
                  {STEP_LABELS.map((label, idx) => (
                    <span
                      key={idx}
                      className={`transition-colors duration-300 ${
                        idx <= currentStep ? "text-[#340cac]" : "text-gray-400"
                      }`}
                    >
                      {idx + 1}. {label}
                    </span>
                  ))}
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(() => {})} className="space-y-8">
                  {/* Step Content */}
                  {currentStep === FormStep.PERSONAL_INFO && (
                    <PersonalInfoStep form={form} isPending={isPending} />
                  )}

                  {currentStep === FormStep.DATE_SELECTION && (
                    <DateSelectionStep form={form} isPending={isPending} />
                  )}

                  {currentStep === FormStep.TIME_SELECTION && (
                    <TimeSelectionStep form={form} isPending={isPending} />
                  )}

                  {currentStep === FormStep.NOTES_AND_LINK && (
                    <NotesAndLinkStep form={form} isPending={isPending} />
                  )}

                  {currentStep === FormStep.REVIEW && (
                    <ReviewStep form={form} isPending={isPending} />
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex gap-4 pt-8 border-t-2 border-gray-200">
                    {currentStep > FormStep.PERSONAL_INFO && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePreviousStep}
                        className="px-8 py-6 border-2 border-[#340cac] hover:bg-[#340cac] hover:text-white transition-all duration-300 font-semibold"
                      >
                        ← Previous
                      </Button>
                    )}
                    <div className="flex-1" />
                    {currentStep < FormStep.REVIEW ? (
                      <Button
                        type="button"
                        onClick={handleNextStep}
                        disabled={isValidating}
                        className="px-8 py-6 bg-gradient-to-r from-[#34156e] to-[#340cac] hover:from-[#2a1158] hover:to-[#2a0a8a] text-white font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-70"
                      >
                        {isValidating ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Loading...
                          </>
                        ) : (
                          <>
                            Next → Step {currentStep + 2}/5
                          </>
                        )}
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={handleConfirm}
                        className="px-8 py-6 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-70"
                        disabled={isPending}
                      >
                        {isPending ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          "✅ Confirm Booking"
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-50 to-slate-50 border-t-2 border-[#340cac]/20 py-8 px-4 sm:px-6 lg:px-8 mt-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <p className="text-sm font-semibold text-[#34156e] mb-2">⚡ Fast Response</p>
                <p className="text-xs text-gray-600">We'll get back to you within 24 hours</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-[#340cac] mb-2">🔒 Secure</p>
                <p className="text-xs text-gray-600">Your information is protected</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-[#1B9AAA] mb-2">📧 Confirmation</p>
                <p className="text-xs text-gray-600">Email sent immediately</p>
              </div>
            </div>
            <div className="text-center text-sm text-gray-600 border-t border-gray-300 pt-6">
              <p>
                By scheduling a consultation, you agree to our{" "}
                <a href="#" className="text-[#1B9AAA] hover:underline font-semibold">
                  privacy policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#1B9AAA] hover:underline font-semibold">
                  terms of service
                </a>
                .
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
