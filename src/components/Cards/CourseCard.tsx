"use client";

import React from "react";
import Image from "next/image";

export default function CourseCard() {
  return (
    <div className="bg-white dark:bg-darkmode rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer w-[300px]">
      
      <div className="relative w-full h-40 sm:h-44">
        <Image 
          src="/images/card/image1.jpg" 
          alt="Cours général"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-semibold text-dark dark:text-white">
            Cours général 
          </h4>
          <p className="text-primary text-sm font-semibold">⭐ 4.5</p>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-300 mt-6">
          1h30min
        </p>
        
      </div>
    </div>
  );
}
