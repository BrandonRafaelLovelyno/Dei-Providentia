import HeaderImage from "@/components/home/header-image";
import TitleSection from "@/components/home/title-section";
import SectionActivities from "@/sections/home/section-activities";
import { twMerge } from "tailwind-merge";

const HomePage = () => {
  return (
    <>
      <HeaderImage />
      <main
        className={twMerge("w-full h-fit", "flex flex-col", "px-[20%] py-10")}
      >
        <SectionActivities />
      </main>
    </>
  );
};

export default HomePage;
