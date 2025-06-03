import  { Request, Response } from 'express';
import { Customer } from '../models/Customer';


export const getCustomerWithPurchasedCars = async (req: Request, res: Response) => {
    const { id } = req.params;
    const customer = await Customer.findById(id).populate('purchasedCars', 'name brand price');
    res.status(200).json(customer);
    return;
}

export const getCustomersByPreferredBrand = async (req: Request, res: Response) => {
    const { brand } = req.params;
    const customers = await Customer.find({ preferredBrands: brand });
    res.status(200).json(customers);
    return;
}