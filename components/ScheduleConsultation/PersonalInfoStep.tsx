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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/constants";
import { ConsultationFormData } from "./types";

interface PersonalInfoStepProps {
  form: UseFormReturn<ConsultationFormData>;
  isPending: boolean;
}

export function PersonalInfoStep({ form, isPending }: PersonalInfoStepProps) {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-semibold text-gray-700 mb-2">
                👤 First Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="John"
                  {...field}
                  disabled={isPending}
                  className="border border-gray-300 focus:border-[#340cac] focus:ring-1 focus:ring-[#340cac] transition-all duration-300 rounded-lg bg-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-semibold text-gray-700 mb-2">
                👤 Last Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Doe"
                  {...field}
                  disabled={isPending}
                  className="border border-gray-300 focus:border-[#340cac] focus:ring-1 focus:ring-[#340cac] transition-all duration-300 rounded-lg bg-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-semibold text-gray-700 mb-2">
                📧 Email Address
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  {...field}
                  disabled={isPending}
                  className="border border-gray-300 focus:border-[#340cac] focus:ring-1 focus:ring-[#340cac] transition-all duration-300 rounded-lg bg-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-semibold text-gray-700 mb-2">
                📱 Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  {...field}
                  disabled={isPending}
                  className="border border-gray-300 focus:border-[#340cac] focus:ring-1 focus:ring-[#340cac] transition-all duration-300 rounded-lg bg-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="service"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="block text-sm font-semibold text-gray-700 mb-2">
              🎯 Service Interest
            </FormLabel>
            <Select
              onValueChange={field.onChange}
              value={field.value}
              disabled={isPending}
            >
              <FormControl>
                <SelectTrigger className="border border-gray-300 focus:border-[#340cac] focus:ring-1 focus:ring-[#340cac] transition-all duration-300 rounded-lg bg-white">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {services.map((service, idx) => (
                  <SelectItem
                    key={idx}
                    value={service.toLowerCase().replace(/\s+/g, "-")}
                  >
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
