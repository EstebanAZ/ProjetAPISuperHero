import { API_ERROR_CODE } from "../constantes/errorCodes";
import { CustomError } from "./CustomError";
import { errorLogger } from "../logger/logger";

export class ApiError extends CustomError {
    constructor(message: string){
        super(message, API_ERROR_CODE);
        this.name ="ApiError"
        errorLogger.error(this.message + " - " + this.errorcode);
    }
}