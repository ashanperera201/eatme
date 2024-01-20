import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express'

import applicationRoutes from './api/routes/application.routes';
import userRoutes from './api/routes/user.routes';
import storeRoutes from './api/routes/store.routes';
import menuRoutes from './api/routes/menu.routes';
import orderRoutes from './api/routes/order.routes';
import { specs } from './swagger';
import { authJwtMiddleWare } from './api/middlewares/auth.middleware';

// Load environment variables from .env
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors({ origin: { global: true } }));

app.use(authJwtMiddleWare);

// Swagger
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));

// Application routes
app.use('/api/application', applicationRoutes)
app.use('/api/user', userRoutes)
app.use('/api/store', storeRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/order', orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});