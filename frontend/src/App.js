import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import DashboardMain from './pages/Dashboard/DashboardMain';
function App() {
  return (
    <div className="App ">
      <Routes>
      <Route path="/" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/dashboard" element={<DashboardMain />}></Route>

      </Routes>
    </div>
  );
}

export default App;
