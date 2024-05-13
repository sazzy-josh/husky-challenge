// import React from 'react'
import Logo from "../../assets/images/white-logo.svg";
import {contactDetails} from "../../utilities/constants";

const Footer = () => {
  return (
    <footer>
      <section className='bg-primaryColor py-2 xl:py-4'>
        <div className='max-w-[1283px] mx-auto px-4 xl:px-0 py-4 xl:py-8 '>
          <div className='flex flex-col xl:flex-row'>
            <div className='w-full xl:w-4/12 xl:px-10 mb-6 xl:mb-0'>
              <img src={Logo} alt='rc_logo' />
            </div>
            <div className='w-full xl:w-4/12 xl:px-6 mb-6 xl:mb-0'>
              <div>
                <h3 className='text-whiteText font-semibold mb-4'>
                  GET IN TOUCH
                </h3>

                <>
                  {contactDetails.map((item, idx) => {
                    return (
                      <div
                        key={idx}
                        className={`flex items-center ${
                          idx !== contactDetails.length - 1 ? "mb-3" : " "
                        }`}
                      >
                        <img
                          src={item.icon}
                          alt={item.altText}
                          className='mr-3 w-4 h-4 lg:w-6 lg:h-6'
                        />
                        <a
                          href='#'
                          className='text-whiteText text-sm lg:text-base font-normal'
                        >
                          {item.text}
                        </a>
                      </div>
                    );
                  })}
                </>
              </div>
            </div>
            <div className='w-full xl:w-4/12 xl:px-6'>
              <h3 className='text-whiteText font-semibold mb-4'>
                {" "}
                QUICK LINKS{" "}
              </h3>
              <div className='flex flex-col xl:flex-row gap-x-6 text-sm xl:text-base'>
                <div className='flex flex-col'>
                  {["Homepage", "About Us", "Services"].map(
                    (item, idx, arr) => {
                      return (
                        <a
                          className={`text-base text-whiteText ${
                            idx !== arr.length ? "mb-2" : " "
                          }`}
                          key={idx}
                        >
                          {item}
                        </a>
                      );
                    },
                  )}
                </div>

                <div className='flex flex-col'>
                  {["Contact", "Projects"].map((item, idx, arr) => {
                    return (
                      <a
                        className={`text-base text-whiteText ${
                          idx !== arr.length ? "mb-2" : " "
                        }`}
                        key={idx}
                      >
                        {item}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='text-center text-[#0A437A] bg-bgColor !font-worksans text-sm xl:text-base py-4 xl:py-8'>
        © {new Date().getFullYear()}, RC Stone Inc., All Rights Reserved.
      </section>
    </footer>
  );
};

export default Footer;
