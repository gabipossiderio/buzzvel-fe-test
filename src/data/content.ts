export type NavLink = {
  label: string;
  href: string;
};

export type Category = {
  number: string;
  title: string;
  description: string;
  href: string;
};

export type Step = {
  number: string;
  title: string;
  description: string;
  variant: "focus" | "experience" | "practice";
};

export type Stat = {
  value: string;
  label: string;
};

export type Learner = {
  src: string;
  name: string;
};

export type GalleryFrame = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type GalleryPhoto = {
  src: string;
  alt: string;
  mobile: GalleryFrame;
  desktop: GalleryFrame;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export const mainNav: NavLink[] = [
  { label: "Courses", href: "#courses" },
  { label: "For Teams", href: "#contact" },
  { label: "Community", href: "#people" },
  { label: "About", href: "#how-it-works" },
];

export const learners: Learner[] = [
  { src: "/images/learner-1.jpg", name: "Priya" },
  { src: "/images/learner-2.jpg", name: "Daniel" },
  { src: "/images/learner-3.jpg", name: "Marcus" },
  { src: "/images/learner-4.jpg", name: "Sofia" },
];

export const categories: Category[] = [
  {
    number: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
    href: "#featured-course",
  },
  {
    number: "02",
    title: "Technology",
    description:
      "Build a stronger understanding of the tools shaping digital products.",
    href: "#courses",
  },
  {
    number: "03",
    title: "Business",
    description:
      "Develop practical skills for better decisions and stronger teams.",
    href: "#courses",
  },
  {
    number: "04",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
    href: "#courses",
  },
];

export const featuredCourse = {
  title: "Designing products people understand.",
  description:
    "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
  instructor: "with Maya Chen · Senior Product Designer",
  meta: ["8 lessons", "2h 40min", "Intermediate"],
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    variant: "focus",
  },
  {
    number: "02",
    title: "Learn from experience",
    description:
      "Follow concise lessons created by professionals who use these skills.",
    variant: "experience",
  },
  {
    number: "03",
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    variant: "practice",
  },
];

export const testimonial = {
  quote:
    "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.",
  name: "Alex Morgan",
  role: "Product Manager",
  avatar: "/images/alex-morgan.jpg",
};

export const stats: Stat[] = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/images/people-01.jpg",
    alt: "Girl raising her hand during an online class at home",
    mobile: { x: 22, y: 63, width: 72, height: 96 },
    desktop: { x: 35, y: 106, width: 103, height: 154 },
  },
  {
    src: "/images/people-02.jpg",
    alt: "Group of students studying together around a laptop",
    mobile: { x: 0, y: 167, width: 94, height: 129 },
    desktop: { x: 0, y: 273, width: 138, height: 207 },
  },
  {
    src: "/images/people-03.jpg",
    alt: "Student in a hoodie reading a book",
    mobile: { x: 106, y: 0, width: 72, height: 106 },
    desktop: { x: 154, y: 25, width: 103, height: 170 },
  },
  {
    src: "/images/people-04.jpg",
    alt: "Two students practicing music by a window",
    mobile: { x: 106, y: 114, width: 72, height: 108 },
    desktop: { x: 154, y: 208, width: 103, height: 173 },
  },
  {
    src: "/images/people-05.jpg",
    alt: "Young man reading notes at his desk",
    mobile: { x: 106, y: 230, width: 72, height: 80 },
    desktop: { x: 154, y: 394, width: 103, height: 128 },
  },
  {
    src: "/images/people-06.jpg",
    alt: "Graduate in cap and gown holding a diploma",
    mobile: { x: 190, y: 13, width: 72, height: 86 },
    desktop: { x: 273, y: 33, width: 103, height: 137 },
  },
  {
    src: "/images/people-07.jpg",
    alt: "Woman studying at a desk in a bright living room",
    mobile: { x: 190, y: 107, width: 72, height: 86 },
    desktop: { x: 273, y: 183, width: 103, height: 138 },
  },
  {
    src: "/images/people-08.jpg",
    alt: "Teacher giving a lesson on a video call",
    mobile: { x: 190, y: 201, width: 72, height: 96 },
    desktop: { x: 273, y: 334, width: 103, height: 154 },
  },
  {
    src: "/images/people-09.jpg",
    alt: "Student with curly hair holding red folders",
    mobile: { x: 274, y: 46, width: 88, height: 128 },
    desktop: { x: 391, y: 86, width: 128, height: 205 },
  },
  {
    src: "/images/people-10.jpg",
    alt: "Student in a hijab holding a coffee cup",
    mobile: { x: 274, y: 182, width: 72, height: 83 },
    desktop: { x: 391, y: 303, width: 103, height: 132 },
  },
];

export const contactInfo = {
  email: "contact@luma.com",
  responseTime: "Up to 24 hours on business days",
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: "#courses" },
      { label: "Categories", href: "#courses" },
      { label: "Instructors", href: "#people" },
      { label: "For Teams", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#how-it-works" },
      { label: "Careers", href: "#contact" },
      { label: "Journal", href: "#featured-course" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#contact" },
      { label: "Contact", href: "#contact" },
      { label: "Terms", href: "#top" },
      { label: "Privacy", href: "#top" },
    ],
  },
];
