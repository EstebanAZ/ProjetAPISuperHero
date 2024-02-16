import { CustomError } from "./CustomError";
import { errorLogger } from "../logger/logger";

export class DatabaseError extends CustomError {
    constructor(message: string){
        super(message, 2001);
        this.name ="DatabaseError";
        errorLogger.error(this.message + " - " + this.errorcode);
    }
}