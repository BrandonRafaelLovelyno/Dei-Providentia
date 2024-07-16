import CardImage from "@/components/card-image";
import Carousel from "@/components/carousel";
import TitleSection from "@/components/home/title-section";
import { twMerge } from "tailwind-merge";

interface Activity {
  title: string;
  description: string;
  subtitle?: string;
  src: string;
}

const ACTIVITIES: Activity[] = [
  {
    title: "Renungan Harian",
    subtitle: "Harian",
    description:
      "Renungan Harian dari Alkitab dan sharing antar Scholars yang berjalan setiap hari.",
    src: "/home/activities/renungan-harian.jpg",
  },
  {
    title: "Pendalaman Iman",
    subtitle: "Mingguan",
    description:
      "Acara Mingguan dengan pendalaman Iman dan/atau berdoa Bersama.",
    src: "/home/activities/pendalaman-iman.jpg",
  },
  {
    title: "Webinar",
    subtitle: "Bulanan",
    description:
      "Setiap bulan Scholars mengadakan Webinar dan mengundang Narasumber.",
    src: "/home/activities/webinar.jpg",
  },
  {
    title: "Mentoring",
    description:
      "Setiap Scholar akan mendapatkan Mentor yang akan membimbingnya dalam berbagai hal.",
    src: "/home/activities/mentoring.jpg",
  },
  {
    title: "Kunjungan Scholars",
    description:
      "Kunjungan oleh Dei Providentia Foundation ke Universitas Scholars.",
    src: "/home/activities/kunjungan-scholars.jpg",
  },
  {
    title: "Training",
    description:
      "Training yang diadakan oleh Dei Providentia Foundation untuk meningkatkan kemampuan Scholars dalam berbagai aspek.",
    src: "/home/activities/training.jpg",
  },
];

const SectionActivities = () => {
  return (
    <section className={twMerge("flex flex-col gap-y-5")}>
      <TitleSection title="Kegiatan Scholars" />
      <p className={twMerge("font-normal")}>
        Kegiatan Scholars diadakan untuk menanamkan nilai-nilai Dei Providentia,
        mengembangkan diri Scholars, serta memperluas jejaring Scholars.
        Terdapat beberapa kegiatan rutin serta nonrutin antara lain:
      </p>
      <div className="h-fit">
        <div className={twMerge("flex flex-col gap-y-5 max-lg:hidden")}>
          <div className={twMerge("flex flex-row gap-x-3")}>
            {ACTIVITIES.map((activity, index) => {
              if (index > 2) return null;
              return (
                <div className={twMerge("flex-1")} key={index}>
                  <CardImage {...activity} imageHeight="h-[12rem]" />
                </div>
              );
            })}
          </div>
          <div className={twMerge("flex flex-row gap-x-3")}>
            {ACTIVITIES.map((activity, index) => {
              if (index <= 2) return null;
              return (
                <div className={twMerge("flex-1")} key={index}>
                  <CardImage {...activity} imageHeight="h-[12rem]" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:hidden">
          <Carousel
            isTranslateY={false}
            items={ACTIVITIES.map((activity, index) => (
              <div className={twMerge("flex-1")} key={index}>
                <CardImage {...activity} imageHeight="h-[12rem]" />
              </div>
            ))}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionActivities;
