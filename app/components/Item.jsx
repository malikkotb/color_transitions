"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function Item({ source }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
    
  })

  const backgroundColorRange = ["#FF0000", "#00FF00", "#0000FF"];

  // Calculate the current color based on scroll position
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    backgroundColorRange
  );

  return (
    <motion.section style={{ backgroundColor: backgroundColor }} className="bg-red-500 h-screen flex justify-center items-center">
      {/* position: relative to the div makes it appear above the header */}
      <div ref={ref} className="w-[50vw] h-[60vh] bg-blue-400 "></div>
    </motion.section>
  );
}
