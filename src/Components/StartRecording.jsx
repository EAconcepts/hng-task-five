import React from 'react'
import logo2 from '../assets/logo2.png'
import monitor from '../assets/monitor.svg'
import copy from "../assets/copy.svg";

const StartRecording = () => {
  return (
    <div className="w-[18.75rem] flex flex-col px-[1.5rem] pb-[2rem] pt-[1.5rem] rounded-[1.5rem] gap-y-[2rem] shadow-md">
      <nav className=" w-full flex flex-row justify-between">
        <div className="flex items-center gap-[0.625rem] ">
          <img src={logo2} alt="logo image" className="" />
          <p className="text-[#120B48] font-sora font-[700] leading-[1.26rem] text-[1rem]">
            HelpMeOut
          </p>
        </div>
        <div className="flex gap-x-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
              stroke="#120B48"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.6665 10.7334V9.2667C1.6665 8.40003 2.37484 7.68336 3.24984 7.68336C4.75817 7.68336 5.37484 6.6167 4.6165 5.30836C4.18317 4.55836 4.4415 3.58336 5.19984 3.15003L6.6415 2.32503C7.29984 1.93336 8.14984 2.1667 8.5415 2.82503L8.63317 2.98336C9.38317 4.2917 10.6165 4.2917 11.3748 2.98336L11.4665 2.82503C11.8582 2.1667 12.7082 1.93336 13.3665 2.32503L14.8082 3.15003C15.5665 3.58336 15.8248 4.55836 15.3915 5.30836C14.6332 6.6167 15.2498 7.68336 16.7582 7.68336C17.6248 7.68336 18.3415 8.3917 18.3415 9.2667V10.7334C18.3415 11.6 17.6332 12.3167 16.7582 12.3167C15.2498 12.3167 14.6332 13.3834 15.3915 14.6917C15.8248 15.45 15.5665 16.4167 14.8082 16.85L13.3665 17.675C12.7082 18.0667 11.8582 17.8334 11.4665 17.175L11.3748 17.0167C10.6248 15.7084 9.3915 15.7084 8.63317 17.0167L8.5415 17.175C8.14984 17.8334 7.29984 18.0667 6.6415 17.675L5.19984 16.85C4.4415 16.4167 4.18317 15.4417 4.6165 14.6917C5.37484 13.3834 4.75817 12.3167 3.24984 12.3167C2.37484 12.3167 1.6665 11.6 1.6665 10.7334Z"
              stroke="#120B48"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99984 18.3334C14.5832 18.3334 18.3332 14.5834 18.3332 10.0001C18.3332 5.41675 14.5832 1.66675 9.99984 1.66675C5.4165 1.66675 1.6665 5.41675 1.6665 10.0001C1.6665 14.5834 5.4165 18.3334 9.99984 18.3334Z"
              stroke="#B6B3C6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.6416 12.3583L12.3583 7.6416"
              stroke="#B6B3C6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.3583 12.3583L7.6416 7.6416"
              stroke="#B6B3C6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </nav>
      <p className="mt- pr-5 font-workSans font-[400] text-[0.875rem] text-[#413C6D] leading-[1.026rem]">
        This extension helps you record and share help videos with ease.
      </p>
      <div className="w-full px-3 flex flex-col gap-y-[1.5rem]">
        <div className="flex justify-between  px-[1.3rem]">
          <div className="flex flex-col items-center">
            <img
              src={monitor}
              alt="monitor icon"
              className="w-[2rem] h-[2rem]"
            />
            <p className=" font-workSans font-[500] text-[0.875rem] text-[#928FAB] leading-[1.026rem]">
              Full screen
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={copy} alt="monitor icon" className="w-[2rem] h-[2rem]" />
            <p className=" font-workSans font-[600] text-[0.875rem] leading-[1.026rem] text-[#120B48]">
              Current Tab
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between border py-[0.75rem] pr-[0.75rem] pl-[1rem] rounded-[0.75rem]">
          <div className=" flex gap-x-[0.25rem]">
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.75 6.5L19.4697 1.78033C19.9421 1.30786 20.75 1.64248 20.75 2.31066V13.6893C20.75 14.3575 19.9421 14.6921 19.4697 14.2197L14.75 9.5M3.5 14.75H12.5C13.7426 14.75 14.75 13.7426 14.75 12.5V3.5C14.75 2.25736 13.7426 1.25 12.5 1.25H3.5C2.25736 1.25 1.25 2.25736 1.25 3.5V12.5C1.25 13.7426 2.25736 14.75 3.5 14.75Z"
                stroke="#0F172A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className=" font-workSans font-[500] text-[0.875rem] text-[#100A42] leading-[1.026rem]">
              Camera
            </span>
          </div>
          <div className="w-[2.25rem] h-[1.25rem] flex items-center  bg-[#120B48] p-[0.125rem] rounded-[0.75rem]">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dd_358_4063)">
                <circle cx="11" cy="10" r="8" fill="white" />
              </g>
              <defs>
                <filter
                  id="filter0_dd_358_4063"
                  x="0"
                  y="0"
                  width="22"
                  height="22"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_358_4063"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_358_4063"
                    result="effect2_dropShadow_358_4063"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_358_4063"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="w-full flex justify-between border py-[0.75rem] pr-[0.75rem] pl-[1rem] rounded-[0.75rem]">
          <div className=" flex gap-x-[0.25rem] items-center">
            <svg
              width="14"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18.75C10.3137 18.75 13 16.0637 13 12.75V11.25M7 18.75C3.68629 18.75 1 16.0637 1 12.75V11.25M7 18.75V22.5M3.25 22.5H10.75M7 15.75C5.34315 15.75 4 14.4069 4 12.75V4.5C4 2.84315 5.34315 1.5 7 1.5C8.65685 1.5 10 2.84315 10 4.5V12.75C10 14.4069 8.65685 15.75 7 15.75Z"
                stroke="#0F172A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className=" font-workSans font-[500] text-[0.875rem] text-[#100A42] leading-[1.026rem]">
              Audio
            </span>
          </div>
          <div className="w-[2.25rem] h-[1.25rem] flex items-center  bg-[#120B48] p-[0.125rem] rounded-[0.75rem]">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dd_358_4063)">
                <circle cx="11" cy="10" r="8" fill="white" />
              </g>
              <defs>
                <filter
                  id="filter0_dd_358_4063"
                  x="0"
                  y="0"
                  width="22"
                  height="22"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_358_4063"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_358_4063"
                    result="effect2_dropShadow_358_4063"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_358_4063"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <button className="w-full bg-[#120B48] p-[1rem] font-workSans font-[500] text-[1rem] text-[#FAFDFF] leading-[1.173rem] rounded-xl">
          Start Recording
        </button>
      </div>
    </div>
  );
}

export default StartRecording