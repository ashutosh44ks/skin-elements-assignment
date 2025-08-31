import { useEffect, useState, type ReactNode } from "react";
import {
  ProductsContext,
  type Product,
  type ProductTotals,
} from "./ProductsContext";

interface ProductsProviderProps {
  children: ReactNode;
}
export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totals, setTotals] = useState<ProductTotals>({
    sales: 0,
    profit: 0,
    te: 0,
    credit: 0,
    amazonFee: 0,
    profitPercentage: 0,
  });

  const calculateTotals = (productData: Product[]): ProductTotals => {
    return productData.reduce(
      (acc, product) => {
        acc.sales += product.sales;
        acc.profit += product.profit;
        acc.te += product.te;
        acc.credit += product.credit;
        acc.amazonFee += product.amazonFee;
        acc.profitPercentage += product.profitPercentage;
        return acc;
      },
      {
        sales: 0,
        profit: 0,
        te: 0,
        credit: 0,
        amazonFee: 0,
        profitPercentage: 0,
      } as ProductTotals
    );
  };
  const storeProducts = (productData: Product[]) => {
    console.log("Storing products:", productData);
    localStorage.setItem("products", JSON.stringify(productData));
    setProducts(productData);
    setTotals(calculateTotals(productData));
  };
  const getProductById = (id: Product["id"]) => {
    return products.find((product) => product.id === id) || null;
  };
  const clearProducts = () => {
    localStorage.removeItem("products");
    setProducts([]);
    setTotals({
      sales: 0,
      profit: 0,
      te: 0,
      credit: 0,
      amazonFee: 0,
      profitPercentage: 0,
    });
  };

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      try {
        const productsData = JSON.parse(storedProducts) as Product[];
        setProducts(productsData);
        setTotals(calculateTotals(productsData));
        console.log("Restored products from localStorage:", productsData);
      } catch (error) {
        console.error("Error parsing stored products data:", error);
        localStorage.removeItem("products");
      }
    }
  }, []);

  const contextValue = { products, storeProducts, totals, getProductById, clearProducts };

  return (
    // This is the new, simplified provider syntax in React 19
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
