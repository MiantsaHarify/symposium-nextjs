import React from "react";
import { Plus } from "lucide-react";

export default function AllCourseButton() {
    return(
        <div data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
            className="btn_outline btn-2 hover-outline-slide-down group"
        >
            <span className="!flex !items-center gap-14">
                <Plus className="w-6 h-6 group-hover:text-white" />
                See all courses
            </span>
        </div>
    )
}