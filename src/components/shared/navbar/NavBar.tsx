

export const NavBar = () => {
    return (
        <>
            <header>
                <nav className="z-10 w-full  fixed">
                    <div className="w-full mx-auto px-6 md:px-12 xl:px-6">
                        <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
                            <input aria-hidden="true" type="checkbox" name="toggle_nav" id="toggle_nav" className="hidden peer" />
                            <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
                            <a href="#home" aria-label="logo" className="flex space-x-2 items-center">
  <img
    src="https://nk2it.com.au/wp-content/uploads/2021/08/logo.png"
    alt=""
    style={{ width: '50px', height: '50px' }} // Adjust the size as needed
  />
</a>

                                <div className="relative flex items-center lg:hidden max-h-10">
                                    <label role="button" htmlFor="toggle_nav" aria-label="humburger" id="hamburger" className="relative  p-6 -mr-6">
                                        <div aria-hidden="true" id="line" className="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                                        <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                                    </label>
                                </div>
                            </div>
                            <div aria-hidden="true" className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"></div>
                            <div className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                            dark:shadow-none dark:bg-gray-800 dark:border-gray-700">

                                <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                                    <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-7">
                                        <li>
                                            <a href="#Home" className="block md:px-4 transition hover:text-green-700">
                                                <span>Home</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href=""><div className="-mt-1 dropdown dropdown-hover">
                                                <div tabIndex={0} role="button" className=" m-1 hover:text-green-700">Solution</div>
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a href="/solutions/managedServices">Managed Services</a></li>
                                                    <li><a>Software Licensing</a></li>
                                                    <li><a href="solutions/cloudServices">Cloud</a></li>
                                                    <li><a>Saas</a></li>
                                                </ul>
                                            </div></a>

                                        </li>
                                        <li>
                                            <a href=""><div className="-mt-1 dropdown dropdown-hover">
                                            <div tabIndex={0} role="button" className="m-1 hover:text-green-700 whitespace-nowrap">
  Our Packages
</div>

                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Power and cooling</a></li>
                                                    <li><a>Unify Comunications</a></li>
                                                    <li><a>Network infrastructure</a></li>
                                                </ul>
                                            </div></a>

                                        </li>
                                        <li>
                                            <a href=""><div className="-mt-1 dropdown dropdown-hover">
                                                <div tabIndex={0} role="button" className=" m-1 hover:text-green-700">Hosting</div>
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>cPanel Web Hosting</a></li>
                                                    <li><a>Cloud Server</a></li>
                                                </ul>
                                            </div></a>

                                        </li>
                                        <li>
                                            <a href=""><div className="-mt-1 dropdown dropdown-hover">
                                            <div tabIndex={0} role="button" className="m-1 hover:text-green-700 whitespace-nowrap">
  Case Study
</div>

                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>ACM Partner</a></li>
                                                    <li><a>Taegutec</a></li>
                                                    <li><a>Hanjin Shipping</a></li>
                                                    <li><a>RWV Industries</a></li>
                                                    <li><a>Memjet</a></li>
                                                    <li><a>FHEC</a></li>
                                                    <li><a>Langenberg Law</a></li>
                                                    <li><a>Makinson Lawyers</a></li>
                                                    <li><a>Data Center Provider</a></li>
                                                    <li><a>Haines Conveyancing Service</a></li>
                                                    <li><a>TCASS</a></li>
                                                </ul>
                                            </div></a>

                                        </li>

                                        {/* <li>
                                            <a href="#testimonials" className="block md:px-4 transition hover:text-green-700">
                                                <span>Testimonials</span>
                                            </a>
                                        </li> */}
                                        <li>
                                            <a href="#blog" className="block md:px-4 transition hover:text-green-700">
                                                <span>Blog</span>
                                            </a>
                                            
                                        </li>
                                        
                                        <li>
                                            <a href="#blog" className="block md:px-4 transition hover:text-green-700 whitespace-nowrap">
                                                         <span>Contact Us</span>
                                                            </a>
                                        </li>
                                        
                                  
                                
                                    </ul>
                                    
                                </div>

                        
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
