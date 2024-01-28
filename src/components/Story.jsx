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
    logo:"https://aarohan-three.vercel.app/Logo.png",
    images: ["/clients/img3.png" ],
  },
  {
    userId: 1,
    logo:"https://artfi.world/_next/static/media/artfi.922c4dc9.png",
    images: ["/clients/img4.png" ],
  },
  {
    userId: 1,
    logo:"https://cafeyoda.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.3b8888a4.png&w=640&q=75",

    images: ["/clients/img5.png" ],
  },
  {
    userId: 1,
    logo:"/verse.jpeg",
    images: ["/clients/img6.png" ],
  },
  {
    userId: 1,
    logo:"data:image/png;base64,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",
    images: ["/clients/img7.png" ],
  },
  {
    userId: 1,
    logo:"https://www.visioverse.world/logo.png",
    images: ["/clients/img8.png" ],
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
        <p className="text-center font-semibold text-5xl ">Our Various Handsoff</p>
      <p className="text-lg text-center">Here&apos;s the glimpse to some of our previous works</p>
        <div className="flex my-8 h-98 justify-center w-full p-2  mx-auto gap-x-10 z-10">
          {staticStories.map((story, index) => (
            <div
              key={story.userId}
              className={`w-36 h-36 bg-cover bg-center rounded-full cursor-pointer mx-1 border-2 ${
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
          <div className="relative w-full max-w-xl h-auto max-h-full bg-black">
            <img
              src={staticStories[currentStoryIndex].images[currentImageIndex]}
              alt="Story"

              className="w-full h-full hover:scale-95 object-cover rounded-lg"
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
