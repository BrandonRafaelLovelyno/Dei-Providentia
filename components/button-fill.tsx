"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const HoverVariant: Variants = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: 0,
  },
};

interface Props {
  text: string;
  border?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

const ButtonFill: React.FC<Props> = ({ text, border, fullWidth, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={twMerge(
        "relative",
        fullWidth ? "w-full h-fit" : "w-fit h-fit",
        "px-3 py-2",
        border && "border-2 border-white",
        "overflow-hidden"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <motion.div
        variants={HoverVariant}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={twMerge(
          "absolute z-10",
          "bg-white",
          "w-full h-full",
          "flex flex-col justify-center items-center",
          "top-0 left-0"
        )}
      >
        <p className={twMerge("text-black font-bold tracking-widest")}>
          {text}
        </p>
      </motion.div>
      <p className={twMerge("z-[20]", "font-bold tracking-widest text-white")}>
        {text}
      </p>
    </button>
  );
};

export default ButtonFill;
