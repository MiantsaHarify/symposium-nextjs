import React from "react";
import CourseCard from "@/components/Cards/CourseCard";
import CourseButton from "@/components/Buttons/CourseButton";

const Conferences = () => {
  return (
    <>
      <section className="bg-IcyBreeze dark:bg-darklight relative overflow-hidden before:absolute before:content-[''] before:bg-PaleSkyBlu before:dark:bg-secondary before:w-687 before:h-687 before:-bottom-1/2 before:rounded-full before:xl:inline-block before:hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center lg:gap-24 gap-5">
            <div
              className="md:pt-0 pt-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="flex items-center md:justify-normal justify-start flex-wrap gap-4">
                <h2>Courses designed for every level</h2>
                
                <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 max-w-500 md:pt-2 pt-5 md:pb-14 pb-6">
                  Our courses. From beginner to advanced, learn english your way.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-80 gap-y-6">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Conferences;
