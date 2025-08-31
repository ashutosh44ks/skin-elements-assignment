import { createContext } from "react";

export interface Product {
  id: number;
  name: string;
  sales: number;
  profit: number;
  te: number;
  credit: number;
  amazonFee: number;
  profitPercentage: number;
}

export interface ProductTotals {
  sales: number;
  profit: number;
  te: number;
  credit: number;
  amazonFee: number;
  profitPercentage: number;
}

export type ProductsContextType = {
  products: Product[];
  totals: ProductTotals;
  storeProducts: (products: Product[]) => void;
  getProductById: (id: Product["id"]) => Product | null;
  clearProducts: () => void;
};
const defaultProductsContext: ProductsContextType = {
  products: [],
  totals: {
    sales: 0,
    profit: 0,
    te: 0,
    credit: 0,
    amazonFee: 0,
    profitPercentage: 0,
  },
  storeProducts: () => {},
  getProductById: () => null,
  clearProducts: () => {},
};

// Create the context with an initial value of undefined.
// The custom hook will handle the null check.
export const ProductsContext = createContext<ProductsContextType>(
  defaultProductsContext
);
