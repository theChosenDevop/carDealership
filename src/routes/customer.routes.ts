import { Router } from 'express';
import { getCustomerWithPurchasedCars, getCustomersByPreferredBrand } from '../controllers/customer.controller';

const router = Router();

router.get('/:id', getCustomerWithPurchasedCars);

router.get('/brand/:brand', getCustomersByPreferredBrand);

export default router;