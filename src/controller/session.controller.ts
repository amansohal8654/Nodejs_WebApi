import {Request, Response} from "express";
import { validatePassword } from "../service/user.service";
import { createSession } from "../service/session.service";

export async function createSessionHandler(req: Request, res: Response){
    //validate the user password
    const user = await validatePassword(req.body);
    if(!user) {
       return res.status(401).send("Invalid email or password");
    }
     // create a session
    const session = await createSession(user._id, req.get("user-agent") || "");
    //create the session token

    // create the refresh token

    //return access and refresh token
}