import {Request, Response, NextFunction} from "express";
import {get} from "lodash";
import {verifyJwt} from "../utils/jwt.utils";

export function deserializeUser(req: Request, res: Response, next: NextFunction){
    const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "");

    if(accessToken){
        const {decoded, expire} = verifyJwt(accessToken);
        if(decoded){
            res.locals.user = decoded;
            return next()
        }
    }

    return next();
}