import Carousel from "@/components/carousel";
import TitleSection from "@/components/home/title-section";
import ViewAlumni from "@/components/home/view-alumni";
import { twMerge } from "tailwind-merge";

export interface Testimonial {
  name: string;
  prodi: string;
  quote: string;
  src: string;
  tahun: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Fransina Furak Junior, S.Ak",
    prodi: "S1 Akuntansi",
    quote:
      "Beasiswa Dei Providentia adalah berkat yang besar dari Tuhan. Keistimewaan yayasan ini adalah yayasan ini sangat peduli dengan kesehatan rohani dan mental para scholarsnya.",
    src: "/home/alumni/fransina.jpg",
    tahun: "Juli 2022",
  },
  {
    name: "Bernadict Charlie Davin Albert, S.Pd",
    prodi: "S1 Bimbingan & Konseling",
    quote:
      "Berbagai kegiatan Dei Providentia sungguh mengasah pengetahuan akademis, keterampilan soft skill, dan iman Kristiani saya.",
    src: "/home/alumni/benedict.jpg",
    tahun: "Juni 2024",
  },
  {
    name: "Brigitta Amanda Maharani",
    prodi: "S1 Farmasi",
    quote:
      "Dei Providentia melatih saya untuk menjadi seorang pemimpin yang percaya diri, bertanggung jawab, dapat membuat keputusan, pantang menyerah, menghargai perbedaan, serta taat dan takut akan Tuhan melalui berbagai kegiatan yang diadakan.",
    src: "/home/alumni/brigitta.jpg",
    tahun: "Desember 2023",
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
