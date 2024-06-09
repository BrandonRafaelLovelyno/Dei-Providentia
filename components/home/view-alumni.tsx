import { Testimonial } from "@/sections/home/section-alumni";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  testimonial: Testimonial;
}

const ViewAlumni: React.FC<Props> = ({ testimonial }) => {
  return (
    <div
      className={twMerge(
        "w-full h-fit",
        "flex flex-row justify-center gap-x-5",
        "py-5",
        "rounded-lg",
        "bg-blue-600"
      )}
    >
      <div
        className={twMerge(
          "w-[200px] h-[200px]",
          "rounded-full overflow-hidden",
          "relative"
        )}
      >
        <Image
          src={testimonial.src}
          alt={testimonial.name}
          fill
          objectFit="cover"
          className={twMerge("rounded-full")}
        />
      </div>
      <div className={twMerge("w-1/2", "flex flex-col gap-y-3", "pt-5")}>
        <div className={twMerge("flex flex-col")}>
          <h3 className={twMerge("text-lg font-bold", "text-white")}>
            {testimonial.name}
          </h3>
          <h4 className={twMerge("text-md text-white ")}>
            {testimonial.prodi}
          </h4>
        </div>
        <p className={twMerge("text-sm", "text-white")}>{testimonial.quote}</p>
      </div>
    </div>
  );
};

export default ViewAlumni;
