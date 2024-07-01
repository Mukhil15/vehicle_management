
import requestModel from "../models/OldRequests_Model.js";

export async function getOldRequests(req,res){
    try{
        const requests=await requestModel.find();
        res.json(requests);
    }catch(error){
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}