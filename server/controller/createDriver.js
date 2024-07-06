import driverModel from "../models/Driver_Model.js";
export async function createDriver(req,res){
    try{
        const newDriver=new driverModel(req.body);
        await newDriver.save();
        res.status(201).json(newDriver);

    }catch(err){
        console.error("error occured during creating driver",err);
        res.status(500).json({message:"Internal Server Error",error:err.message});
    }
}