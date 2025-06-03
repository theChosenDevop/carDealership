import  { Request, Response } from 'express';
import app from "../app";


app.get('/customers', (req: Request, res: Response) => {});
app.get('/customer/:id', (req: Request, res: Response) => {});
app.post('/customer', (req: Request, res: Response) => {});
app.put('/customer/:id', (req: Request, res: Response) => {});
app.delete('/customer/:id', (req: Request, res: Response) => {});
