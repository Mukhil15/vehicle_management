import mongoose from "mongoose";
const requestSchema= new mongoose.Schema({
    initiator_id:{
        type:String,
        required:true,
    },
    Purpose:{
        type:String,
        required:true,
    },
    No_of_person:{
        type:Number,
        required:true,
    },
    pickup_place:{
        type:String,
        required:true,
    },
    pickup_Date:{
        type:Date,
        required:true,
    },
    pickup_time:{
        type: String,
        required:true,
    },
    destination:{
        type:String,
        required:true,
    },
    Return_Date:{
        type:Date,
        required:true,
    },
    Return_Time:{
        type: String,
        required:true, 
    },
    Status:{
        type:String,
        default:"INITIALED"
    },
    Reason:{
    type:String,
    },
});
const requestModel=mongoose.model("requests",requestSchema);
export default requestModel;