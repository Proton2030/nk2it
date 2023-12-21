import { Link } from "react-router-dom";
import { useEffect } from "react";

export const NavBar = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".nav");
      const items = document.getElementById("items");
      if (window.scrollY >= 100) {
        navbar!.classList.add("shadow");
        navbar!.classList.add("bg-[#f5f9ff]/30");
        navbar!.classList.remove("bg-[#f5f9ff]");
        items!.classList.remove("justify-end");
    } else {
        items!.classList.add("justify-end");
        items!.classList.add("justify-end");
        navbar!.classList.add("bg-[#f5f9ff]");
        navbar!.classList.remove("bg-[#f5f9ff]/30");
        navbar!.classList.remove("backdrop-blur-lg");
    }
    });
  });

  return (
    <>
      <header>
        <nav className="nav z-10 w-full fixed backdrop-blur-lg border-none bg-opacity-70 ">
          <div className="w-full mx-auto px-6 md:px-12 xl:px-6">
            <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
              <input
                aria-hidden="true"
                type="checkbox"
                name="toggle_nav"
                id="toggle_nav"
                className="hidden peer"
              />
              <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
                <Link to="#home" aria-label="logo" className="flex space-x-2 items-center">
                  <img
                    src="https://nk2it.com.au/wp-content/uploads/2021/08/logo.png"
                    alt=""
                    style={{ width: "120px", height: "50px" }}
                  />
                </Link>

                <div className="relative flex items-center lg:hidden max-h-10">
                  <label
                    role="button"
                    htmlFor="toggle_nav"
                    aria-label="humburger"
                    id="hamburger"
                    className="relative  p-6 -mr-6"
                  >
                    <div
                      aria-hidden="true"
                      id="line"
                      className="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                    ></div>
                    <div
                      aria-hidden="true"
                      id="line2"
                      className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                    ></div>
                  </label>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"
              ></div>
              <div className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none dark:shadow-none dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                  <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-7">
                    <li>
                      <Link
                        to="/"
                        className="block md:px-4 transition hover:text-green-700 rounded-lg"
                      >
                        <span>Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <div className="-mt-1 dropdown dropdown-hover">
                          <div
                            tabIndex={0}
                            role="button"
                            className="m-1 hover:text-green-700"
                          >
                            Solution
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                          >
                            <li>
                              <Link to="/solutions/managedServices">
                                Managed Services
                              </Link>
                            </li>
                            <li>
                              <Link to="">Software Licensing</Link>
                            </li>
                            <li>
                              <Link to="solutions/cloudServices">Cloud</Link>
                            </li>
                            <li>
                              <Link to="">Saas</Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <div className="-mt-1 dropdown dropdown-hover">
                          <div
                            tabIndex={0}
                            role="button"
                            className="m-1 hover:text-green-700 whitespace-nowrap"
                          >
                            Our Packages
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                          >
                            <li>
                              <Link to="">Power and cooling</Link>
                            </li>
                            <li>
                              <Link to="">Unify Comunications</Link>
                            </li>
                            <li>
                              <Link to="">Network infrastructure</Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <div className="-mt-1 dropdown dropdown-hover">
                          <div
                            tabIndex={0}
                            role="button"
                            className="m-1 hover:text-green-700"
                          >
                            Hosting
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                          >
                            <li>
                              <Link to="">cPanel Web Hosting</Link>
                            </li>
                            <li>
                              <Link to="">Cloud Server</Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <div className="-mt-1 dropdown dropdown-hover">
                          <div
                            tabIndex={0}
                            role="button"
                            className="m-1 hover:text-green-700 whitespace-nowrap"
                          >
                            Case Study
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                          >
                            <li>
                              <Link to="">ACM Partner</Link>
                            </li>
                            <li>
                              <Link to="">Taegutec</Link>
                            </li>
                            <li>
                              <Link to="">Hanjin Shipping</Link>
                            </li>
                            <li>
                              <Link to="">RWV Industries</Link>
                            </li>
                            <li>
                              <Link to="">Memjet</Link>
                            </li>
                            <li>
                              <Link to="">FHEC</Link>
                            </li>
                            <li>
                              <Link to="">Langenberg Law</Link>
                            </li>
                            <li>
                              <Link to="">Makinson Lawyers</Link>
                            </li>
                            <li>
                              <Link to="">Data Center Provider</Link>
                            </li>
                            <li>
                              <Link to="">Haines Conveyancing Service</Link>
                            </li>
                            <li>
                              <Link to="">TCASS</Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="block md:px-4 transition hover:text-green-700"
                      >
                        <span>Blog</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ContactUs"
                        className="block md:px-4 transition hover:text-green-700 whitespace-nowrap"
                      >
                        <span>Contact Us</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
