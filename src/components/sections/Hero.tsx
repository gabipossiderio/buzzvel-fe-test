import Image from "next/image";
import { learners } from "@/data/content";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { StarIcon } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="overflow-x-clip bg-cream py-[60px] lg:py-[100px]">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[60px]">
        <HeroVisual />

        <div className="lg:order-first lg:w-[560px] lg:shrink-0">
          <p className="eyebrow text-brand">Learn at your own pace</p>
          <h1 id="hero-title" className="heading-1 mt-4 text-ink">
            Build skills that actually move you forward.
          </h1>
          <p className="lead mt-6 text-muted lg:max-w-[480px]">
            Practical courses taught by people who do the work every day. Learn design,
            technology, business and more — one focused lesson at a time.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#courses" className="w-full sm:w-auto">
              Explore courses
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary" className="w-full sm:w-auto">
              See how it works
            </ButtonLink>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 sm:justify-start">
            <AvatarStack people={learners.slice(0, 3)} size="sm" ringClassName="ring-cream" />
            <p className="text-sm leading-6 text-ink">
              <strong className="font-bold">Trusted by 24,000+</strong>{" "}
              <span className="text-muted">learners</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto h-[380px] w-full max-w-[500px] sm:h-[460px] lg:mx-0 lg:h-[520px] lg:w-[500px] lg:shrink-0">
      <div
        aria-hidden
        className="absolute top-6 right-[-11px] bottom-[14px] w-[75%] rounded-2xl bg-peach lg:right-[-39px] lg:bottom-7 lg:w-[89px]"
      />
      <div
        aria-hidden
        className="absolute bottom-3 left-[-10px] size-16 rounded-full bg-lavender lg:bottom-[11px] lg:left-[-45px] lg:size-[106px]"
      />
      <div className="absolute inset-y-0 right-2 left-2 overflow-hidden rounded-2xl bg-lavender lg:inset-0 lg:rounded-3xl">
        <Image
          src="/images/hero-learner.jpg"
          alt="Smiling woman with glasses taking notes while learning at her laptop"
          fill
          preload
          sizes="(min-width: 1024px) 500px, (min-width: 540px) 484px, calc(100vw - 56px)"
          className="object-cover"
        />
      </div>

      <div className="absolute top-1.5 left-0 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-float lg:top-4 lg:left-[-22px]">
        <span className="rounded-lg bg-lavender px-1 text-sm leading-8 font-bold text-brand">120+</span>
        <span className="text-sm leading-6 text-ink">expert-led courses</span>
      </div>

      <div className="absolute right-[-11px] bottom-[35px] flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-float lg:right-[-57px]">
        <span className="flex gap-0.5 text-sun" role="img" aria-label="Rated 4.9 out of 5">
          {Array.from({ length: 5 }, (_, index) => (
            <StarIcon key={index} className="size-3.5" />
          ))}
        </span>
        <span className="text-sm leading-6 text-ink">4.9 avg rating</span>
      </div>
    </div>
  );
}
