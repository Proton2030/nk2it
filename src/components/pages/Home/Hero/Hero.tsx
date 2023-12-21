
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { VideoCard } from '../../../shared/vdocard/VideoCard';
import CompanyList from '../companyList/CompanyList';

const Hero = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="relative" id="home">
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-green-300 dark:to-indigo-600"></div>
      </div>
      <div className='w-full mx-auto px-6 md:px-12 xl:px-6'>
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl " >Shaping a world with <span className="text-gray-800 dark:text-white">reimagination.</span></h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              {/* <a
                href="https://youtu.be/7lcq1xNorrM"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <div>watch video</div>
              </a>
              <a
                href="#"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <div >Learn more</div>
              </a> */}

              
            </div>
            <div className="flex justify-center" data-aos="fade-up" data-aos-duration="2000">  <VideoCard/></div>
          
            <div   className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
              <div data-aos="fade-up"
     data-aos-duration="1000"  className="flex gap-3 items-start ">
                <div className="-mt-2">
                  <img className="h-20 w-20" src="https://img.icons8.com/?size=160&id=h2X0Cy3sU70i&format=png" alt="" />
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The lowest price</h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
              </div>
              <div data-aos="fade-up"
     data-aos-duration="1500" className="flex gap-3 items-start ">
                <div className="-mt-2">
                  <img className="h-20 w-20" src="https://img.icons8.com/?size=160&id=113866&format=png" alt="" />
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The fastest on the market</h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
              </div>
            
              <div data-aos="fade-up"
     data-aos-duration="2000" className="flex gap-3 items-start ">
                <div className="-mt-2">
                  <img className="h-20 w-20" src="https://img.icons8.com/?size=160&id=108633&format=png" alt="" />
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The most loved</h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
              </div>
            
            </div>
          </div>
          {/* <div   className="mt-12 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5">
          
            <div  className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-1.jpg" className="h-20 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
            </div>
          
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-2.jpg" className="h-20 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
            </div>
          
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <img src="https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-3.jpg" className="h-20 w-auto m-auto" loading="lazy" alt="client logo" width="" height="" />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="https://nk2it.com.au/wp-content/uploads/2021/08/scroll-logo-4.jpg" className="h-20 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="https://nk2it.com.au/wp-content/uploads/2021/08/PA_Partner_APPROVED_Color_HighRes.jpg" className="h-20 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
            </div>
            
          </div> */}
        </div>
        <CompanyList/>
      </div>
      
    </div>
  )
}

export default Hero;