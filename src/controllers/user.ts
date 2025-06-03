import app from "../app";
import { Request, Response } from "express";

app.get('/users', (req: Request, res: Response) => {});
app.get('/users/:id', (req: Request, res: Response) => {});
app.post('/users', (req: Request, res: Response) => {});
app.put('/users/:id', (req: Request, res: Response) => {});
app.delete('/users/:id', (req: Request, res: Response) => {});