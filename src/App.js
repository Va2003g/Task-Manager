import './App.css';
import LoginPage from './pages/LoginPage';
import { Routes , Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
function App() {
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
