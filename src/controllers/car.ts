import  { Request, Response } from 'express';
import app from "../app";

app.get('/cars', (req: Request, res: Response) => {});
app.get('/cars/:id', (req: Request, res: Response) => {});
app.post('/cars', (req: Request, res: Response) => {});
app.put('/cars/:id', (req: Request, res: Response) => {});
app.delete('/cars/:id', (req: Request, res: Response) => {});