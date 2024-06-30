import TitleSection from "@/components/home/title-section";
import { MutableRefObject } from "react";
import { twMerge } from "tailwind-merge";

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
    </section>
  );
};

export default SectionRegistration;
