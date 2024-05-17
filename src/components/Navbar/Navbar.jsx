import React from "react";
import { logo } from "../../assets";
import { Search } from "../../assets";


const Navbar = ()=> {
    return (
        <div className="bg-[#FFFFFF] flex shadow-[0px_-1px_0px_0px_#E2E2EA_inset] justify-between h-[8%] items-center p-3">
            <div className="flex justify-between">
                <div className="flex">
                    
                    <img src={logo} alt="logo" className='w-10/12'></img>
                </div>
                <div className="relative flex items-center bg-[#F1F1F1] border w-[20em] rounded-md px-6 h-[51px] hover:outline-[#F1F1F1] hover:outline-2 hover:outline-double gap-1">
                    <span className=""><img src={Search} alt="icon"/></span>
                    <input type="text" placeholder="Search..." className="bg-[#F1F1F1] border-none outline-none"/>
                </div>
            </div>
            <div className="flex">
                <div>Bell Icon</div>
                <div>
                    <span>
                        <span>photo</span>
                        <span>Name</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export {Navbar};