"use client";

import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Video } from "lucide-react";
import { ConsultationFormData } from "./types";

interface NotesAndLinkStepProps {
  form: UseFormReturn<ConsultationFormData>;
  isPending: boolean;
}

export function NotesAndLinkStep({ form, isPending }: NotesAndLinkStepProps) {
  return (
    <div className="space-y-6 animate-fadeIn">
      <FormField
        control={form.control}
        name="additionalNotes"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="block text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#34156e] to-[#340cac] mb-2">
              📝 Additional Notes <span className="text-gray-500 font-normal">(Optional)</span>
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder="Add any additional information or questions about the consultation..."
                className="min-h-[120px] border-2 border-gray-200 focus:border-[#340cac] focus:ring-2 focus:ring-[#340cac]/20 transition-all duration-300 rounded-lg resize-none"
                {...field}
                disabled={isPending}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="googleMeetLink"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="block text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#34156e] to-[#340cac] mb-2">
              🎥 Google Meet Link
            </FormLabel>
            <FormControl>
              <div className="relative">
                <Video className="absolute left-3 top-3 h-5 w-5 text-[#340cac]" />
                <Input
                  type="url"
                  placeholder="https://meet.google.com/xxx-xxxx-xxx"
                  {...field}
                  disabled={isPending}
                  className="pl-10 border-2 border-gray-200 focus:border-[#340cac] focus:ring-2 focus:ring-[#340cac]/20 transition-all duration-300 rounded-lg"
                />
              </div>
            </FormControl>
            <FormMessage />
            <p className="text-xs text-gray-500 mt-1">Required for the video consultation</p>
          </FormItem>
        )}
      />
    </div>
  );
}
