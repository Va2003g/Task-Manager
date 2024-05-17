import {doc,setDoc} from 'firebase/firestore'
import { db } from './index'

export const addUser = async(data)=>{
    try{
        await setDoc(doc(db, "Users", '1'), {
            firstName: data.firstName,
            lastName:data.lastName,
            email:data.email,
            photo:data.photoUrl,
        });
    }catch(err)
    {
        console.log(err);
    }
}