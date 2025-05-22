import React from "react";

const StoryItem = ({ story, onClick }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={onClick}>
      <div
        className=" w-[80px] h-[80px]  md:w-24 md:h-24 rounded-full p-1"
        style={{ border: `3px solid ${story.ringColor}` }}
      >
        <img
          src={story.thumbnail}
          alt={story.name}
          className="w-full h-full rounded-full object-cover hover:scale-110 transition-transform duration-100"
        />
      </div>
      <span className="inline-block text-sm leading-6 sm:text-base sm:leading-7 md:text-lg md:leading-8 mt-1">
        {story.name}
      </span>
    </div>
  );
};

export default StoryItem;
