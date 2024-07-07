"use client";

import { FC, useEffect, useRef, useState } from 'react';
import Glider from 'glider-js';
import 'glider-js/glider.min.css';
import { Transition } from '@headlessui/react';
import QuoteLeftIcon from '../Icons/QuoteLeft';
import QuoteRightIcon from '../Icons/QuoteRight';
import "@/app/components/unitComponents/gliderstyles.css";

interface Testimonial {
  text: string;
  user: string;
  designation: string;
  avatar: string; // Assuming avatar is a URL
}

interface GliderCarouselProps {
  testimonials: Testimonial[];
}

const GliderCarousel: FC<GliderCarouselProps> = ({ testimonials }) => {
  const gliderRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (gliderRef.current) {
      const glider = new Glider(gliderRef.current, {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '#dots',
        arrows: {
          prev: '#prev',
          next: '#next',
        },
        rewind: true,
        scrollLock: true,
      });

      const interval = setInterval(() => {
        glider.scrollItem(currentIndex + 1, true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 3000); // Adjust the interval time (in milliseconds) as needed

      return () => {
        clearInterval(interval);
      };
    }
  }, [currentIndex, testimonials.length]);

  const getInitials = (name: string) => {
    const initials = name.match(/\b\w/g) || [];
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  };

  return (
    <div className="relative">
      <div ref={gliderRef} className="overflow-hidden">
        {testimonials.map(({ text, user, designation, avatar }, index) => (
          <div key={index} className="testimonial p-2 md:p-8 mx-4">
            <Transition
              show={true}
              appear={true}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center text-white text-xl font-bold mb-4">
                  {getInitials(user)}
                </div>
                <div className="flex items-center justify-center mb-2 relative max-w-[600px]">
                  <span className='h-full self-start relative md:absolute top-0 md:top-[-30px] left-0 md:left-[-80px]'>
                    <QuoteLeftIcon className="text-2xl md:text-6xl text-primary-400 mr-2" />
                  </span>
                  <p className="text-base md:text-xl text-primary-800 leading-relaxed">
                    {text}
                  </p>
                  <span className='h-full self-end relative md:absolute bottom-0 md:bottom-[-30px] right-0 md:right-[-80px]'>
                    <QuoteRightIcon className="text-2xl md:text-6xl text-primary-400 ml-2" />
                  </span>
                </div>
                <p className="mt-4 font-semibold text-primary-700">{user}</p>
                <p className="text-secondary-600">{designation}</p>
              </div>
            </Transition>
          </div>
        ))}
      </div>
      <button id="prev" className="hidden md:flex glider-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary-500 rounded-full p-2 !text-primary-500">«</button>
      <button id="next" className="hidden md:flex glider-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary-500 rounded-full p-2 !text-primary-500">»</button>
      <div id="dots" className="flex md:hidden justify-center mt-4"></div>
    </div>
  );
};

export default GliderCarousel;
