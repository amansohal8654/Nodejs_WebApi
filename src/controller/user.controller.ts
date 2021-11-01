import {Request, Response} from "express";
import {createUserInput} from "../schema/user.schema"
import { createUser } from "../service/user.service";
import logger from "../utils/logger";
export async function createUserHandler(
    req: Request<{}, {}, createUserInput["body"]>, 
    res: Response){
    try{
        console.log(req.body);
        const user = await createUser(req.body);
        return user;
    }
    catch(err: any){
        logger.error(err);
        return res.status(409).send(err.message);
    }

}