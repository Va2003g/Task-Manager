import React from "react";
import { useSelector } from "react-redux";
const Dashboard = ()=>{
    const data = useSelector((state)=>state.userData.value);
    console.log(data);
    const imgUrl = data.picture;
    return (
        <div className="flex justify-center items-center flex-col w-full h-full text-6xl gap-11">
            <img src={imgUrl} alt="User Pic" className="w-[10%]"></img>
            <h1>Hi!! {data.name}</h1>
            <h1>Welcome to Docket App</h1>
        </div>
    )
}
export default Dashboard;