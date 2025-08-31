import { use } from "react";
import { ProductsContext, type ProductsContextType } from "./ProductsContext";

export const useProducts = (): ProductsContextType => {
  // The 'use' function is a new React 19 feature that can read context
  // and handle promises. It replaces the 'useContext' hook.
  const context = use(ProductsContext);

  // This check ensures the hook is always used within a provider.
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return context;
};
