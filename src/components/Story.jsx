// pages/index.js
"use client";
import { ForwardIcon } from "@heroicons/react/20/solid";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";

const staticStories = [
  {
    userId: 1,
    images: ["/insight1.png", "/insight2.png", "/insight7.png"],
  },
  {
    userId: 2,
    images: [
      "/insight3.png",
      "/insight4.png",
      "/insight5.png",
      "/insight6.png",
    ],
  },
];

export default function Story() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openStory = (index) => {
    if (index < staticStories.length) {
      setCurrentStoryIndex(index);
      setCurrentImageIndex(0); // Reset image index whenever a new story is opened
    }
  };
 

  const handleNextImage = () => {
    if (currentImageIndex < staticStories[currentStoryIndex].images.length - 1) {
      // If it's not the last image of the current story, go to the next image
      setCurrentImageIndex(currentImageIndex + 1);
    } else if (currentStoryIndex < staticStories.length - 1) {
      // If it's the last image and not the last story, go to the first image of the next story
      setCurrentStoryIndex(currentStoryIndex + 1);
      setCurrentImageIndex(0);
    }
  };
  
  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      // If it's not the first image of the current story, go to the previous image
      setCurrentImageIndex(currentImageIndex - 1);
    } else if (currentStoryIndex > 0) {
      // If it's the first image and not the first story, go to the last image of the previous story
      setCurrentStoryIndex(currentStoryIndex - 1);
      setCurrentImageIndex(staticStories[currentStoryIndex - 1].images.length - 1);
    }
  };


  const closeStory = () => {
    setCurrentStoryIndex(null);
    setCurrentImageIndex(0);
  };

  return (
    <div className="relative">
      {/* Story Circles */}
      <div>
        <p className="text-center font-semibold text-4xl ">News</p>

        <div className="flex my-8 h-full justify-center w-full p-2  mx-auto gap-x-10 z-10">
          {staticStories.map((story, index) => (
            <div
              key={story.userId}
              className={`w-44 h-44 bg-cover bg-center rounded-full cursor-pointer mx-1 border-2 ${
                index === currentStoryIndex
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
              onClick={() => openStory(index)}
              style={{ backgroundImage: `url(${story.images[0]})` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Story Overlay */}
      {currentStoryIndex !== null && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl h-full max-h-96 bg-black">
            <img
              src={staticStories[currentStoryIndex].images[currentImageIndex]}
              alt="Story"
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full focus:outline-none"
              onClick={handlePrevImage}
            >
              <ArrowLeftCircleIcon className="h-6 w-6 text-black" />
            </button>

            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full focus:outline-none"
              onClick={handleNextImage}
            >
              <ArrowRightCircleIcon className="h-6 w-6 text-black" />
            </button>
            {currentStoryIndex !== staticStories.length - 1 ? (
              <button
                className="absolute top-1/2 right-[-60px] transform -translate-y-1/2 bg-white p-2 rounded-full focus:outline-none"
                onClick={() => {
                  // Move to the next user's story
                  openStory(currentStoryIndex + 1);
                }}
              >
                <ForwardIcon className="h-6 w-6 text-black" />
              </button>
            ) : null}

            <button
              className="absolute top-4 right-4 bg-white p-2 rounded-full focus:outline-none"
              onClick={closeStory}
            >
              <XCircleIcon className="h-6 w-6 text-black" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
