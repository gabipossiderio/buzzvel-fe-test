"use client";

import { useRef, useState, type FormEvent } from "react";
import { buttonClassName } from "@/components/ui/Button";
import { CheckCircleIcon } from "@/components/ui/Icons";
import { FormField } from "@/components/ui/FormField";
import { validateContact, type ContactErrors, type ContactField } from "@/lib/validateContact";

type FormStatus = "idle" | "submitting" | "success";

const FAKE_REQUEST_DELAY_MS = 900;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      question: String(data.get("question") ?? ""),
    };

    const nextErrors = validateContact(values);
    setErrors(nextErrors);

    const firstInvalid = (Object.keys(nextErrors) as ContactField[])[0];
    if (firstInvalid) {
      const field = formRef.current?.elements.namedItem(firstInvalid);
      if (field instanceof HTMLElement) field.focus();
      return;
    }

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, FAKE_REQUEST_DELAY_MS));
    setStatus("success");
  };

  const clearError = (field: ContactField) => {
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex w-full flex-col items-center justify-center gap-4 rounded-2xl border border-line bg-white px-5 py-16 text-center shadow-card lg:w-[540px] lg:shrink-0 lg:px-10"
      >
        <CheckCircleIcon className="size-12 text-brand" />
        <h3 className="heading-3 text-ink">Message sent</h3>
        <p className="max-w-[320px] text-sm leading-6 text-muted">
          Thanks for reaching out. We’ll get back to you within 24 hours on business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={buttonClassName("secondary", "mt-2")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={handleSubmit}
      aria-labelledby="contact-form-title"
      aria-describedby="contact-form-description"
      className="flex w-full flex-col gap-6 rounded-2xl border border-line bg-white px-5 py-6 shadow-card lg:w-[540px] lg:shrink-0 lg:p-10"
    >
      <div className="flex flex-col gap-2">
        <h3 id="contact-form-title" className="font-display text-xl leading-8 font-bold text-ink">
          Contact us
        </h3>
        <p id="contact-form-description" className="text-sm leading-6 text-muted">
          Fill out the fields and we will get in touch.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <FormField
          name="name"
          label="Full name"
          placeholder="Your name"
          autoComplete="name"
          error={errors.name}
          onChange={() => clearError("name")}
        />
        <FormField
          name="email"
          type="email"
          label="Email"
          placeholder="youremail@example.com"
          autoComplete="email"
          error={errors.email}
          onChange={() => clearError("email")}
        />
        <FormField
          name="question"
          label="Your question"
          placeholder="Tell us how we can help..."
          multiline
          error={errors.question}
          onChange={() => clearError("question")}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={buttonClassName("primary", "w-full disabled:cursor-progress disabled:opacity-70")}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
