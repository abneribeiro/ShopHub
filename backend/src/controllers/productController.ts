import { Request, Response } from 'express';
import { ProductService, Product } from '../models/Product';


export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductService.getProducts();
    if (products && products.length > 0) {
      res.json(products);
    } else {
      res.status(404).json({ message: 'No products found' });
    }
  } catch (error) {
    const errorMessage = (error instanceof Error) ? error.message : 'Server Error';
    res.status(500).json({ message: errorMessage });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await ProductService.getProductById(Number(req.params.id));
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const product: Product = { id: 0, name, description, price }; // Assuming id is auto-generated
    await ProductService.addProduct(product);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
