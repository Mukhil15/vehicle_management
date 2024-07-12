import express from 'express';
import { getDriverdetails } from '../controller/getDriverdetails.js';
import { createDriver } from '../controller/createDriver.js';
const router = express.Router();
router.get("/",getDriverdetails);
router.post("/addDriver",createDriver);
export default router;