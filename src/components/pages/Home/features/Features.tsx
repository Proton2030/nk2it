import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import mp4 from '../../../../assets/images/mp4.mp4';  
export const Features = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    
<div id="features ">
  <div data-aos="fade-up"
     data-aos-duration="1000" className=' my-24 max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
<div className="md:w-2/6 lg:w-full flex items-center">
  <div className="w-full h-full flex justify-end items-center"> {/* Updated wrapper div with full-screen and right-to-left styles */}
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
        <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
      </svg>
      
      <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
      Revolutionizing Connectivity: PCB and ICT Solutions for a Digital Tomorrow
      </h2>
      <p className="text-gray-600 dark:text-gray-300">Unlock the potential of your online journey with our user-friendly domain management tools, competitive pricing, and expert support. Your domain is more than just a web address – it's your digital brand. As a leading PCB and ICT service provider, we empower businesses with state-of-the-art solutions that drive technological innovation. </p>
    </div>

    {/* Add the video to the right side */}
    <video controls className="w-[25rem] h-[27rem]" width="620" height="600">
  <source src={mp4} type="video/mp4" />
  Your browser does not support the video tag.
</video>

  </div>
</div>


    <div
      className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4"
    >
      <div className="group relative bg-white dark:bg-gray-800 transition hover:bg-orange-400 hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img
            src="https://github.com/Adarshaparati/Eos-suit/blob/main/modular.png?raw=true"
            className="w-24"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div className="space-y-2">
            <h5
              className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-green-700"
            >
              Managed Services
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
            In today's fast-paced digital landscape, businesses are increasingly turning to managed services to streamline their operations, enhance efficiency, and stay ahead of the competition.
            </p>
          </div>
          <a href="#" className="flex items-center justify-between group-hover:text-green-700 group-hover:font-bold">
            <span className="text-sm">Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>                
          </a>
        </div>
      </div>
      <div className="group relative bg-white dark:bg-gray-800 transition hover:bg-orange-400 hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img
            src="https://github.com/Adarshaparati/Eos-suit/blob/main/patent.png?raw=true"
            className="w-24"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div className="space-y-2">
            <h5
              className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-green-700"
            >
             
              Software Licensing
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
            Software licensing is a crucial aspect of the software development and distribution process. It defines the terms and conditions under which users can use, distribute, or modify the software. 
            </p>
          </div>
          <a href="#" className="flex items-center justify-between group-hover:text-green-700 group-hover:font-bold">
            <span className="text-sm">Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>                
          </a>
        </div>
      </div>
      <div className="group relative bg-white dark:bg-gray-800 transition hover:bg-orange-400 hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="relative space-y-8 py-12 p-8">
          <img
            src="https://github.com/Adarshaparati/Eos-suit/blob/main/server.png?raw=true"
            className="w-24"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div className="space-y-2">
            <h5
              className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-green-700"
            >
              Cloud
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
         The cloud has emerged as a transformative force,individuals access information.This ethereal network of servers and services offers unparalleled flexibility, scalability and efficiency.
            </p>
          </div>
          <a href="#" className="flex items-center justify-between group-hover:text-green-700 group-hover:font-bold">
            <span className="text-sm">Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>                
          </a>
        </div>
      </div>
      <div
        className="group relative bg-white dark:bg-gray-800 transition hover:bg-orange-400 hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
      >
        <div
          className="relative space-y-8 py-12 p-8 "
        >
          <img
            src="https://github.com/Adarshaparati/Eos-suit/blob/main/more.png?raw=true"
            className="w-24"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div className="space-y-2">
            <h5
              className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-green-700"
            >
              More features
            </h5>
            <p className="text-gray-600 dark:text-gray-300">
            MSPs proactively monitor IT systems to detect and address potential issues before they escalate into critical problems.such as software updates and security patches,are also performed to ensure optimal performance.
            </p>
          </div>
          <a href="#" className="flex items-center justify-between group-hover:text-green-700 group-hover:font-bold">
            <span className="text-sm">Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>                
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
