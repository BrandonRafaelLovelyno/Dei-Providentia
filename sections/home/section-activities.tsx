import CardImage from "@/components/card-image";
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
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    src: "/home/background.jpg",
  },
  {
    title: "Pendalaman Iman",
    subtitle: "Mingguan",
    description:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    src: "/home/background.jpg",
  },
  {
    title: "Webinar",
    subtitle: "Bulanan",
    description:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    src: "/home/background.jpg",
  },
];

const SectionActivities = () => {
  return (
    <section className={twMerge("flex flex-col gap-y-5")}>
      <TitleSection title="Kegiatan Scholars" />
      <p className={twMerge("font-normal")}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget tempus
        ante. Aliquam sit amet vehicula ante, id aliquam dolor. Aenean
        pellentesque fringilla leo vel efficitur. In hac habitasse platea
        dictumst. Vivamus vel pharetra nulla. In sit amet nisl vitae nulla
        dapibus porttitor. Etiam malesuada est orci, sodales iaculis dui sodales
        id. Interdum et malesuada fames ac ante ipsum primis in faucibus
      </p>
      <div className={twMerge("flex flex-row gap-x-3 h-96")}>
        {ACTIVITIES.map((activity, index) => (
          <div className={twMerge("flex-1")} key={index}>
            <CardImage {...activity} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionActivities;
