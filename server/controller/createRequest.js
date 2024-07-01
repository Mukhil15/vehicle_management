
import requestModel from "../models/OldRequests_Model.js";

export async function createRequest(req, res, next) {
    try {
      const newUser = new requestModel(req.body);
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  }
  