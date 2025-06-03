import { Request, Response } from "express";
import { User } from "../models/User";

export const getUserByEmail = async (req: Request, res: Response) => {
    const { email } = req.body as { email: string };
    const user = await User.findOne({ email });
    res.status(200).json(user);
    return;
}