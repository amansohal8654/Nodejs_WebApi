import { AnyObject, FilterQuery} from "mongoose";
import SessionModel, { SessionDocument } from "../models/session.model";

export async function createSession(userId: AnyObject, userAgent: string){
    const session = await SessionModel.create({user: userId, userAgent});

    return session.toJSON();
}

export async function getUserSessions(query: FilterQuery<SessionDocument>){
    return SessionModel.find(query).lean();
}