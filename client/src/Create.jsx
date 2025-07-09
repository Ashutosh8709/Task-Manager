import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

export default function Create(){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const navigate = useNavigate();

    const handleSubmit=async()=>{
        if (!title.trim() || !description.trim()) return alert("Fill all fields!");
    await axios.post("http://localhost:8080/create", { title, description });
    navigate("/");
    };
    return(
        <div>
            <Nav/>
            <div className="flex flex-wrap justify-center">
            <div className="h-72 w-72 bg-linear-to-tl from-sky-500 to-indigo-500 text-center mt-8 text-white rounded">
                <p className="text-4xl font-bold mt-4">Add Task</p>
                <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Title" required variant="filled" className="bg-white" value={title} onChange={(event)=>setTitle(event.target.value)}/>
      <TextField id="filled-basic" label="Description" required variant="filled" className="bg-white" value={description} onChange={(event)=>setDescription(event.target.value)}/>
      <Button variant="contained" color="success" onClick={handleSubmit}>Save Task</Button>
    </Box>
            </div>
            
            </div>
            
        </div>
    );
}