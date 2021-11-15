import {Request, Response, NextFunction} from "express";
import {get} from "lodash";
import { reIssueAccessToken } from "../service/session.service";
import {verifyJwt} from "../utils/jwt.utils";

export async function deserializeUser(req: Request, res: Response, next: NextFunction){
    const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "");

    let isExpired;

    const refreshToken = get(req, "headers.x-refresh");

    if(accessToken){
        const {decoded, expire} = verifyJwt(accessToken);
        if(decoded){
            res.locals.user = decoded;
            return next()
        }

        isExpired =  expire;
    }

    if(isExpired && refreshToken){
        const newAccessToken = await reIssueAccessToken({refreshToken});

        if(newAccessToken){
            res.setHeader("x-access-token", newAccessToken);
        }

        const result = verifyJwt(newAccessToken as string);
        res.locals.user = result.decoded;

        return next();
    }

    return next();
}