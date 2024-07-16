import ListIcon from "@/components/home/list-icon";
import TitleSection from "@/components/home/title-section";
import { MutableRefObject } from "react";
import { twMerge } from "tailwind-merge";

const MEDIA: { src: string; title: string }[] = [
  {
    src: "/home/registration/whatsapp.png",
    title: "+62 851-0516-3168",
  },
  {
    src: "/home/registration/instagram.png",
    title: "@dei_providentia",
  },
];

const SectionRegistration = () => {
  return (
    <section className="flex flex-col gap-y-5">
      <TitleSection title="Universitas dan Registrasi" />
      <p className={twMerge("font-normal")}>
        Hingga saat ini, beasiswa Dei Providentia berfokus pada
        <span> </span>
        <span className="text-blue-600 font-semibold">
          Universitas Sanata Dharma.
        </span>
        <span> </span>
        Untuk pendaftaran dan info lebih lanjut, mahasiswa dapat menghubungi LKM
        (Lembaga Kesejahteraan Mahasiswa) USD di kampus Gedung Pusat Mrican
        Lantai 2. Proses seleksi akan dilakukan oleh LKM USD dan dilanjut oleh
        DPF Dei Providentia.
      </p>
      <ul className="flex flex-col gap-y-2">
        {MEDIA.map((media, index) => (
          <ListIcon key={index} {...media} />
        ))}
      </ul>
    </section>
  );
};

export default SectionRegistration;
