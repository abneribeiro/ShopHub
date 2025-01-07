import sql from '../config/database';

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

export class ProductService {
    static async getProducts(): Promise<Product[]> {
        return await sql<Product[]>`SELECT * FROM products`;
    }

    static async getProductById(id: number): Promise<Product | null> {
        const result = await sql<Product[]>`SELECT * FROM products WHERE id = ${id}`;
        return result.length ? result[0] : null;
    }

    static async addProduct(product: Product): Promise<void> {
        await sql`INSERT INTO products (name, price, description) VALUES (${product.name}, ${product.price}, ${product.description})`;
    }

    static async updateProduct(id: number, product: Product): Promise<void> {
        await sql`UPDATE products SET name = ${product.name}, price = ${product.price}, description = ${product.description} WHERE id = ${id}`;
    }

    static async deleteProduct(id: number): Promise<void> {
        await sql`DELETE FROM products WHERE id = ${id}`;
    }
}
