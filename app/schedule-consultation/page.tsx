import { ScheduleConsultationForm } from "@/components/ScheduleConsultation";

export const metadata = {
  title: "Schedule a Consultation | QuantEdge",
  description: "Book a consultation with our expert team.",
};

export default function ScheduleConsultationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <ScheduleConsultationForm />
    </main>
  );
}
