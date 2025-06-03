import  { Request, Response } from 'express';
import { Car } from '../models/Car';


export const getAvailableCars = async (req: Request, res: Response) => {
    const cars = await Car.find({ isSold: false})

    return cars
};

export const getCarsById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const car = await Car.findOne({ _id: id });
    return car
};

export const getCarsWithManagerDetails = async () => {
    const cars = await Car.find().populate('managerId', 'userId company'); 
    return cars;
}
