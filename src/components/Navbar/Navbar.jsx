import React, { useState } from "react";
import { logo,Bell } from "../../assets";
import { Search } from "../../assets";
import { useSelector } from "react-redux";
import { Logout } from "../Login";


const Navbar = ()=> {
    const data = useSelector((state)=>state.userData.value);
    const imgUrl = data.photoUrl;
    const [showLogout,setShowLogout] = useState(false);
    return (
        <div className="bg-[#FFFFFF] flex shadow-[0px_-1px_0px_0px_#E2E2EA_inset] justify-between h-[8%] items-center p-3 relative">
            <div className="flex justify-between">
                <div className="flex">
                    <img src={logo} alt="logo" className='w-10/12'></img>
                </div>
                <div className="relative flex items-center bg-[#F1F1F1] border w-[20em] rounded-md px-6 h-[51px] hover:outline-[#F1F1F1] hover:outline-2 hover:outline-double gap-1">
                    <span className=""><img src={Search} alt="icon"/></span>
                    <input type="text" placeholder="Search..." className="bg-[#F1F1F1] border-none outline-none"/>
                </div>
            </div>
            <div className="flex justify-center items-center mr-2">
                <div><img src={Bell} alt="" /></div>
                <div className="flex w-full h-full">
                    <div className="flex w-full h-full justify-center items-center gap-3">
                        <img src= {imgUrl} alt="" className="w-[20%] h-[50%] rounded-[50%]" />
                        <span>{data.fullName}</span>
                        <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" onClick={()=>setShowLogout(!showLogout)}>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                        {showLogout ? (<Logout/>):null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Navbar};