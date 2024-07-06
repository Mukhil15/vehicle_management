import express from 'express';
import { createDriver } from '../controller/createDriver.js';
const router = express.Router();
router.post("/addDriver",createDriver);
export default router;