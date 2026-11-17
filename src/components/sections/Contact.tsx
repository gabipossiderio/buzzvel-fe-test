import { contactInfo } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { ChatBubbleIcon, ClockIcon } from "@/components/ui/Icons";
import { ContactForm } from "@/components/sections/ContactForm";
import type { ReactNode } from "react";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white py-[60px] lg:py-[100px]">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-8 lg:w-[480px] lg:gap-10">
          <div>
            <p className="eyebrow text-brand">Contact</p>
            <h2 id="contact-title" className="heading-2 mt-4 text-ink">
              Get in touch
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted lg:text-lg lg:leading-7">
              Have a question? We’re here to help. Whether you’re looking for the right course, learning
              with your team or interested in teaching with Luma, we’d love to hear from you.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            <ContactItem icon={<ChatBubbleIcon className="size-6" />} title="Email">
              <a
                href={`mailto:${contactInfo.email}`}
                className="rounded text-brand underline-offset-4 hover:underline"
              >
                {contactInfo.email}
              </a>
            </ContactItem>
            <ContactItem icon={<ClockIcon className="size-5" />} title="Response Time">
              <span className="text-subtle">{contactInfo.responseTime}</span>
            </ContactItem>
          </ul>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}

type ContactItemProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

function ContactItem({ icon, title, children }: ContactItemProps) {
  return (
    <li className="flex items-center gap-4 rounded-xl bg-cream p-4 lg:p-5">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-lavender text-brand">
        {icon}
      </span>
      <div className="flex flex-col gap-0.5 text-sm leading-6 lg:gap-1">
        <span className="text-ink">{title}</span>
        {children}
      </div>
    </li>
  );
}
