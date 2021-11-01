import UserModel, { UserInput } from "../models/users.model";

export async function createUser(input: UserInput){
    console.log(input);
    try{
        return await UserModel.create(input);
    } catch(err: any){
        throw new Error(err);
    }
}