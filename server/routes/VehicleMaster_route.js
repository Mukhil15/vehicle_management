import express from "express";
import {getVehicledetails} from "../controller/getVehicledetails.js";
const router=express.Router();
router.get("/",getVehicledetails);
export default router;