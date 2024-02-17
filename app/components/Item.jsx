"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function Item({ source, index }) {
  return (
    <div className="h-[150vh] items-center justify-center flex flex-col m-0 p-0">
      <div className="w-[45vw] max-w-[500px] h-[65vh] bg-purple-500 shadow-2xl"></div>
      <div className="flex flex-col p-4 mt-4 gap-8 text-center">
        <p className="text-xl font-medium">Issue #{index + 1}</p>
        <p className="text-lg font-medium">GET HERE (Europe)</p>
        <p className="text-sm font-medium">or visit at selected museums</p>
      </div>
    </div>
  );
}
// top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2
