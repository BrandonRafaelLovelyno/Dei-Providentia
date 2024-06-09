import CardImage from "@/components/card-image";
import TitleSection from "@/components/home/title-section";
import { twMerge } from "tailwind-merge";

interface Mission {
  title: string;
  description: string;
  src: string;
}

const MISSIONS: Mission[] = [
  {
    title: "Hidup dalam iman",
    description:
      " hidup di dalam iman melalui doa, pendalaman Liturgi Gereja, renungan harian, pendalaman Alkitab bersama mingguan, ketertarikan membaca riwayat para kudus dan para Bapak Gereja.",
    src: "/home/background.jpg",
  },
  {
    title: "Belajar memetik pengalaman",
    description:
      "baik dari pembimbing kuliah, dosen, teman, mentor,  para pembicara  webinar/seminar, mencermati dan mempelajari kepemimpinan dan berinspirasi dari mereka",
    src: "/home/background.jpg",
  },
  {
    title: "Bekerja di dalam team dan komunitas seiman",
    description:
      " sebagai tempat aktualisasi diri serta menjadi peka terhadap kebutuhan masyarakat sekitar",
    src: "/home/background.jpg",
  },
];

const SectionMission = () => {
  return (
    <section className="flex flex-col gap-y-5">
      <TitleSection title="Tujuan Kami" />
      <p>
        Tujuan beasiswa Dei Providentia adalah membantu biaya studi dan
        mempersiapkan Scholars menjadi pemimpin yang berkarya dengan dasar-dasar
        Iman Katolik yang benar, bersama dengan Gereja Universal, Gereja
        Katolik.
      </p>
      <div className="flex flex-col gap-y-4">
        <p>
          Bersama Dei Providentia Foundation, Scholars dibimbing untuk
          memperoleh disiplin diri dan mempunyai kebiasaan baik dalam hal-hal,
          sekurang-kurangnya seperti yang tertera di bawah ini, dalam berproses
          membentuk karakter sesuai dengan Kehendak Ilahi:
        </p>
        <div
          className={twMerge(
            "flex lg:flex-row lg:gap-x-3 flex-col max-lg:gap-y-3 h-fit min-h-[26rem]"
          )}
        >
          {MISSIONS.map((mission, index) => (
            <div className={twMerge("flex-1")} key={index}>
              <CardImage {...mission} imageHeight="h-[13rem]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionMission;
