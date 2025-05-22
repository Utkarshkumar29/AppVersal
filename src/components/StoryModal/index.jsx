import React, { useEffect, useState } from "react";
import Slide from "../Slide";
import Bar from "../Bar";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import PlayIcon from "../../assets/icons/PlayIcon";
import PauseIcon from "../../assets/icons/PauseIcon";
import CloseIcon from "../../assets/icons/CloseIcon";

const StoryModal = ({ story, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    console.log("StoryModal", story.slides[currentIndex]);
  const [play, setPlay] = useState(true)
  const [progress, setProgress] = useState(0);

  const nextSlide = () => {
    if (currentIndex < story.slides.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setProgress(0)
    } else {
      onClose()
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
      setProgress(0)
    }
  }

   useEffect(() => {
    if (!play) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (currentIndex < story.slides.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            return 0;
          } else {
            onClose();
            return 0;
          }
        }
        return prev + 2;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [play, currentIndex, story.slides.length, onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center px-4">
  <div className="relative w-full max-w-md h-[70vh] flex flex-col justify-between">
      <Bar slides={story.slides} currentIndex={currentIndex} progress={progress} />
        <Slide slide={story.slides[currentIndex]} />

        <button
          onClick={()=>prevSlide()}
          className="rotate-180 absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full flex items-center justify-center p-2 pr-[5px] "
        >
          <ArrowIcon />
        </button>
        <button
          onClick={()=>nextSlide()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full flex items-center justify-center p-2 pr-[5px]"
        >
          <ArrowIcon />
        </button>
        <button
          onClick={()=>{setPlay(!play)}}
          className={`absolute top-4 right-4 text-white text-lg font-bold p-2 bg-black bg-opacity-50 rounded-full flex items-center justify-center ${play && "p-2.5"}  `}
        >
          {!play ? <PlayIcon/>:<PauseIcon/>}
        </button>
        {story?.slides[currentIndex]?.button_text && (
        <a
          href={story?.slides[currentIndex]?.link}
          target="_blank"
          rel="noopener noreferrer"
          className=" absolute -bottom-12 left-[40%]  text-white text-[16px] leading-[24px] rounded-md mt-2 px-[12px] py-[8px] bg-gray-800 hover:bg-gray-700 transition duration-200"
        >
          {story?.slides[currentIndex]?.button_text}
        </a>
      )}
      </div>
      
      <div className=" absolute top-4 right-4 text-white text-lg font-bold p-2 bg-black bg-opacity-50 rounded-full flex items-center justify-center cursor-pointer" onClick={()=>onClose()}>
        <CloseIcon/>
      </div>
    </div>
  )
}

export default StoryModal
