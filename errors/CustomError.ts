export class CustomError extends Error {
    errorcode: number;
    constructor(message: string, errorcode: number){
        super(message);
        this.name ="CustomError"
        this.errorcode = errorcode;
    }
}