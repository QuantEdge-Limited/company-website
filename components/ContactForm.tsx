"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { formSchema } from "@/schema/schema";
import { getFormattedDateTime } from "@/lib/formattedDateTime";
import { IoIosSend } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { services } from "@/constants";
import { useTransition } from "react";
import { sendContactEmail } from "@/actions/email"; // Import the server action

/**
 * ContactForm Component
 *
 * A responsive contact form component with form validation using React Hook Form + Zod.
 * Features glass morphism design with responsive layout for all screen sizes.
 *
 */
export function ContactForm() {
  // Initialize react-hook-form with Zod validation schema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  /**
   * Form submission handler
   * Processes form data, resets form, and shows success notification
   * @param values - Form data validated by Zod schema
   */
  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        await sendContactEmail(values);
        form.reset();
        toast.success("Email sent successfully!", {
          description: `Sent on ${getFormattedDateTime()}`,
        });
      } catch (error: any) {
        toast.error("Failed to send email", {
          description: error?.message || "Something went wrong.",
        });
      }
    });
  }

  return (
    // Main card container with glass morphism effect and full width on mobile
    <Card className="w-full max-w-2xl mx-auto bg-white/70 backdrop-blur-md border border-black/10 shadow-xl">
      {/* Card Header - responsive text sizing */}
      <CardHeader className="text-center sm:text-left">
        <CardTitle className="text-xl sm:text-2xl">Contact Us</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Send us a message and we'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>

      <CardContent className="px-4 sm:px-6">
        {/* React Hook Form wrapper */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-6"
          >
            {/* First & Last Name Fields */}
            {/* On mobile: stacked vertically, on tablet+: side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-10 sm:h-11 border-gray-200 focus:border-[#1B9AAA] focus:ring-[#1B9AAA]/20 text-sm sm:text-base"
                        placeholder="Enter your first name"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-10 sm:h-11 border-gray-200 focus:border-[#1B9AAA] focus:ring-[#1B9AAA]/20 text-sm sm:text-base"
                        placeholder="Enter your last name"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />
            </div>

            {/* Email & Phone Fields */}
            {/* On mobile: stacked vertically, on tablet+: side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@company.com"
                        className="h-10 sm:h-11 border-gray-200 focus:border-[#1B9AAA] focus:ring-[#1B9AAA]/20 text-sm sm:text-base"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Phone</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+2547********"
                        className="h-10 sm:h-11 border-gray-200 focus:border-[#1B9AAA] focus:ring-[#1B9AAA]/20 text-sm sm:text-base"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />
            </div>

            {/* Service Selection Dropdown */}
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Service Interest
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full h-10 sm:h-11 border border-gray-200 text-black rounded-md focus:border-[#1B9AAA] focus:ring-[#1B9AAA]/20 text-sm sm:text-base">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    {/* Dropdown content with responsive positioning */}
                    <SelectContent className="w-full bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg max-h-60 overflow-y-auto">
                      {services.map((service, index) => (
                        <SelectItem
                          key={index}
                          value={service
                            .toLowerCase()
                            .replace(/ & /g, "-")
                            .replace(/ /g, "-")}
                          className="text-sm sm:text-base"
                        >
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )}
            />

            {/* Message Textarea */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      className="min-h-[100px] sm:min-h-[120px] resize-none border-gray-200 focus:border-[#1B9AAA] focus:ring-[#1B9AAA]/20 text-sm sm:text-base"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400 text-xs" />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            {/* Full width with responsive padding and text size */}
            <Button
              type="submit"
              className="w-full h-11 sm:h-12 py-2 sm:py-3 bg-linear-to-r from-blue-600 via-teal-600  to-blue-600  text-white hover:from-blue-700 hover:via-teal-700  hover:to-blue-700 transition-all duration-200 text-sm sm:text-base font-medium flex items-center justify-center gap-2"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <IoIosSend size={16} className="sm:w-5 sm:h-5" />
                </>
              )}
            </Button>
          </form>
        </Form>

        {/* Footer Disclaimer */}
        {/* Responsive text sizing and spacing */}
        <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-center text-black/60 leading-relaxed px-2">
          By submitting this form, you agree to our privacy policy and terms of
          service. We'll respond within 24 hours.
        </p>
      </CardContent>
    </Card>
  );
}
