"use client";

import { useEffect, useRef, useState } from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface Props {
  items: React.ReactNode[];
}

const Carousel: React.FC<Props> = ({ items }) => {
  const [index, setIndex] = useState(1);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [height, setHeight] = useState(300);

  useEffect(() => {
    const interval = setInterval(() => {
      if (itemRefs.current[0] && itemRefs.current[0].clientHeight) {
        const heights = itemRefs.current.map(
          //@ts-ignore
          (el) => el?.clientHeight || itemRefs.current[0].clientHeight
        );
        setHeight(Math.max(...heights));
      }
    }, 200);

    return () => clearInterval(interval);
  });

  return (
    <div
      className={twMerge(`w-full`, "relative")}
      style={{ height: `${height}px` }}
    >
      <button
        className={twMerge("absolute", "left-0 top-[50%] z-[20]")}
        onClick={() => {
          setIndex((prev) => (prev - 1 < 0 ? items.length - 1 : prev - 1));
        }}
      >
        <MdKeyboardDoubleArrowLeft size={40} />
      </button>
      <button
        className={twMerge("absolute", "right-0 top-[50%] z-[20]")}
        onClick={() => {
          setIndex((prev) => (prev + 1) % items.length);
        }}
      >
        <MdKeyboardDoubleArrowRight size={40} />
      </button>
      {items.map((item, idx) => {
        return (
          <div
            key={idx}
            //@ts-ignore
            ref={(el) => (itemRefs.current[idx] = el)}
            className={twMerge(
              "absolute top-[50%] w-fit h-fit",
              "flex items-center justify-center",
              "transition-all duration-500 ease-in-out",
              `translate-x-[${(idx - index) * 100}%]`,
              index !== idx && "-translate-y-[30%] scale-75",
              index === idx && "-translate-y-1/2"
            )}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
