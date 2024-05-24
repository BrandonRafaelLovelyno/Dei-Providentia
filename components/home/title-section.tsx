import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
}

const TitleSection: React.FC<Props> = ({ title }) => {
  return (
    <div className={twMerge("flex flex-col gap-y-4")}>
      <h3 className={twMerge("text-xl font-semibold text-blue-600")}>
        {title}
      </h3>
      <div className={twMerge("h-[3px] w-[50%]", "bg-blue-700")} />
    </div>
  );
};

export default TitleSection;
