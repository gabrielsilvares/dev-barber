import { Router } from 'express';
import { usersRouter } from './users.routes';
import { authRouter } from './auth.routes';

const routes = Router();
const prefixRoutes = '/api/v1'

routes.use(`${prefixRoutes}/auth`, authRouter);
routes.use(`${prefixRoutes}/users`, usersRouter);

export default routes;
