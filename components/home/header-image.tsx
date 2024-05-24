import Image from "next/image";
import { twMerge } from "tailwind-merge";
import ButtonFill from "../button-fill";

const HeaderImage = () => {
  return (
    <div
      className={twMerge(
        "relative",
        "w-full h-[80vh]",
        "flex flex-row justify-start items-center"
      )}
    >
      <>
        {/* image and dark layer */}
        <Image
          alt="header"
          src={"/home/background.jpg"}
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div
          className={twMerge(
            "absolute z-0 inset-0",
            "bg-black bg-opacity-30",
            "flex justify-center items-center"
          )}
        />
      </>
      <div
        className={twMerge("z-10", "flex flex-col gap-y-10", "pl-[20%] mt-20")}
      >
        <div className={twMerge("flex flex-col gap-y-2 text-white")}>
          <h1 className="text-4xl font-bold">Dei Providentia</h1>
          <h2 className="text-xl">Scholarship</h2>
          <p className={twMerge("w-[50%]", "font-thin")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            tempus ante. Aliquam sit amet vehicula ante, id aliquam dolor.
            Aenean pellentesque fringilla leo vel efficitur. In hac habitasse
            platea dictumst. Vivamus vel pharetra nulla. In sit amet nisl vitae
            nulla dapibus porttitor.
          </p>
        </div>
        <ButtonFill text="DAFTAR DI SINI" border />
      </div>
    </div>
  );
};

export default HeaderImage;
