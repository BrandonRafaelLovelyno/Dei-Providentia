import Carousel from "@/components/carousel";
import HeaderImage from "@/components/home/header-image";
import SectionActivities from "@/sections/home/section-activities";
import SectionAlumni from "@/sections/home/section-alumni";
import SectionMeaning from "@/sections/home/section-meaning";
import SectionMission from "@/sections/home/section-mission";
import { twMerge } from "tailwind-merge";

const HomePage = () => {
  return (
    <>
      <HeaderImage />
      <main
        className={twMerge(
          "w-full min-h-screen h-fit",
          "flex flex-col gap-y-10",
          "px-[20%] py-10"
        )}
      >
        <SectionMeaning />
        <SectionMission />
        <SectionActivities />
        <SectionAlumni />
      </main>
    </>
  );
};

export default HomePage;
