import React from "react";
import { BookOpen } from "lucide-react";

export default function CourseButton() {
    return(
        <div data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden"
        >
            <span className="!flex !items-center gap-14">
                <BookOpen className="w-6 h-6" />
                Begin course
            </span>
        </div>
    )
}