import {Request, Response} from "express";
import { validatePassword } from "../service/user.service";
import { createSession, getUserSessions } from "../service/session.service";
import {signJwt} from "../utils/jwt.utils"
import config from "config"

export async function createUserSessionHandler(req: Request, res: Response){
    //validate the user password
    const user = await validatePassword(req.body);
    if(!user) {
       return res.status(401).send("Invalid email or password");
    }
     // create a session
    const session = await createSession(user._id, req.get("user-agent") || "");

    //create the session token
    const accessToken = signJwt(
        {...user, session: session._id}, 
        {expiresIn: config.get("accessTokenTtl")} // 15 minutes
    )

    // create the refresh token
    const refreshToken = signJwt(
        {...user, session: session._id}, 
        {expiresIn: config.get("refreshTokenTtl")} // 15 minutes
    )

    //return access and refresh token
    return res.send({accessToken, refreshToken});
}

export async function getUserSessionsHandler(req: Request, res: Response){
    const userId = res.locals.user._id;
    const sessions = await getUserSessions({user: userId, valid: true});

    return res.send(sessions);
}