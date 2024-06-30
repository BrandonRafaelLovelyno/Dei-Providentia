import Carousel from "@/components/carousel";
import TitleSection from "@/components/home/title-section";
import ViewAlumni from "@/components/home/view-alumni";
import { twMerge } from "tailwind-merge";

export interface Testimonial {
  name: string;
  prodi: string;
  quote: string;
  src: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Nuresya Larasayu Octavia",
    prodi: "S1 Akuntansi",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lotem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "/home/background.jpg",
  },
  {
    name: "Redempta Ronauli Sri Rukmini Napitupulu",
    prodi: "S1 Ilmu Komunikasi",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lotem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lotem ipsum dolor sit amet, consectetur adipiscing elit.",
    src: "/home/background.jpg",
  },
];

const SectionAlumni = () => {
  return (
    <section className={twMerge("w-full", "flex flex-col gap-y-5")}>
      <TitleSection title="Alumni Kami" />
      <Carousel
        items={[
          ...TESTIMONIALS.map((testimonial, idx) => (
            <ViewAlumni key={idx} testimonial={testimonial} />
          )),
        ]}
      />
    </section>
  );
};

export default SectionAlumni;
