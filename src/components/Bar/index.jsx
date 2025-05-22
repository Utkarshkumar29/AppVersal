import React from "react";

const Bar = ({ slides, currentIndex, progress }) => {
  return (
    <div className="flex gap-1 mb-2">
      {slides.map((slide, index) => {
        let width = 0;

        if (index < currentIndex) {
          width = 100;
        } else if (index === currentIndex) {
          width = progress;
        }

        return (
          <div
            key={index}
            className="h-2 rounded-[4px] flex-1 bg-gray-400 overflow-hidden"
          >
            <div
              className="bg-white h-full"
              style={{
                width: `${width}%`,
                transition: "width 0.5s ease-in-out",
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Bar;
