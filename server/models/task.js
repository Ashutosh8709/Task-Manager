const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const taskSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
        default:false,
    }
});

const Task=mongoose.model("Task",taskSchema);
module.exports=Task;