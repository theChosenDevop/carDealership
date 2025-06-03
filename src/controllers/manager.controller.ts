import  { Request, Response } from 'express';
import { User } from '../models/User';

export const getAllManagers = async (req: Request, res: Response) =>  {
    const managers = await User.find({ role: 'manager' });
    res.status(200).json(managers);
    return;
}