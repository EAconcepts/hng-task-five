import React from 'react'
import pause from '../assets/pause.svg'

const RecordPane = () => {
  return (
    <div className="absolute w-[32rem] h-[7.5rem] bottom-3 left-[2.5rem] border  ">
      <div className="w-[] flex gap-x-[1.5rem] py-[0.75rem] px-[0.75rem] pr-[2.5rem] rounded-[12.25rem] bg-[#141414] text-white">
        <div className="flex items-center border-r border-white p-[1rem] gap-x-[0.5rem]">
          <p className="font-inte leading-[1.513rem] font-[500] text-[1.25rem] ">
            00:03:45
          </p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="20"
              height="20"
              rx="10"
              fill="#C00404"
              fill-opacity="0.19"
            />
            <rect x="5" y="5" width="10" height="10" rx="5" fill="#C00404" />
          </svg>
        </div>
        <div className="w-full flex justify-between">
          <div className="flex flex-col items-center gap-y-[0.25rem] text-center">
            <div
              className="flex items-center justify-center rounded-full
            w-[2.75rem] h-[2.75rem] bg-white p-[0.625rem]"
            >
              <svg
                width="10"
                height="14"
                viewBox="0 0 10 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.5L1 12.5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M9 1.5L9 12.5"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <p>Pause</p>
          </div>
          <div className="flex flex-col items-center gap-y-[0.25rem] text-center">
            <div className="flex items-center justify-center rounded-full w-[2.75rem] h-[2.75rem] bg-white p-[0.625rem]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 3.5C1.25 2.25736 2.25736 1.25 3.5 1.25H12.5C13.7426 1.25 14.75 2.25736 14.75 3.5V12.5C14.75 13.7426 13.7426 14.75 12.5 14.75H3.5C2.25736 14.75 1.25 13.7426 1.25 12.5V3.5Z"
                  stroke="#0F172A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p>Stop</p>
          </div>
          <div className="flex flex-col items-center text-center gap-y-[0.25rem] relative">
            <div className="relative rounded-full w-[2.75rem] h-[2.75rem] bg-white p-[0.625rem]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.75 10.5L20.4697 5.78033C20.9421 5.30786 21.75 5.64248 21.75 6.31066V17.6893C21.75 18.3575 20.9421 18.6921 20.4697 18.2197L15.75 13.5M4.5 18.75H13.5C14.7426 18.75 15.75 17.7426 15.75 16.5V7.5C15.75 6.25736 14.7426 5.25 13.5 5.25H4.5C3.25736 5.25 2.25 6.25736 2.25 7.5V16.5C2.25 17.7426 3.25736 18.75 4.5 18.75Z"
                  stroke="#0F172A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                className="absolute -bottom-3 right-0 "
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_597_1368)">
                  <rect x="4" width="12" height="12" rx="2" fill="white" />
                  <path
                    d="M12.6399 7.01671L10.4665 4.84338C10.2099 4.58671 9.78986 4.58671 9.5332 4.84338L7.35986 7.01671"
                    stroke="black"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_597_1368"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
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
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_597_1368"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_597_1368"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            <p>Camera</p>
          </div>
          <div className="flex flex-col items-center text-center gap-y-[0.25rem]">
            <div className="relative rounded-full w-[2.75rem] h-[2.75rem] bg-white p-[0.625rem]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 18.75C15.3137 18.75 18 16.0637 18 12.75V11.25M12 18.75C8.68629 18.75 6 16.0637 6 12.75V11.25M12 18.75V22.5M8.25 22.5H15.75M12 15.75C10.3431 15.75 9 14.4069 9 12.75V4.5C9 2.84315 10.3431 1.5 12 1.5C13.6569 1.5 15 2.84315 15 4.5V12.75C15 14.4069 13.6569 15.75 12 15.75Z"
                  stroke="#0F172A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                className="absolute -bottom-3 right-0"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_597_1368)">
                  <rect x="4" width="12" height="12" rx="2" fill="white" />
                  <path
                    d="M12.6399 7.01671L10.4665 4.84338C10.2099 4.58671 9.78986 4.58671 9.5332 4.84338L7.35986 7.01671"
                    stroke="black"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_597_1368"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
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
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_597_1368"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_597_1368"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            <p>Mic</p>
          </div>
          <div>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                fill="#4B4B4B"
              />
              <path
                d="M24.7404 19L24.3942 28M19.6058 28L19.2596 19M29.2276 15.7906C29.5696 15.8422 29.9104 15.8975 30.25 15.9563M29.2276 15.7906L28.1598 29.6726C28.0696 30.8448 27.0921 31.75 25.9164 31.75H18.0836C16.9079 31.75 15.9304 30.8448 15.8402 29.6726L14.7724 15.7906M29.2276 15.7906C28.0812 15.6174 26.9215 15.4849 25.75 15.3943M13.75 15.9563C14.0896 15.8975 14.4304 15.8422 14.7724 15.7906M14.7724 15.7906C15.9188 15.6174 17.0785 15.4849 18.25 15.3943M25.75 15.3943V14.4782C25.75 13.2988 24.8393 12.3142 23.6606 12.2765C23.1092 12.2589 22.5556 12.25 22 12.25C21.4444 12.25 20.8908 12.2589 20.3394 12.2765C19.1607 12.3142 18.25 13.2988 18.25 14.4782V15.3943M25.75 15.3943C24.5126 15.2987 23.262 15.25 22 15.25C20.738 15.25 19.4874 15.2987 18.25 15.3943"
                stroke="#BEBEBE"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="0.5"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                stroke="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordPane