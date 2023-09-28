import React from 'react'
import Navbar from './Navbar'
import woman from '../assets/woman.svg'
import kid from  '../assets/kid.svg'
import lady from '../assets/lady.svg'
import grid from '../assets/grid.svg'
import grid2 from "../assets/grid2.svg";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <section className=" mt-5 flex relative gap-x-2">
        <div className="w-full ml-[6.25rem] flex flex-col mt-[9.9rem] gap-y-[3rem]">
          <div className=" font-sora font-[700] text-[4rem] leading-[4rem]">
            <h1>Show Them</h1>
            <h1>Don't Just Tell</h1>
          </div>

          <p className=" font-inter font-[400] text-[1.25rem] opacity-[75%] leading-[1.75rem]">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website
          </p>
          <div>
            <button className="flex items-center space-x-3 bg-[#120B48] text-white rounded-[0.5rem] px-[1.375rem] py-[1.5rem] font-workSans font-[500] text-[1.125rem]">
              <span>Install HelpMeOut</span>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0254 5.44165L17.0837 10.5L12.0254 15.5583"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.91699 10.5H16.942"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full flex mt-[6.5rem] gap-x-4 mr-10">
          <div className="relative flex flex-col gap-y-5">
            <img
              src={woman}
              alt="woman on laptop"
              className="rounded-[0.5rem]"
            />
            <img
              src={kid}
              alt="father and kid on pc"
              className="rounded-[0.5rem]"
            />
            <img
              src={grid}
              alt="grid dots"
              className="absolute -bottom-[5rem] right-6 opacity-[30%] -z-10"
            />
          </div>
          <div className="flex flex-col">
            <img
              src={grid}
              alt="grid dots"
              className="absolute top-[2.9rem] right-6 opacity-[70%] -z-10"
            />
            <img
              src={lady}
              alt="lady with mobile phone "
              className="rounded-[0.5rem]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home