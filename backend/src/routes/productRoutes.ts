import express from 'express';
import { getProducts, getProductById, createProduct, deleteProduct } from '../controllers/productController';
import authMiddleware from '../middleware/auth';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.delete('/:id',deleteProduct);
router.post('/', authMiddleware, createProduct);

export default router;
