const mongoose=require('mongoose');
const initData=require("./data.js");
const Todo=require('../models/task.js');
main().then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
});



async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/todo");
}

const initDB=async()=>{
    await Todo.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj}));
    await Todo.insertMany(initData.data);
}

initDB();