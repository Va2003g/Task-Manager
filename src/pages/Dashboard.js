import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../components/Navbar";
const Dashboard = ()=>{
    const data = useSelector((state)=>state.userData.value);
    return (
        <div>
            <Navbar/>
        </div>
    )
}
export default Dashboard;