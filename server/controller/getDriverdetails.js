import driverModel from "../models/Driver_Model.js";
export async function getDriverdetails(req,res){
    try{
        const driverData= await driverModel.find();
        res.json(driverData);
    }
    catch(error){
        console.error("Error occured during fetching of Driver details");
        res.status(500).json({message:'Internal server Error'});
    }
}