import React from "react";

import { Navbar,SideBar,TaskWindow } from "../components";

const Dashboard = ()=>{
    
    return (
        <div>
            <Navbar/>
            <div className="flex gap-2">
                <SideBar/>
                <TaskWindow/>
            </div>
        </div>
    )
}
export {Dashboard}