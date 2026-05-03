"use client";

import { useState } from "react";

export default function RequestQuoteForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      business: formData.get("business"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/request-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setLoading(false);

      if (!res.ok) {
        throw new Error("Failed");
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl border border-slate-200">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          Request Quote
        </p>

        <h2 className="mt-3 text-3xl font-bold text-slate-900">
          Get Wholesale Pricing
        </h2>

        <p className="mt-3 text-slate-600">
          Tell us what products you need and we’ll follow up with pricing and availability.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
          <input
            name="name"
            required
            placeholder="Your name"
            className="rounded-xl border border-slate-300 px-4 py-3"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Email address"
            className="rounded-xl border border-slate-300 px-4 py-3"
          />

          <input
            name="phone"
            placeholder="Phone number"
            className="rounded-xl border border-slate-300 px-4 py-3"
          />

          <input
            name="business"
            placeholder="Business name"
            className="rounded-xl border border-slate-300 px-4 py-3"
          />

          <textarea
            name="message"
            required
            rows={5}
            placeholder="What products are you looking for?"
            className="rounded-xl border border-slate-300 px-4 py-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Submit Quote Request"}
          </button>

          {success && (
            <p className="text-green-700 font-medium">
              Quote request sent successfully.
            </p>
          )}

          {error && (
            <p className="text-red-600 font-medium">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}