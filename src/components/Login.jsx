import React from "react";
import hero from '../assests/hero.png';
import logo from '../assests/logo.png'
// 'background: linear-gradient(180deg, #849BDA 0%, #4D62B3 100%);'
const Login = () => {
    return (
        <div className="loginDiv w-full h-full flex relative justify-evenly">
            <div className="image relative top-[168.14px]">
                <img src={hero} alt="" className="w-[869.32px] h-[495px]"/>
            </div>
            <div className="loginBlock flex flex-col relative top-[331px] gap-3">
                <div className="image">
                    <img src={logo} alt="" />
                </div>
                <div className="message text-[#232324] text-[25.2px] font-[600] leading-[37.8px] tracking-[0.10499993711709976px] text-left">
                    Log In to Your Account
                </div>
                <div className="btn bg-[#FC5A5A] w-[338px] h-[50px] text-white justify-center flex items-center rounded-xl">
                    Continue with Google
                </div>

            </div>
        </div>
    )
}

export default Login;