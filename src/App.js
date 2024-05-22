import './App.css';
import LoginPage from './pages/LoginPage';
import { Routes , Route, useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './Backend'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { update } from "./Redux/UserData/UserDataSlice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        //user is logged in
        dispatch(update(user));
        navigate('/dashboard');
      }
      else{
        //user is null and so it is not logged in
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
