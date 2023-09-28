import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full h-[5.25rem] flex flex-row px-[6.25rem] py-[0.75rem] items-center justify-between border-b ">
      <div className="flex items-center gap-[0.625rem] ">
        <img src={logo} alt="logo image" className="" />
        <p className="text-[#100A42] font-inter font-[700] leading-[1.21rem] text-[1rem]">
          HelpMeOut
        </p>
      </div>
      <div className=" flex gap-x-[3rem] font-workSans font-[500] text-[1rem] leading-[1.173rem]">
        <Link to="#" className="">
          Features
        </Link>
        <Link to="#" className="">
          How it works
        </Link>
      </div>
      <div>
        <button className="text-[1.125rem] font-sora leading-[1.418rem] font-[600] text-[#120B48]">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar