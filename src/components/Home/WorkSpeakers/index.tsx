"use client";
import React from "react";
import { usePathname } from "next/navigation";

const WorkSpeakers = ({ showTitle = true }) => {
  const pathname = usePathname();
  return (
    <>
      <section className={` dark:bg-darkmode ${pathname === "/" ? "" : ""}`}>
        {showTitle && (
          <>
            <h2 className="text-center pb-6">Our Key Statistics and Insights</h2>
            <p className="text-xl text-center pb-6 w-100 text-gray-500 dark:text-opacity-80 font-normal">Here is an overview of our key statistics that reflect our growth and performance!</p>
          </>
        )}
        <div className="w-full flex flex-col items-center justify-center pt-20">
          <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-52 text-center justify-center max-w-[1200px] w-full px-4">

            <div className="flex flex-col items-center justify-center">
              <p className="text-[3.55rem] font-bold">+150</p>
              <span className="text-[18px] text-gray-500">students</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-[3.55rem] font-bold">+100</p>
              <span className="text-[18px] text-gray-500">teachers</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-[3.55rem] font-bold">+98%</p>
              <span className="text-[18px] text-gray-500">rate</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-[3.55rem] font-bold">24h/7</p>
              <span className="text-[18px] text-gray-500">support</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-[3.55rem] font-bold">+150</p>
              <span className="text-[18px] text-gray-500">support</span>
            </div>

          </div>
        </div>

      </section>
    </>
  );
};

export default WorkSpeakers;
