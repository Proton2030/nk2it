import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import cust2 from '../../../../assets/images/CUST2.png';
import cust3 from '../../../../assets/images/CUST3.png';
import cust4 from '../../../../assets/images/CUST4.png';
import cust6 from '../../../../assets/images/CUST6.png';
export const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    
<div data-aos="fade-up"
     data-aos-duration="1000" className="text-gray-600 dark:text-gray-300 my-24" id="testimonials">
  <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
    <div className="mb-20 space-y-4 px-6 md:px-0">
      <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
        Testimonial
      </h2>
    </div>
    <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
      
      <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <div className="flex gap-4">
          <img className="w-12 h-12 rounded-full" src={cust2} alt="user avatar" width="200" height="200" loading="lazy"/>
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-white"> Bill Qin</h6>
            <p className="text-sm text-gray-500 dark:text-gray-300">Company Secretary & Financial Controller,Taegutec Tools Australia

</p>
          </div>
        </div>
        <p className="mt-8"> We strongly recommend NK2IT to all the local businesses and recommend them to our business partners, including all our customers and our suppliers. Their service is always beyond people's expectations
</p>
<button
  className="mt-4 bg-red-600 rounded-full text-white px-4 py-2 inline-block"
  onClick={() => {
    window.location.href = "https://www.youtube.com/watch?v=uCLOLev3k-s";
  }}
>
  Go to Intro
</button>


      </div>
      <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <div className="flex gap-2">
          <img className="w-12 h-12 rounded-full" src={cust3}alt="user avatar" width="200" height="200" loading="lazy"/>
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-white">Carmeline van Langenberg</h6>
            <p className="text-sm text-gray-500 dark:text-gray-300">Principal Lawyer

,Langenberg Law

</p>

          </div>
        </div>
        <p className="mt-8">I have always got the opportunity to call somebody at NK2IT and I get an immediate response.</p>
        <button
  className="mt-4 bg-red-600 rounded-full text-white px-4 py-2 inline-block"
  onClick={() => {
    window.location.href = "https://www.youtube.com/watch?v=uCLOLev3k-s";
  }}
>
  Go to Intro
</button>
      </div>
      <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <div className="flex gap-4">
          <img className="w-12 h-12 rounded-full" src={cust4}alt="user avatar" width="200" height="200" loading="lazy"/>
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-white">Kamlesh Patel</h6>
            <p className="text-sm text-gray-500 dark:text-gray-300">IT Infrastructure Manager

,BAPS</p>
          </div>
        </div>
        <p className="mt-8">NK2IT is one of the highly professional motivated IT solutions providers. NK2IT helped us to provide very competitive economic quotes with various options to build better IT infrastructure solution for the BAPS organization. Their customer service is great, quick response and go above and beyond to help. We are so happy to deal with the friendly NK2IT team and would like to recommend them to</p>
        <button 
  className="mt-4 bg-red-600 rounded-full text-white px-4 py-2" 
  onClick={() => {
    window.location.href = "https://www.youtube.com/watch?v=4sB6XyHlLaU";
  }}
>
  Go to Intro
</button>
      </div>
      <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <div className="flex gap-4">
          <img className="w-12 h-12 rounded-full" src={cust6}alt="user avatar" width="200" height="200" loading="lazy"/>
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-white">Nikaesha</h6>
            <p className="text-sm text-gray-500 dark:text-gray-300">Tax Consultant, ACM Partners</p>
          </div>
        </div>
        <p className="mt-8"> I definitely recommend them to any companies looking to collaborate with an efficient IT service provider
</p>
<button
  className="mt-4 bg-red-600 rounded-full text-white px-4 py-2 inline-block"
  onClick={() => {
    window.location.href = "https://www.youtube.com/watch?v=uCLOLev3k-s";
  }}
>
  Go to Intro
</button>
      </div>
      <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <div className="flex gap-4">
          <img className="w-12 h-12 rounded-full" src={cust6} alt="user avatar" width="400" height="400" loading="lazy"/>
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jonathon de Botton
</h6>
            <p className="text-sm text-gray-500 dark:text-gray-300">IT Manager,Business Plaza



</p>
          </div>
        </div>
        <p className="mt-8">NK2IT is a brilliant company, which focuses on customer satisfaction. When dealing with NK2IT they provided me with all the necessary information to make an informed decision. I would strongly recommend doing business with NK2IT in the future</p>
        <button
  className="mt-4 bg-red-600 rounded-full text-white px-4 py-2 inline-block"
  onClick={() => {
    window.location.href = "https://www.youtube.com/watch?v=uCLOLev3k-s";
  }}
>
  Go to Intro
</button>
      </div>

    </div>
  </div>
</div>
  )
}
