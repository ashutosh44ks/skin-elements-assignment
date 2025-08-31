import { createBrowserRouter, RouterProvider } from "react-router";
import { ThemeProvider } from "./components/theme-provider";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./hooks/AuthProvider";
import { Toaster } from "sonner";
import DataHyderator from "./pages/DataHyderator";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Layout from "./components/Layout";
import { ProductsProvider } from "./hooks/ProductsProvider";
import ProductDetails from "./pages/ProductDetails";
import Chatbot from "./pages/Chatbot";
import Profit from "./pages/Profit";
import AmazonIntegration from "./pages/AmazonIntegration";
import ShopifyIntegration from "./pages/ShopifyIntegration";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/data-hydrator",
        element: <DataHyderator />,
      },
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/products/:productId",
            element: <ProductDetails />,
          },
          {
            path: "/chatbot",
            element: <Chatbot />,
          },
          {
            path: "/profit",
            element: <Profit />,
          },
          {
            path: "/amazon-integration",
            element: <AmazonIntegration />,
          },
          {
            path: "/shopify-integration",
            element: <ShopifyIntegration />,
          }
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_G_CLIENT_ID}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <AuthProvider>
            <ProductsProvider>
              <RouterProvider router={router} />
            </ProductsProvider>
          </AuthProvider>
        <Toaster />
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
