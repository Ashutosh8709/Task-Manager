import Nav from "./Nav";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


export default function Edit(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

  // Fetch existing data
  useEffect(async() => {
    await axios.get(`http://localhost:8080/task/${id}`).then((res) => {
      setTitle(res.data.title);
      setDescription(res.data.description);
    });
  }, [id]);

  const handleUpdate = async () => {
    await axios.put(`http://localhost:8080/edit/${id}`, {
      title,
      description,
    });
    navigate("/"); 
}// Redirect to main page
    return(
        <div>
            <Nav/>
            <div className="flex flex-wrap justify-center">
            <div className="h-72 w-72 bg-linear-to-tl from-sky-500 to-indigo-500 text-center mt-8 text-white rounded">
                <p className="text-4xl font-bold mt-4">Edit Task</p>
                <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Title" required variant="filled" className="bg-white" value={title} onChange={(event)=>setTitle(event.target.value)}/>
      <TextField id="filled-basic" label="Description" required variant="filled" className="bg-white" value={description} onChange={(event)=>setDescription(event.target.value)}/>
      <Button variant="contained" color="success" onClick={handleUpdate}>Update Task</Button>
    </Box>
            </div>
            
            </div>
        </div>
    );
}
