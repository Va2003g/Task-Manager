import './App.css';
import {LoginPage,Dashboard} from './pages';
import { Routes , Route, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import {auth,db} from './Backend'
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { update,updateId } from "./Redux/UserData/UserDataSlice";
import {query,collection,getDocs,where} from 'firebase/firestore';
import {FetchTask} from './services/FetchTask'
import {updateTasks} from './Redux/TaskData/taskSlice'

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth,async (user)=>{
      if(user){
        //user is logged in
        dispatch(update(user));
        const queryForFindingUser = query(collection(db, "UserData" ),where("email", "==", user.email));
        const queryResultForFindingUser = await getDocs(queryForFindingUser);
        let id = queryResultForFindingUser.docs[0].id;
        queryResultForFindingUser.forEach((doc)=>{
            id = doc.id;
        })
        dispatch(updateId(id));
        const data = await FetchTask(id);
        console.log('in app',data);
        dispatch(updateTasks(data))
        navigate('/dashboard');
      }
      else{
        navigate('/');
      }
    })
  },[dispatch,navigate])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
