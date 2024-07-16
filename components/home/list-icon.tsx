import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  src: string;
}

const ListIcon: React.FC<Props> = ({ title, src }) => {
  return (
    <li className={twMerge("flex flex-row gap-x-2")}>
      <Image objectFit="cover" src={src} width={30} height={30} alt={title} />
      <p className="font-bold">{title}</p>
    </li>
  );
};

export default ListIcon;
