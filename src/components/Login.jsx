import React from "react";
import hero from '../assests/hero.png';
import logo from '../assests/logo.png';
import Google from '../assests/Google.svg';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    let data='';
    const login = useGoogleLogin({
        onSuccess: async (credentialResponse) => {
            //fetching user data by the accesstoken provided by oath library..
            try{
                let response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${credentialResponse.access_token}`);
                if(response.ok)
                {
                    data = await response.json()
                    navigate('/dashboard',{state:{userData:data}});
                }
                console.log('data',data);
            }catch(err){
                console.log(err);
            }
            console.log('credential',credentialResponse);
        },
        onError: (err) => {
            console.log(err);
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