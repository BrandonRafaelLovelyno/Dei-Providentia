"use client";

import HeaderImage from "@/components/home/header-image";
import SectionActivities from "@/sections/home/section-activities";
import SectionAlumni from "@/sections/home/section-alumni";
import SectionMeaning from "@/sections/home/section-meaning";
import SectionMission from "@/sections/home/section-mission";
import SectionRegistration from "@/sections/home/section-registration";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

const HomePage = () => {
  const registrationRef = useRef<HTMLDivElement>(null);

  const onRegistration = () => {
    console.log("registrationRef", registrationRef);
    if (!registrationRef || !registrationRef.current) return;
    registrationRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <>
      <HeaderImage onRegistration={onRegistration} />
      <main
        className={twMerge(
          "w-full min-h-screen h-fit",
          "flex flex-col gap-y-10",
          "lg:px-[20%] px-10 py-10"
        )}
      >
        <SectionMeaning />
        <SectionMission />
        <SectionActivities />
        <div ref={registrationRef}>
          <SectionRegistration />
        </div>
        <SectionAlumni />
      </main>
    </>
  );
};

export default HomePage;
