import React from 'react'
import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div>
      <div className="w-full flex flex-col">
        <div className="flex items-center gap-[0.625rem] mx-[7.063rem] mt-20">
          <img src={logo} alt="logo image" className="" />
          <p className="text-[#100A42] font-inter font-[700] leading-[1.21rem] text-[1rem]">
            HelpMeOut
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className=" max-w-[29.688rem] flex flex-col items-center">
          <div className="w-[20.063rem] flex flex-col items-center">
            <h1 className=" font-inter font-[700] text-[2rem] leading-[3rem] text-[#141414]">
              Log in or Sign up
            </h1>
            <p
              className=" font-[300] text-[0.875] text-[#434343] leading-[1.313] text-center"
            >
              Join millions of others in sharing successful moves on HelpMeOut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login