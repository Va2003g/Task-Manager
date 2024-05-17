import {doc,collection, addDoc} from 'firebase/firestore'
import { db } from './index'

export const addUser = async(data)=>{
    try{
        const response = await addDoc(collection(db, "UserData"), {
            firstName: data.firstName,
            lastName:data.lastName,
            email:data.email,
            photo:data.photoUrl,
        });
        console.log(response);
    }catch(err)
    {
        console.log(err);
    }
}