import express from 'express';
import { getProducts, getProductById, createProduct } from '../controllers/productController';
import authMiddleware from '../middleware/auth';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', authMiddleware, createProduct);

export default router;
