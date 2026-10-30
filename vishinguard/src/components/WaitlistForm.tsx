"use client";

import React, { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import { isValidEmail, SignupType } from "@/lib/validation";

interface WaitlistFormProps {
  id?: string;
  sourcePage?: string;
  sourceSection?: string;
  variant?: "light" | "dark";
  title?: string;
  subtitle?: string;
}

export default function WaitlistForm({
  id = "waitlist",
  sourcePage = "hem",
  sourceSection = "cta",
  variant = "light",
  title = "Få besked när riddaren är redo",
  subtitle = "Vishinguard lanseras snart på Android. Anmäl dig för att få ett meddelande direkt i din inkorg.",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [signupType, setSignupType] = useState<SignupType | "">("");
  const [consentGiven, setConsentGiven] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation per SPEC rules
    const newErrors: Record<string, string> = {};

    if (!email || !isValidEmail(email)) {
      newErrors.email = "Vänligen ange en giltig e-postadress.";
    }

    if (!signupType) {
      newErrors.signupType = "Vänligen välj om du installerar för dig själv eller för någon annan.";
    }

    if (!consentGiven) {
      newErrors.consent = "Vänligen markera samtyckesrutan för att fortsätta.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          signupType,
          consentGiven,
          sourcePage,
          sourceSection,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors({
            general: data.message || "Något gick fel. Försök igen om ett tag.",
          });
        }
        return;
      }

      // Success
      setSuccessMessage(data.message);
      // Reset form fields while leaving them visible for subsequent signups
      setEmail("");
      setSignupType("");
      setConsentGiven(false);
    } catch {
      setErrors({
        general: "Något gick fel. Försök igen om ett tag.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDark = variant === "dark";

  return (
    <div
      id={id}
      className={`rounded-sm p-6 lg:p-8 transition-colors ${
        isDark
          ? "bg-[#0D4F55] text-[#F7F0E1]"
          : "bg-[#EAE1CC] border border-[#0D4F55]/10 text-[#063338]"
      }`}
    >
      {/* Success banner */}
      {successMessage && (
        <div
          className={`mb-6 p-4 rounded-sm flex items-start gap-3 ${
            isDark ? "bg-[#063338] text-[#F7F0E1]" : "bg-[#0D4F55] text-[#F7F0E1]"
          }`}
        >
          <CheckCircle className="w-5 h-5 text-[#F7F0E1] flex-shrink-0 mt-0.5" />
          <p className="text-[13px] leading-[1.5]">{successMessage}</p>
        </div>
      )}

      {/* General error message */}
      {errors.general && (
        <div className="mb-4 p-3 bg-[#C7452E]/10 border border-[#C7452E] rounded-sm text-[#C7452E] text-[13px] flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {errors.general}
        </div>
      )}

      {title && (
        <div className="mb-5">
          <div
            className={`text-[10px] font-[600] tracking-[0.3em] uppercase mb-2 ${
              isDark ? "text-[#F7F0E1]/80" : "text-[#0D4F55]"
            }`}
          >
            Bli först
          </div>
          <h3
            className={`font-serif text-[24px] font-[600] leading-[1.2] mb-2 ${
              isDark ? "text-[#F7F0E1]" : "text-[#063338]"
            }`}
          >
            {title}
          </h3>
          {subtitle && (
            <p
              className={`text-[13px] leading-[1.6] ${
                isDark ? "text-[#F7F0E1]/80" : "text-[#4A8A91]"
              }`}
            >
              {subtitle}
            </p>
          )}
          {/* Free trial badge */}
          <div
            className={`mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-[12px] font-[700] tracking-[0.05em] ${
              isDark
                ? "bg-[#F7F0E1]/15 text-[#F7F0E1]"
                : "bg-[#0D4F55]/10 text-[#0D4F55]"
            }`}
          >
            Gratis testversion i en månad!
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Email field */}
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) {
                const next = { ...errors };
                delete next.email;
                setErrors(next);
              }
            }}
            placeholder="din@epost.se"
            className={`w-full h-11 px-4 rounded-sm text-[14px] focus:outline-none transition-colors ${
              isDark
                ? "bg-[#063338] text-[#F7F0E1] placeholder:text-[#4A8A91]/70 focus:border-[#4A8A91]"
                : "bg-[#F7F0E1] text-[#063338] placeholder:text-[#4A8A91]/50 focus:border-[#0D4F55]"
            } ${
              errors.email
                ? "border border-[#C7452E]"
                : isDark
                ? "border border-[#4A8A91]/30"
                : "border border-[#0D4F55]/15"
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 text-[12px] text-[#C7452E] flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Toggle options */}
        <div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                setSignupType("self");
                if (errors.signupType) {
                  const next = { ...errors };
                  delete next.signupType;
                  setErrors(next);
                }
              }}
              className={`flex-1 h-10 rounded-sm text-[12px] font-[600] transition-colors border ${
                errors.signupType
                  ? "border-[#C7452E] text-[#C7452E] bg-[#C7452E]/5"
                  : signupType === "self"
                  ? isDark
                    ? "bg-[#F7F0E1] text-[#063338] border-[#F7F0E1]"
                    : "bg-[#0D4F55] text-[#F7F0E1] border-[#0D4F55]"
                  : isDark
                  ? "bg-[#063338] text-[#4A8A91] border-[#4A8A91]/30 hover:border-[#4A8A91]"
                  : "bg-[#F7F0E1] text-[#4A8A91] border-[#0D4F55]/15 hover:border-[#0D4F55]/40"
              }`}
            >
              För mig själv
            </button>
            <button
              type="button"
              onClick={() => {
                setSignupType("other");
                if (errors.signupType) {
                  const next = { ...errors };
                  delete next.signupType;
                  setErrors(next);
                }
              }}
              className={`flex-1 h-10 rounded-sm text-[12px] font-[600] transition-colors border ${
                errors.signupType
                  ? "border-[#C7452E] text-[#C7452E] bg-[#C7452E]/5"
                  : signupType === "other"
                  ? isDark
                    ? "bg-[#F7F0E1] text-[#063338] border-[#F7F0E1]"
                    : "bg-[#0D4F55] text-[#F7F0E1] border-[#0D4F55]"
                  : isDark
                  ? "bg-[#063338] text-[#4A8A91] border-[#4A8A91]/30 hover:border-[#4A8A91]"
                  : "bg-[#F7F0E1] text-[#4A8A91] border-[#0D4F55]/15 hover:border-[#0D4F55]/40"
              }`}
            >
              För någon annan
            </button>
          </div>
          {errors.signupType && (
            <p className="mt-1.5 text-[12px] text-[#C7452E] flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              {errors.signupType}
            </p>
          )}
        </div>

        {/* Consent checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={consentGiven}
              onChange={(e) => {
                setConsentGiven(e.target.checked);
                if (errors.consent) {
                  const next = { ...errors };
                  delete next.consent;
                  setErrors(next);
                }
              }}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 rounded-sm border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                errors.consent
                  ? "border-[#C7452E] bg-[#C7452E]/5"
                  : consentGiven
                  ? isDark
                    ? "bg-[#F7F0E1] border-[#F7F0E1]"
                    : "bg-[#0D4F55] border-[#0D4F55]"
                  : isDark
                  ? "border-[#4A8A91]/40 bg-[#063338]"
                  : "border-[#0D4F55]/25 bg-[#F7F0E1]"
              }`}
            >
              {consentGiven && (
                <svg
                  className={`w-3.5 h-3.5 ${isDark ? "text-[#063338]" : "text-[#F7F0E1]"}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
            <span
              className={`text-[12px] leading-[1.5] ${
                isDark ? "text-[#F7F0E1]/80" : "text-[#4A8A91]"
              }`}
            >
              Jag godkänner att Vishinguard sparar och hanterar min e-postadress för information om lanseringen.
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1.5 text-[12px] text-[#C7452E] flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              {errors.consent}
            </p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full h-12 text-[13px] font-[700] tracking-[0.1em] uppercase rounded-sm transition-colors cursor-pointer disabled:opacity-50 ${
            isDark
              ? "bg-[#F7F0E1] text-[#063338] hover:bg-[#EAE1CC]"
              : "bg-[#0D4F55] text-[#F7F0E1] hover:bg-[#063338]"
          }`}
        >
          {isSubmitting ? "Skickar..." : "Bli först att få prova"}
        </button>
      </form>
    </div>
  );
}
