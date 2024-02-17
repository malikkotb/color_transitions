"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Item from "./components/Item";

const images = ["./1.jpg", "./2.jpg", "./3.jpg", "./4.jpg"]

export default function Home() {

  const [backgroundColor, setBackgroundColor] = useState("#f00");

  useEffect(() => {
    const colors = ["#ff0", "#f0f", "#0ff"]; // Define your colors
    const changeBackgroundOnScroll = () => {
      const scrollPosition = window.scrollY; // Get current scroll position
      const viewportHeight = window.innerHeight; // Get viewport height
      const index = Math.floor(scrollPosition / viewportHeight); // Determine which 100vh segment the user is currently in
      setBackgroundColor(colors[index % 5]); // Update background color based on current segment
    };

    // Listen for scroll events
    window.addEventListener("scroll", changeBackgroundOnScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", changeBackgroundOnScroll);
    };
  }, []);

  return (
    <section
      style={{
        backgroundColor: backgroundColor,
        transition: "background-color 0.5s ease-out", // css transition for background color
      }}
   
    >
      {images.map((image, index) => <Item key={index} source={image} index={index} /> )}
    </section>
  );
}
