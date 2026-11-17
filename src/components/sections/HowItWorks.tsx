import { steps, type Step } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="bg-cream py-[60px] lg:py-[100px]">
      <Container>
        <SectionIntro
          eyebrow="How Luma works"
          titleId="how-title"
          title="Less browsing. More learning."
          align="center"
          className="max-w-[760px]"
        />

        <ol className="mt-10 grid lg:mt-20 lg:grid-cols-3 lg:gap-20 lg:py-7">
          {steps.map((step, index) => (
            <StepItem key={step.number} step={step} isLast={index === steps.length - 1} />
          ))}
        </ol>
      </Container>
    </section>
  );
}

function StepItem({ step, isLast }: { step: Step; isLast: boolean }) {
  return (
    <li className={`relative ${isLast ? "" : "pb-[76px] lg:pb-0"}`}>
      {!isLast && (
        <>
          <span aria-hidden className="absolute bottom-0 left-7 h-[50px] w-px bg-line lg:hidden" />
          <span aria-hidden className="absolute top-7 right-[-80px] left-14 hidden h-px bg-line lg:block" />
        </>
      )}
      <StepIcon variant={step.variant} />
      <p className="eyebrow mt-6 text-subtle">Step {step.number}</p>
      <h3 className="heading-3 mt-2 text-ink">{step.title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted lg:text-base lg:leading-7">{step.description}</p>
    </li>
  );
}

function StepIcon({ variant }: { variant: Step["variant"] }) {
  if (variant === "focus") {
    return (
      <div aria-hidden className="relative size-14 rounded-full bg-lavender">
        <span className="absolute top-2 left-2 size-6 rounded-md bg-brand" />
      </div>
    );
  }

  if (variant === "experience") {
    return (
      <div aria-hidden className="relative size-14">
        <span className="absolute inset-0 rotate-12 rounded-lg bg-coral/15 lg:bg-peach" />
        <span className="absolute top-6 left-6 size-7 rounded-full bg-coral" />
      </div>
    );
  }

  return (
    <div aria-hidden className="relative size-14 rounded-xl bg-butter">
      <span className="absolute top-7 left-2 size-5 rounded-full bg-mustard" />
    </div>
  );
}
