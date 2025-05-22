import React from "react";

const Slide = ({ slide }) => {
    return (
        <div className="w-full aspect-[9/16] bg-white rounded-xl overflow-hidden shadow-lg  ">
            <img
                src={slide?.image}
                alt="slide"
                className="w-full h-full "
            />
        </div>
    );
};

export default Slide
