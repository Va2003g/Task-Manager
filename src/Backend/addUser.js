import {query,collection, addDoc,getDocs,where} from 'firebase/firestore'
import { db } from './index'

export const AddUser = async(data,navigate)=>{
    try{
        const queryForFindingUser = query(collection(db, "UserData" ),where("email", "==", data.email))
        console.log("query",queryForFindingUser);
        const checkUser = await getDocs(queryForFindingUser);
        console.log("checkUser",checkUser.size);
        checkUser.forEach((data)=>console.log(data.data()))
        if(checkUser.size === 0)
        {
            const response = await addDoc(collection(db, "UserData"), {
                firstName: data.firstName,
                lastName:data.lastName,
                email:data.email,
                photo:data.photoUrl,
            });
            console.log(response);
        }
        navigate('/dashboard')
    }catch(err)
    {
        console.log(err);
    }
}