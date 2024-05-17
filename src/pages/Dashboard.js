import React from "react";

import { Navbar,SideBar } from "../components";

const Dashboard = ()=>{
    
    return (
        <div>
            <Navbar/>
            <div className="flex ">
                <SideBar/>
                <div className="mx-auto my-auto">Main Window</div>
            </div>
        </div>
    )
}
export default Dashboard;