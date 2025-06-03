import  { Request, Response } from 'express';
import app from "../app";

app.get('/managers', (req: Request, res: Response) => {});
app.get('/manager/:id', (req: Request, res: Response) => {});
app.post('/manager', (req: Request, res: Response) => {});
app.put('/manager/:id', (req: Request, res: Response) => {});
app.delete('/manager/:id', (req: Request, res: Response) => {});
