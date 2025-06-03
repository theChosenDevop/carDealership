import { Request, Response } from 'express';
import { User } from "../models/User";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "DEFAULT_SECRET_KEY";

export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            res.status(400).json({ message: 'All fields are required' });
            return;
        }

        const existing = await User.findOne({ email });

        if (existing)  res.status(406).json({ message: 'Email already exist' });

        const user = new User({ name, email, password, role });

        await user.save();

         res.status(201).json({ message: 'User registered Successfully' });
         return;
    } catch (err) {
         res.status(500).json({ error: 'Registration failed', details: err });
         return;
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user){
            res.status(404).json({ message: 'User not found' });
            return;
        }
        
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
           res.status(401).json({ message: 'Invalid credentials' });
           return;
        }
        
        const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
            expiresIn: '1d',
        });
        
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000,
        })

        res.status(200).json({ message: 'Login successful' })
        return;
    } catch (error) {
        res.status(500).json({ error: 'Login failed', details: error });
        return;
    }
}

export const logout = async (_req: Request, res: Response) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successfully' });
    return;
}

