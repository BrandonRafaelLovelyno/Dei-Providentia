import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  src: string;
  title: string;
  subtitle?: string;
  description: string;
}

const CardImage: React.FC<Props> = ({ src, title, description, subtitle }) => {
  return (
    <div
      className={twMerge(
        "h-full w-full",
        "flex flex-col gap-y-3",
        "rounded-lg overflow-hidden",
        "bg-blue-700"
      )}
    >
      <div className={twMerge("relative", "w-full h-[50%]")}>
        <Image src={src} fill alt={title} objectFit="cover" />
      </div>
      <div className={twMerge("flex flex-col gap-y-3", "px-3", "text-white")}>
        <div className={twMerge("flex flex-col gap-y-1")}>
          <h4 className={twMerge("text-lg")}>{title}</h4>
          <p className="text-xs">{subtitle}</p>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CardImage;
