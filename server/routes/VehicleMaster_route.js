import express from "express";
import {getVehicledetails} from "../controller/getVehicledetails.js";
import {createVehicle} from "../controller/createVehicle.js"
const router=express.Router();
router.get("/",getVehicledetails);
router.post("/addVehicle",createVehicle);
export default router;