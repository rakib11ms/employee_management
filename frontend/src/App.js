import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
function App() {
  return (
    <div className="App ">
      <Routes>
      <Route path="/" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>

      </Routes>
    </div>
  );
}

export default App;
