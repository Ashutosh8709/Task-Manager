const express=require('express');
const app=express();
const cors=require("cors");
const corsOptions={
    origin:["http://localhost:5173"],
}
app.use(cors(corsOptions));

const mongoose=require('mongoose');
const Task=require("./models/task");

main().then(()=>{
    console.log("Connected to db");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todo');
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",async (req,res)=>{
    const AllTask=await Task.find({});
    res.json(AllTask);
});

app.put("/complete/:id",async(req,res)=>{
    const updatedTask=await Task.findByIdAndUpdate(req.params.id,{status:true},{new:true});
    res.json(updatedTask);
});

app.delete("/delete/:id",async(req,res)=>{
    const updatedTask=await Task.findByIdAndDelete(req.params.id);
    res.json(updatedTask);
});

app.post("/create",async(req,res)=>{
    const {title,description}=req.body;
    const newTask=new Task({title,description});
    await newTask.save();
    res.json(newTask);
});

app.put("/edit/:id",async(req,res)=>{
    let{title,description}=req.body;
    const EditedTask=await Task.findByIdAndUpdate(req.params.id,
        {title,description},
        {new:true},
    );
    res.json(EditedTask);
});

app.get("/task/:id",async(req,res)=>{
    const task=await Task.findById(req.params.id);
    res.json(task);
})

app.listen(8080,()=>{
    console.log("App is listening on port 8080");
}); 