import mongoose from "mongoose";
const vehicleSchema=new mongoose.Schema({
    vehicle_id:{
        type:String,
        required:true
    },
    
    Type_of_vehicle:{
        type:String,
        required:true,
        enum:["Bus","Goods_vehicle","Car","Two_Wheeler"]
    },
    vehicle_number:{
        type:Number,
        required:true
    },
    Default_Driver:{
        type:String,
        required:true
    },
    Registration_Date:{
        type:Date,
        required:true,
    },
    Fitness_Certificate_Next_Inspection_Date:{
        type:Date,
        required:true,
    },
    Fitness_Certificate_Expiry_Date:{
        type:Date,
        required:true,
    },
    Road_tax:{
        type:String,
        required:true,
        enum:["Paid","Unpaid"]
    },
    Permit:{
        type:String,
        required:true,
    },
    Green_Tax:{
        type:String,
        required:true,
        enum:["Paid","Unpaid"]
    }
});
const vehicleModel=mongoose.model("vehicles",vehicleSchema);
export default vehicleModel;