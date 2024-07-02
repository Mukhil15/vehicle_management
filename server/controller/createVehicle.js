import vehicleModel from "../models/Vehicle_Model.js";
export async function createVehicle(req,res){
try{
    const newVehicle= new vehicleModel(req.body);
    await newVehicle.save();
    res.status(201).json(newVehicle);
}catch(err){
    console.error("Error creating user:", err);
      res.status(500).json({ message: "Internal server error", error: err.message });
}
}