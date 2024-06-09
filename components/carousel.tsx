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
  const [maxHeight, setMaxHeight] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (itemRefs.current) {
      const heights = itemRefs.current.map((ref) => ref?.offsetHeight || 0);
      setMaxHeight(Math.max(...heights));
    }
  }, [items]);

  return (
    <div className={twMerge(`w-full h-[${maxHeight}px]`, "relative")}>
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
              "w-full h-fit",
              "absolute",
              "flex items-center justify-center",
              "transition-all duration-500 ease-in-out",
              "translate-x-[-100%]",
              `translate-x-[${(idx - index) * 100}%]`,
              index !== idx && "translate-y-[10%] scale-75"
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
