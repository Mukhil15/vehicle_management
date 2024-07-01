import express from "express";
import {getOldRequests} from "../controller/getOldRequest.js";
import {createRequest} from "../controller/createRequest.js";
const router =express.Router();
router.get('/',getOldRequests);
router.post('/addRequest',createRequest);
export default router;