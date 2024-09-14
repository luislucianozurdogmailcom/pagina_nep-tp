import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Group from './Pages/Group';
import Research from './Pages/Research';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/group' element={<Group/>} />
        <Route path='/research' element={<Research/>} />
      </Routes>
    </div>
  );
}

export default App;
