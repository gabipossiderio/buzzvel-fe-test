import Image from "next/image";
import { learners } from "@/data/content";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const DESIGN_WIDTH = 1280;

type Shape = {
  x: number;
  y: number;
  size: number;
  className: string;
};

type Glyph = {
  x: number;
  y: number;
  size: number;
  src: string;
};

const shapes: Shape[] = [
  { x: 22, y: 16, size: 108, className: "rounded-full border-2 border-peach" },
  { x: 56, y: 373, size: 120, className: "rounded-full bg-peach" },
  { x: 1064, y: 468, size: 40, className: "rounded-full bg-peach" },
  { x: 1155, y: -14, size: 115, className: "rotate-12 rounded-lg bg-peach" },
  { x: -28, y: 235, size: 56, className: "rotate-12 rounded-lg bg-peach" },
  { x: 1208, y: 429, size: 32, className: "rounded-full border-2 border-peach" },
  { x: 877, y: 43, size: 32, className: "rounded-full border-2 border-peach" },
  { x: 322, y: 47, size: 56, className: "rotate-12 rounded-lg border border-peach" },
];

const glyphs: Glyph[] = [
  { x: 272, y: 360, size: 101, src: "/decor/bold.svg" },
  { x: 1120, y: 220, size: 80, src: "/decor/codepen.svg" },
  { x: 141, y: 214, size: 32, src: "/decor/chat-bubble.svg" },
  { x: 1016, y: 82, size: 61, src: "/decor/drop.svg" },
  { x: 963, y: 381, size: 48, src: "/decor/cash.svg" },
];

const leftPercent = (x: number) => `${(x / DESIGN_WIDTH) * 100}%`;

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative overflow-hidden bg-butter py-[60px] lg:py-[100px]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        {shapes.map((shape) => (
          <span
            key={`${shape.x}-${shape.y}`}
            className={`absolute ${shape.className}`}
            style={{ left: leftPercent(shape.x), top: shape.y, width: shape.size, height: shape.size }}
          />
        ))}
        {glyphs.map((glyph) => (
          <Image
            key={glyph.src}
            src={glyph.src}
            alt=""
            width={glyph.size}
            height={glyph.size}
            className="absolute"
            style={{ left: leftPercent(glyph.x), top: glyph.y }}
          />
        ))}
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <AvatarStack people={learners} size="md" ringClassName="ring-sun" />
        <h2
          id="final-cta-title"
          className="mt-8 max-w-[656px] font-display text-4xl leading-10 font-extrabold tracking-[-0.025em] text-ink lg:text-[3.5rem] lg:leading-[4rem]"
        >
          What will you learn next?
        </h2>
        <p className="mt-4 text-base leading-[1.625rem] text-muted lg:text-lg lg:leading-7">
          Start with one course. Build from there.
        </p>
        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <ButtonLink href="#courses" className="w-full sm:w-auto">
            Explore all courses
          </ButtonLink>
          <ButtonLink href="#contact" variant="secondary" className="w-full sm:w-auto">
            Join Luma
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
