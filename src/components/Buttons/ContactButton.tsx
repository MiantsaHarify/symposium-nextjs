import React from "react";
import { Mail } from "lucide-react";

export default function ContactButton() {
    return(
        <div data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden before:bg-ElectricAqua"
        >
            <span className="!flex !items-center gap-14">
                <Mail className="w-6 h-6" />
                Contact us
            </span>
        </div>
    )
}