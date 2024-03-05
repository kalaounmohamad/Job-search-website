import Image from "next/image";
import Link from "next/link";
import Logo from "../../img/logo2.png";

import Overlay from "./Overlay";

export default function Footer() {
  return (
    <footer className="relative px-8 md:px-20 pt-72 sm:pt-60 py-20 bg-primary">
      <div className="max-w-screen-2xl mx-auto w-full 2xl:px-20">
        <div className="absolute top-[-150px] sm:top-[-120px] md:top-[-170px] w-full max-w-screen-2xl left-1/2 transform -translate-x-1/2 ">
          <Overlay />
        </div>
        <div className="flex flex-col flex-wrap xl:flex-nowrap md:flex-row justify-between md:items-center">
          <div className="logo w-full lg:w-2/5 mb-16 xl:mb-0 md:pr-40">
            <Link href="/" className="w-auto ">
              <Image
                src={Logo}
                alt="Jobnow logo"
                width={250}
                loading="eager"
                className="hover:opacity-75 lg:w-[190px]"
              />
            </Link>
            <p className="text-white text-xs font-light mt-4 md:mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              dolores quaerat ipsa voluptatum quo?
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-x-12 md:gap-x-32">
            <div className="flex gap-x-12 md:gap-x-10">
              <div className="company flex flex-col gap-1 text-white text-xs font-light ">
                <h1 className="mb-1 text-xl">Company</h1>
                <ul className="flex flex-col gap-1 w-4/5">
                  <li className=" text-wrap ">
                    Address: 123 Fifth Avenue, New York - 1060, USA
                  </li>
                  <li className="flex gap-1">
                    <p>Call Us: </p>
                    <Link
                      href="tel:+(1600)4567890"
                      className="hover:opacity-70"
                    >
                      <p> +(1600) 456 7890</p>
                    </Link>
                  </li>
                  <li className="flex gap-1">
                    <p>Email: </p>
                    <Link
                      href="mailto:yourid@example.com"
                      className="hover:opacity-70"
                    >
                      <p>yourid@example.com</p>
                    </Link>
                  </li>
                  <li>Mon Sat: 9:00 AM - 19:00 PM</li>
                </ul>
              </div>
              <div className="pages flex flex-col gap-1 text-white text-xs font-light">
                <h1 className="text-xl">Pages</h1>
                <ul className="flex flex-col gap-1">
                  <li href="#" className="hover:opacity-70">
                    <p className="flex items-center">
                      <svg
                        viewBox="0 0 512 512"
                        className="h-5 w-5 -ml-[5px] mr-1 fill-white "
                      >
                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                      </svg>
                      Home
                    </p>
                  </li>

                  <li href="#" className="hover:opacity-70">
                    <p className="flex items-center">
                      <svg
                        viewBox="0 0 512 512"
                        className="h-5 w-5 -ml-[5px] mr-1 fill-white "
                      >
                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                      </svg>
                      Booking
                    </p>
                  </li>

                  <li href="#" className="hover:opacity-70">
                    <p className="flex items-center">
                      <svg
                        viewBox="0 0 512 512"
                        className="h-5 w-5 -ml-[5px] mr-1 fill-white "
                      >
                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                      </svg>
                      Facilities
                    </p>
                  </li>

                  <li href="#" className="hover:opacity-70">
                    <p className="flex items-center">
                      <svg
                        viewBox="0 0 512 512"
                        className="h-5 w-5 -ml-[5px] mr-1 fill-white "
                      >
                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                      </svg>
                      About Us
                    </p>
                  </li>

                  <li href="#" className="hover:opacity-70">
                    <p className="flex items-center">
                      <svg
                        viewBox="0 0 512 512"
                        className="h-5 w-5 -ml-[5px] mr-1 fill-white "
                      >
                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                      </svg>
                      Location
                    </p>
                  </li>

                  <li href="#" className="hover:opacity-70">
                    <p className="flex items-center">
                      <svg
                        viewBox="0 0 512 512"
                        className="h-5 w-5 -ml-[5px] mr-1 fill-white "
                      >
                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                      </svg>
                      Contact
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col text-white">
              <h1 className="mb-2">Contact Us</h1>
              <div className="flex gap-4">
                <Link href="#" className="hover:opacity-70">
                  <svg viewBox="0 0 16 16" className="w-6 fill-white">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                  </svg>
                </Link>
                <Link href="#" className="hover:opacity-70">
                  <svg viewBox="0 0 16 16" className="w-6 fill-white">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                </Link>
                <Link href="#" className="hover:opacity-70">
                  <svg viewBox="0 0 16 16" className="w-6 fill-white">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                  </svg>
                </Link>
                <Link href="#" className="hover:opacity-70">
                  <svg viewBox="0 0 16 16" className="w-6 fill-white">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
