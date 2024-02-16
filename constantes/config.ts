import dotenv from "dotenv";
dotenv.config();
export const API_KEY = process.env.SUPERHERO_API_KEY || "default_api_key";

