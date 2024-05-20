import React from "react";

import { Navbar,SideBar,TaskWindow } from "../components";

const Dashboard = ()=>{
    
    return (
        <div>
            <Navbar/>
            <div className="flex ">
                <SideBar/>
                <TaskWindow/>
            </div>
        </div>
    )
}
export default Dashboard;