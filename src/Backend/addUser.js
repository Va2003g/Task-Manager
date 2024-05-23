import {query,collection, addDoc,getDocs,where} from 'firebase/firestore'
import { db } from './index'

export const AddUser = async(data,navigate)=>{
    try{
        const queryForFindingUser = query(collection(db, "UserData" ),where("email", "==", data.email))
        const checkUser = await getDocs(queryForFindingUser);
        if(checkUser.size === 0)
        {
            const response = await addDoc(collection(db, "UserData"), {
                firstName: data.firstName,
                lastName:data.lastName,
                email:data.email,
                photo:data.photoUrl | data.photoURL,
            });
            console.log(response);
        }
        navigate('/dashboard')
    }catch(err)
    {
        console.log(err);
    }
}