// import React from "react";
import {useState} from "react";
import LeftArrow from "../../assets/svg/left-arrow.svg";
import {dropDownItems} from "../../utilities/constants";
import DropDown from "../Dropdown";
import GeneralContracting from "./GeneralContracting";
import InterLocking from "./Interlocking";
import Landscaping from "./Landscaping";
import Pools from "./Pools";
import PropertyManagement from "./PropertyManagement";
import SnowRemoval from "./SnowRemoval";

const ServicesLayout = () => {
  const [selectedItem, setSelectedItem] = useState({
    text: "Services",
    value: "services",
  });

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <section className='bg-bgColor'>
      <div className='max-w-[1283px] mx-auto px-4 xl:px-0'>
        <div className='flex justify-between text-base pt-4 xl:pt-8'>
          <div className='flex items-center'>
            <img
              src={LeftArrow}
              className='w-4 h-4 xl:w-6 xl:h-6'
              alt='arrow'
            />
            <p className='ml-2 text-[#373632]'>Return</p>
          </div>

          <p className='text-[#565450]'>Home / Services</p>
        </div>

        <div className='flex items-center justify-between w-full pt-5 xl:pt-9'>
          <h3 className='text-darkText text-xl capitalize xl:text-2xl  font-medium'>
            {selectedItem.value}
          </h3>

          <DropDown
            width='210px'
            closeOnClick
            selectedItem={selectedItem}
            dropdownItems={dropDownItems}
            handleSelectedItem={handleItemClick}
          />
        </div>

        <div className='py-8 xl:py-16'>
          <h2 className='text-darkText font-bold text-3xl xl:text-4xl mb-4 leading-[35px] xl:leading-[46px]'>
            Explore Our Diverse{" "}
            <span className='text-primaryColor'>Outdoor Services</span>
          </h2>

          <p className='text-darkText text-base'>
            At RC Stone Inc., we take pride in offering a spectrum of services
            designed to cater to all your outdoor needs. From innovative
            landscaping to meticulous snow removal, seamless pool installations,
            and expert contracting – our services redefine what&apos;s possible
            for your outdoor spaces. Dive into our offerings and let us bring
            your vision to life.
          </p>
        </div>

        {/* LANDSCAPING SERVICES*/}
        <Landscaping />
        {/* SNOW REMOVAL SERVICES*/}
        <SnowRemoval />
        {/* POOL SERVICES*/}
        <Pools />
        {/* PROPERTY MANAGEMENT SERVICES*/}
        <PropertyManagement />
        {/* INTERLOCKING SERVICES*/}
        <InterLocking />
        {/* GENERAL CONTRACTING SERVICES*/}
        <GeneralContracting />
      </div>
    </section>
  );
};

export default ServicesLayout;
