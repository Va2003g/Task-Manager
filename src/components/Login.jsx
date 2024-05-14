import React from "react";
import hero from '../assests/hero.png';
import logo from '../assests/logo.png';
import Google from '../assests/Google.svg';
import { useGoogleLogin } from '@react-oauth/google';



const Login = () => {
    const login = useGoogleLogin({
        onSuccess: credentialResponse => {
            console.log(credentialResponse);
        },
        onError: () => {
            console.log('Login Failed');
        },
    });
    return (
        <div className="w-full h-full flex relative justify-evenly">
            <div className="absolute loginDiv inset-0 opacity-50"></div>
            <div className="image relative top-[168.14px]">
                <img src={hero} alt="" className="w-[869.32px] h-[495px]" />
            </div>
            <div className="loginBlock flex flex-col relative top-[331px] gap-3">
                <div className="image">
                    <img src={logo} alt="" />
                </div>
                <div className="message text-[#232324] text-[25.2px] font-[600] leading-[37.8px] tracking-[0.10499993711709976px] text-left">
                    Log In to Your Account
                </div>

                <div className="btn bg-[#FC5A5A] w-[338px] h-[50px] text-white justify-center flex items-center rounded-xl gap-2 text-sm cursor-pointer" onClick={login}>
                    <img src={Google} alt="" />
                    Continue with Google
                </div>
            </div>
        </div>
    )
}

export default Login;