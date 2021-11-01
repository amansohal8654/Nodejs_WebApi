import {Express, Response, Request} from 'express';
import { createUserHandler } from './controller/user.controller';
import validateResources from './middleware/validateResources';
import { createUserSchema } from './schema/user.schema';

const routes = (app: Express) => {
    app.get("/healthCheck", (req: Request, res: Response) => res.sendStatus(200))

    //create user endpoint
    app.post("/api/createUser", validateResources(createUserSchema), createUserHandler);
}

export default routes;