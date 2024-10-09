import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Group from './Pages/Group';
import Research from './Pages/Research';
import Publications from './Pages/Publications';
import Contact from './Pages/Contact';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/About us' element={<Group/>} />
        <Route path='/research' element={<Research/>} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
