import axios from "axios";
import { getConfig } from "./config";

export const thelex = axios.create({baseURL: getConfig(), 
    withCredentials: true,    
 }) 
