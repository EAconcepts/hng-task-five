import React from 'react'
import logo from '../assets/logo.png'
const AllVideos = () => {
  return (
    <div className="w-full flex flex-col p-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-[0.625rem] ">
          <img src={logo} alt="logo image" className="" />
          <p className="text-[#100A42] font-inter font-[700] leading-[1.21rem] text-[1rem]">
            HelpMeOut
          </p>
        </div>
      </div>
    </div>
  );
}

export default AllVideos
