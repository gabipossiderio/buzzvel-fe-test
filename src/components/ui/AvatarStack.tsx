import Image from "next/image";
import type { Learner } from "@/data/content";

type AvatarStackProps = {
  people: Learner[];
  size: "sm" | "md";
  ringClassName: string;
  className?: string;
};

const sizes = {
  sm: { box: "size-8 -ml-2 first:ml-0", px: 32 },
  md: { box: "size-10 -ml-2 first:ml-0", px: 40 },
};

export function AvatarStack({ people, size, ringClassName, className = "" }: AvatarStackProps) {
  const { box, px } = sizes[size];

  return (
    <ul className={`flex ${className}`} aria-label={`${people.length} learners`}>
      {people.map((person) => (
        <li
          key={person.src}
          className={`${box} relative overflow-hidden rounded-full bg-lavender ring-2 ${ringClassName}`}
        >
          <Image src={person.src} alt={person.name} width={px} height={px} className="size-full object-cover" />
        </li>
      ))}
    </ul>
  );
}
