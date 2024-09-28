import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Group from './Pages/Group';
import Research from './Pages/Research';
import Publications from './Pages/Publications';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/group' element={<Group/>} />
        <Route path='/research' element={<Research/>} />
        <Route path='/publications' element={<Publications />} />
      </Routes>
    </div>
  );
}

export default App;
