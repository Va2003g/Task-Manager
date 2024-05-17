import React from "react";
import { hero, logo, Google } from "../../assets";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { update } from "../../Redux/UserData/UserDataSlice";
import {auth,provider,addUser} from '../../Backend'
import { signInWithPopup} from "firebase/auth";

// export const Login = () => {
export const Login = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () =>{
    signInWithPopup(auth,provider).then((data)=>{
      console.log(data);
      dispatch(update(data._tokenResponse));
      addUser(data._tokenResponse);
      navigate('/dashboard')
    }).catch((err)=>console.log(err));
  }
  return (
    <div className="login w-full h-full flex relative justify-evenly">
      <div className="absolute loginDiv inset-0 opacity-50"></div>
      <div className="image relative top-[168.14px]">
        <img src={hero} alt="" className="w-[869.32px] h-[495px] aspect-auto" />
      </div>
      <div className="loginBlock flex flex-col relative top-[331px] gap-3">
        <div className="imageLogo">
          <img src={logo} alt="" />
        </div>
        <div className="message text-[#232324] text-[25.2px] font-[600] leading-[37.8px] tracking-[0.10499993711709976px] text-left">
          Log In to Your Account
        </div>
        <div
          className="btn bg-[#FC5A5A] w-[338px] h-[50px] text-white justify-center flex items-center rounded-xl gap-2 text-sm cursor-pointer hover:bg-red-500"
          onClick={handleLogin}
        >
          <img src={Google} alt="" />
          Continue with Google
        </div>
      </div>
    </div>
  );
};
