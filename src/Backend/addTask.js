import {doc,setDoc} from 'firebase/firestore'
import { db } from './index'

export const AddTask = async()=>{
    try{
        await setDoc(doc(db, "cities", "LA"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA"
        });
    }catch(err)
    {
        console.log(err);
    }
}