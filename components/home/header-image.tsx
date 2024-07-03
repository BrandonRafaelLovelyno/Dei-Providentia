import Image from "next/image";
import { twMerge } from "tailwind-merge";
import ButtonFill from "../button-fill";

interface Props {
  onRegistration: () => void;
}

const HeaderImage: React.FC<Props> = ({ onRegistration }) => {
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
        className={twMerge(
          "z-10",
          "flex flex-col gap-y-10",
          "lg:pl-[20%] max-lg:pl-8 mt-20"
        )}
      >
        <div className={twMerge("flex flex-col gap-y-8 text-white")}>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-4xl lg:text-6xl font-bold">Dei Providentia</h1>
            <h2 className="text-xl lg:text-5xl">Scholarship</h2>
          </div>
          <div className="flex flex-col gap-y-2">
            <p
              className={twMerge(
                "lg:w-[50%] w-full",
                "font-light",
                "lg:text-2xl text-lg"
              )}
            >
              Harnessing the power of Catholic faith-based education to develop
              leaders.
            </p>
          </div>
        </div>
        <ButtonFill onClick={onRegistration} text="DAFTAR DI SINI" border />
      </div>
    </div>
  );
};

export default HeaderImage;
