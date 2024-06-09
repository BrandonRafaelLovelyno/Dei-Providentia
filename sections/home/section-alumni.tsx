import Carousel from "@/components/carousel";
import { twMerge } from "tailwind-merge";

interface Testimonial {
  name: string;
  quote: string;
  src: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Nuresya Larasayu Octavia",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "/home/background.jpg",
  },
];

const SectionAlumni = () => {
  return (
    <section className="w-full">
      <Carousel
        items={[
          <div key={1} className="h-[200px] w-full bg-red-500" />,
          <div key={2} className="h-[250px] w-full bg-blue-500" />,
        ]}
      />
    </section>
  );
};

export default SectionAlumni;
