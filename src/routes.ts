import {Express, Response, Request} from 'express';

const routes = (app: Express) => {
    app.get("/healthCheck", (req: Request, res: Response) => res.sendStatus(200))
}

export default routes;