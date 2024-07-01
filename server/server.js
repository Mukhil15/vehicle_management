
import express from 'express'
import mongoose from "mongoose";
import cors from "cors";
import Client_request_route from "./routes/Client_request_route.js";
import VehicleMaster_route from "./routes/VehicleMaster_route.js"
const app=express();
//middleware
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/vehicle_managment");

app.use("/user/Home/",Client_request_route);
app.use("/admin/VehicleMaster/",VehicleMaster_route);
app.get('/',(req,res)=>{
    res.json({msg:"Welcome"})
})
app.listen(4000,()=>{
    console.log('listening on the port',4000)
})