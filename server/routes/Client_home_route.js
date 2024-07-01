import express from "express";
import {getOldRequests} from "../controller/getOldRequest.js";

const router =express.Router();
router.get('/',getOldRequests);
export default router;