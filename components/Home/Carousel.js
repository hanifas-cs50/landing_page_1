"use client"
import { useEffect, useState } from "react";
import { First_Carousel, Second_Carousel } from "./Carousels/Carousels";

export default function Carousel() {
  const [count, setCount] = useState(0);
  const carousel_items = [<First_Carousel />, <Second_Carousel />];

  function handleCarousel() {
    if (count < 1) {
      setCount((prev) => prev + 1);
    } else {
      setCount(0);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleCarousel();
    }, 9500);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="relative w-full h-[780px] mx-auto mt-20 overflow-hidden" id="carousel">

      {
        carousel_items[count]
      }

      <button onClick={handleCarousel} type="button" className="absolute inset-y-1 left-10 flex items-center">
        <span className="p-3 rounded-lg bg-blue-950 transition-transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </span>
      </button>

      <button onClick={handleCarousel} type="button" className="absolute inset-y-1 right-10 flex items-center">
        <span className="p-3 rounded-lg bg-blue-950 transition-transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </span>
      </button>
    </div>
  )
};