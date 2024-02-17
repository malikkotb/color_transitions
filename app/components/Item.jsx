"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function Item({ source, backgroundColor }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  return (
    <div className="relative">
      <motion.section
        ref={ref}
        style={{ opacity: scrollYProgress, backgroundColor: backgroundColor }}
        className="h-[125vh] flex justify-center items-center"
      >
        {/* Empty content or other elements if needed */}
      </motion.section>
      <div className="w-[50vw] h-[60vh] bg-blue-400 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20"></div>
    </div>

  );
}

    // <motion.section ref={ref} style={{ opacity: scrollYProgress, backgroundColor: backgroundColor }} className="z-10 h-screen flex justify-center items-center">
    //   <div className="w-[50vw] relative h-[60vh] z-20 opacity-100 bg-blue-400 "></div>
    // </motion.section>