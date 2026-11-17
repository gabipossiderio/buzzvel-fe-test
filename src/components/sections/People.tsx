import Image from "next/image";
import type { CSSProperties } from "react";
import { galleryPhotos, type GalleryFrame } from "@/data/content";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const MOBILE_CANVAS = { width: 362, height: 310 };
const DESKTOP_CANVAS = { width: 520, height: 522 };
const MOBILE_CIRCLE: GalleryFrame = { x: 16, y: -9, width: 330, height: 330 };
const DESKTOP_CIRCLE: GalleryFrame = { x: 15, y: 11, width: 500, height: 500 };

const percent = (value: number, total: number) => `${(value / total) * 100}%`;

function frameVariables(mobile: GalleryFrame, desktop: GalleryFrame) {
  return {
    "--m-left": percent(mobile.x, MOBILE_CANVAS.width),
    "--m-top": percent(mobile.y, MOBILE_CANVAS.height),
    "--m-width": percent(mobile.width, MOBILE_CANVAS.width),
    "--m-height": percent(mobile.height, MOBILE_CANVAS.height),
    "--d-left": percent(desktop.x, DESKTOP_CANVAS.width),
    "--d-top": percent(desktop.y, DESKTOP_CANVAS.height),
    "--d-width": percent(desktop.width, DESKTOP_CANVAS.width),
    "--d-height": percent(desktop.height, DESKTOP_CANVAS.height),
  } as CSSProperties;
}

const frameClassName =
  "absolute left-(--m-left) top-(--m-top) w-(--m-width) h-(--m-height) lg:left-(--d-left) lg:top-(--d-top) lg:w-(--d-width) lg:h-(--d-height)";

export function People() {
  return (
    <section id="people" aria-labelledby="people-title" className="bg-cream py-[60px] lg:py-[100px]">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[60px]">
        <div className="lg:w-[530px] lg:shrink-0">
          <p className="eyebrow text-brand">The people</p>
          <h2 id="people-title" className="heading-2 mt-2 text-ink">
            Meet international students &amp; teachers
          </h2>
          <p className="lead mt-6 text-ink lg:mt-8 lg:text-muted">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit,
            nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit
            tellus urna, faucibus aenean lorem faucibus integer.
          </p>
          <ButtonLink href="#contact" variant="secondary" className="mt-6 lg:mt-8">
            Explore teachers and students
          </ButtonLink>
        </div>

        <PeopleGallery />
      </Container>
    </section>
  );
}

function PeopleGallery() {
  return (
    <div className="relative mx-auto aspect-[362/310] w-full max-w-[520px] lg:mx-0 lg:aspect-[520/522]">
      <div
        aria-hidden
        className={`${frameClassName} rounded-full bg-lavender`}
        style={frameVariables(MOBILE_CIRCLE, DESKTOP_CIRCLE)}
      />
      <ul aria-label="Students and teachers from the Luma community">
        {galleryPhotos.map((photo) => (
          <li
            key={photo.src}
            className={`${frameClassName} overflow-hidden rounded bg-lavender shadow-photo`}
            style={frameVariables(photo.mobile, photo.desktop)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 140px, 26vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
