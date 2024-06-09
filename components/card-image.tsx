import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  src: string;
  title: string;
  subtitle?: string;
  description: string;
  imageHeight: string;
}

const CardImage: React.FC<Props> = ({
  src,
  title,
  description,
  subtitle,
  imageHeight,
}) => {
  return (
    <div
      className={twMerge(
        "min-h-full h-fit w-full",
        "flex flex-col gap-y-3",
        "pb-5",
        "rounded-lg overflow-hidden",
        "bg-blue-700"
      )}
    >
      <div className={twMerge("relative", "w-full", imageHeight)}>
        <Image src={src} fill alt={title} objectFit="cover" />
      </div>
      <div className={twMerge("flex flex-col gap-y-3", "px-3", "text-white")}>
        <div className={twMerge("flex flex-col gap-y-1")}>
          <h4 className={twMerge("text-lg font-bold")}>{title}</h4>
          <p className="text-xs">{subtitle}</p>
        </div>
        <p className="text-sm font-light">{description}</p>
      </div>
    </div>
  );
};

export default CardImage;
