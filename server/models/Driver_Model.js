import mongoose from "mongoose";
const driverSchema=new mongoose.Schema({
    
driver_id:{
    type:String,
    required:true
},
driver_name:{
    type:String,
    required:true
},
Age:{
type:Number,
required:true
},
Phone_number:{
    type:Number,
 required:true
},
Address:{
    type:String,
    required:true
},
Aadhar_number:{
    type:Number,
    required:true
},
Licence_number:{
    type:String,
    required:true
},
Expiry_date:{
    type:Date,
    required:true
},
Licence_type:{
    type:String,
    required:true,
    enum:['LMV','HMV','HMGV','Two_Wheeler']
}
});
const driverModel=mongoose.model("drivers",driverSchema);
export default driverModel;