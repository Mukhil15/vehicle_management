import vehicleModel from '../models/Vehicle_Model.js';
export async function getVehicledetails(req,res){
    try{
        const vehicles=await vehicleModel.find();
        res.json(vehicles);
    }catch(error){
        console.error("Error occured during fetching of vehicleDetails",error);
        res.status(500).json({message:"Internal server Error"});
    }
}