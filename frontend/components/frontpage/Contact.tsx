"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, SendHorizonal } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "",phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("sent");
      setForm({ name: "", email: "", phone:"", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full py-24 px-6 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Connect With <span className="text-4xl md:text-5xl font-bold mb-4 text-cyan-600">Our Team</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Whether you're exploring solutions, need support, or want to collaborate. Our engineers and product team are ready to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Let's Talk Software</h3>
            <p className="text-gray-600">
              We build scalable digital products that power modern businesses. Reach out and let's build something exceptional together.
            </p>

            <div className="space-y-4 text-gray-600">
              <p className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>
                  <span className="font-medium">Office:</span> Mama Ngina Street
                </span>
              </p>

              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>
                  <span className="font-medium">Phone:</span> +254 720 042 710
                </span>
              </p>

              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>
                  <span className="font-medium">Email:</span> quantedgelimited@gmail.com
                </span>
              </p>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-xl h-64 border border-gray-200">
              <iframe
                title="Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1987.2877177670912!2d36.8208025!3d-1.285735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f177db05af437%3A0x8e172f3f1f50e261!2sMama%20Ngina%20St%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v170xyz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-600">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-black focus:border-cyan-400 outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-600">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-black focus:border-cyan-400 outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-600">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-black focus:border-cyan-400 outline-none transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-600">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none text-black focus:border-cyan-400 outline-none transition"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 text-slate-900 py-3 rounded-xl font-semibold hover:bg-cyan-400 transition flex items-center justify-center gap-2 shadow-md"
            >
              {status === "sending" ? "Sending..." : <><SendHorizonal className="w-5" /> Send Message</>}
            </button>

            {status === "sent" && (
              <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm mt-2">Failed to send message.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
