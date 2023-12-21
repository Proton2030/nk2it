import React, { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from "typed.js";
import { VideoCard } from '../../../shared/vdocard/VideoCard';

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        '<span style="color: green;">NK2IT - The place for transforming IT</span>',
        '<span style="color: green;">in modern workplace</span>',
      ],
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 25, // backspacing speed in milliseconds
      startDelay: 500, // delay before typing starts in milliseconds
      backDelay: 500, // delay before backspacing starts in milliseconds
      loop: true, // loop the animation
      contentType: 'html', // render strings as HTML
    };
  
    const typed = new Typed(typedTextRef.current, options);
  
    return () => {
      typed.destroy(); // Cleanup the Typed instance when the component unmounts
    };
  }, []);
  

  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-green-300 dark:to-indigo-600"></div>
      </div>
      <div className="w-full mx-auto px-6 md:px-12 xl:px-6">
        <div className="relative pt-36 ml-auto">
          <div
            className="lg:w-2/3 text-center mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              <span ref={typedTextRef}></span>
            </h1>

            <p className="mt-8 text-gray-700 dark:text-gray-300">
              NK2IT PTY LTD is a leading Sydney-based systems integrator (SI)
              and ICT consultancy provider for SMBs, corporate businesses, and
              government agencies. The NK2IT team specializes in custom
              innovative ICT solutions to maximize business productivity and
              efficiency and empower clients to make more informed business
              decisions with faster Return on Investment.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <div data-aos="fade-up">
                <VideoCard />
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between"
            >
              <div className="flex gap-3 items-start">
                <div className="-mt-2">
                  <img
                    className="h-20 w-20"
                    src="https://img.icons8.com/?size=160&id=h2X0Cy3sU70i&format=png"
                    alt=""
                  />
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    The lowest price
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="-mt-2">
                  <img
                    className="h-20 w-20"
                    src="https://img.icons8.com/?size=160&id=113866&format=png"
                    alt=""
                  />
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    The fastest on the market
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="-mt-2">
                  <img
                    className="h-20 w-20"
                    src="https://img.icons8.com/?size=160&id=108633&format=png"
                    alt=""
                  />
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    The most loved
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-12 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5"
          >
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src="https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg"
                className="h-20 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>

            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src="https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-2.jpg"
                className="h-20 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>

            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <img
                src="https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-3.jpg"
                className="h-20 w-auto m-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src="https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-4.jpg"
                className="h-20 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img
                src="https://nk2it.com.au/wp-content/uploads/2021/08/PA_Partner_APPROVED_Color_HighRes.jpg"
                className="h-20 w-auto mx-auto"
                loading="lazy"
                alt="client logo"
                width=""
                height=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
