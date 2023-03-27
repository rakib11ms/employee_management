import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Register />}></Route>

      </Routes>
    </div>
  );
}

export default App;
