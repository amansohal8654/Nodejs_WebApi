import jwt from "jsonwebtoken";
import config from "config";

const publicKey = config.get<string>("publicKey");

const privateKey = config.get<string>("privateKey");

export function signJwt(object: Object, options?: jwt.SignOptions | undefined){
    return jwt.sign(object, privateKey, {
        ...(options && options),
        algorithm: "RS256",
    });
}

export function verifyJwt(token: string){
    try{
        const decoded = jwt.verify(token, publicKey);
        return {
            valid: true,
            expire: false,
            decoded
        }
    }
    catch(err: any){
        return {
            valid: false,
            expire: err.message("Json web token is expire"),
            decoded: null
        }
    }
}