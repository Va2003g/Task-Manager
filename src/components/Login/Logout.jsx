import React from 'react'
import{auth} from '../../Backend';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const navigate = useNavigate();
    function handleLogOut()
    {
        signOut(auth).then(() => {
            navigate('/');
            console.log(auth.currentUser,'Logged Out')
        }).catch((error) => {
            console.log('While logging out',error)
        });

    }
  return (
    <div className='absolute z-2 top-[90%] left-[92.7%] text-black font-[400] border-[1.5px] border-opacity-5 border-black cursor-pointer' onClick={handleLogOut}>
        <div className='absolute z-3 w-0 h-0 border-x-[15px] border-x-solid border-x-transparent border-b-[18px] border-b-solid border-b-[#E4E4E440]/[90%] left-[38%] -top-[50%]'></div>
        <div className='relative -top-[100%] bg-[#E4E4E440]/[80%] px-5 py-2'>Log Out</div>
    </div>
  )
}

export {Logout}
