import {query,collection, addDoc,getDocs,where} from 'firebase/firestore'
import { db,auth} from './index'
export const AddTask = async(dataArray)=>{
    try{
        const user = auth.currentUser;
        const queryForFindingUser = query(collection(db, "UserData" ),where("email", "==", user.email));
        const queryResult = await getDocs(queryForFindingUser);
        let userId;
        queryResult.forEach((doc)=>{
            userId = doc.id;
        })
        dataArray.userId = userId;
        await addDoc(collection(db, `Tasks`), dataArray);
    }catch(err)
    {
        console.log(err);
    }
}