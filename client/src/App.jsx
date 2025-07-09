import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Todo from './Todo';
import Create from "./Create";
import Card from './Card';
import Edit from './Edit';

function App() {
  const [count, setCount] = useState(0);
  const fetchApi=async()=>{
    // let response=await axios.get('http://localhost:8080/api');
  };
  useEffect(()=>{
    fetchApi();
  },[]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </>
  )
}

export default App
