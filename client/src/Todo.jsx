import { useEffect } from "react";
import OutlinedCard from "./Card";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import Create from "./Create";
import Nav from "./Nav";
import AddIcon from '@mui/icons-material/Add';

export default function Todo(){
    const[tasks,setTasks]=useState([]);
    const navigate = useNavigate();

    const AllTask=async()=>{
    let response=await axios.get('http://localhost:8080');
    setTasks(response.data);
  };

  useEffect(()=>{
    AllTask();
  },[]);

  let markAsCompleted=async(id)=>{
    await axios.put(`http://localhost:8080/complete/${id}`);
    AllTask();
  }

  let deleteTask=async(id)=>{
    await axios.delete(`http://localhost:8080/delete/${id}`);
    AllTask();
  }

    return(
        <div>
            <Nav/>
            <div className="flex justify-end">
                <Button variant="contained"  className="flex flex-wrap justify-center" onClick={() => navigate("/create")}><AddIcon/>Add Tasks</Button>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
                {tasks.map((task)=>(
                    <OutlinedCard key={task._id} title={task.title} description={task.description} status={task.status} onComplete={()=>markAsCompleted(task._id)} delete_Task={()=>{deleteTask(task._id)}} id={task._id}/>
                ))}
            </div>
        </div>
    );

}