import express, { Application } from 'express';
import cors from 'cors';
import authRoutes from '../src/routes/auth.routes';
import customerRoutes from '../src/routes/customer.routes';
import userRoutes from '../src/routes/user.routes';
import managerRoutes from '../src/routes/manager.routes';

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes)
app.use('/api/customer', customerRoutes)
app.use('/api/manager', managerRoutes)
app.use('/api/user', userRoutes)

export default app;