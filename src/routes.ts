import {Express, Response, Request} from 'express';
import { createUserHandler } from './controller/user.controller';
import { createUserSessionHandler, getUserSessionsHandler, deleteUserSessionsHandler} from './controller/session.controller';
import validateResources from './middleware/validateResources';
import { createUserSchema } from './schema/user.schema';
import { createSessionSchema } from './schema/session.schema';
import requireUser from './middleware/requireUser';
import { createProductSchema, deleteProductSchema, readProductSchema, updateProductSchema} from './schema/product.schema';
import { createProductHandler, deleteProductHandler, getProductHandler, updateProductHandler } from './controller/product.controller';

const routes = (app: Express) => {
    app.get("/healthCheck", (req: Request, res: Response) => res.sendStatus(200))

    //create user endpoint
    app.post("/api/createUser", validateResources(createUserSchema), createUserHandler);

    app.post("/api/session", validateResources(createSessionSchema), createUserSessionHandler);

    app.get("/api/getUserSessions", requireUser, getUserSessionsHandler);

    app.delete("/api/deleteSession", requireUser, deleteUserSessionsHandler);

    // product endpoints

    app.post("/api/createProduct", [requireUser, validateResources(createProductSchema)], createProductHandler);

    app.get("/api/getProduct:productId", [validateResources(readProductSchema)], getProductHandler);

    app.put("/api/createProduct", [requireUser, validateResources(updateProductSchema)], updateProductHandler);

    app.delete("/api/deleteProduct:productId", [requireUser, validateResources(deleteProductSchema)], deleteProductHandler);
}

export default routes;