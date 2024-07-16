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
    name: "Fransina Furak Junior, S.Ak",
    prodi: "S1 Akuntansi",
    quote:
      "Beasiswa Dei Providentia adalah berkat yang besar dari Tuhan. Keistimewaan yayasan ini adalah yayasan ini sangat peduli dengan kesehatan rohani dan mental para scholarsnya.",
    src: "/home/alumni/fransina.jpg",
  },
  {
    name: "Benedict Charlie Davin Alber, S.Pd",
    prodi: "S1 Ilmu Komunikasi",
    quote:
      "Berbagai kegiatan Dei Providentia sungguh mengasah pengetahuan akademis, keterampilan soft skill, dan iman Kristiani saya.",
    src: "/home/alumni/benedict.jpg",
  },
];

const SectionAlumni = () => {
  return (
    <section className={twMerge("w-full", "flex flex-col gap-y-5")}>
      <TitleSection title="Alumni Kami" />
      <p className={twMerge("font-normal")}>
        Dei Providentia telah membantu menyediakan pendidikan untuk beberapa
        mahasiswa pada universitas mitra. Berikut adalah beberapa testimonial
        dari alumni Dei Providentia:
      </p>
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
