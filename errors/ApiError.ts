import { API_ERROR_CODE } from "../constantes/errorCodes";
import { CustomError } from "./CustomError";

export class ApiError extends CustomError {
    constructor(message: string){
        super(message, API_ERROR_CODE);
        this.name ="ApiError"
    }
}