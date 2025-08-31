import FileInput from "@/components/FileInput";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/hooks/useProducts";
import { extractCSVData } from "@/lib/utils";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const DataHyderator = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState<boolean>(false);
  const { products, storeProducts } = useProducts();
  const productsExists = products && products.length > 0;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fileRef: HTMLInputElement | null =
      e.currentTarget.querySelector("input[type='file']");
    if (fileRef !== null) {
      const fileValue = fileRef.files?.[0];
      if (fileValue) {
        setIsPending(true);
        // extract the data and then
        const extractedData = await extractCSVData(fileValue);
        storeProducts(extractedData);
        // store the uploaded data to context/redux
        setIsPending(false);
        navigate("/dashboard");
      }
    }
  };

  return (
    <div className="h-screen py-4 md:py-6 px-4 lg:px-6">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold mb-4">
          {productsExists ? "Update Product Listing" : "Before You Go"}
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Bulk upload your data and get instant insights with our product!
        </p>
        <form
          className="flex gap-4 items-center justify-center w-3/4"
          onSubmit={handleSubmit}
        >
          <FileInput isLoading={isPending} />
        </form>
        {productsExists && (
          <>
            <p className="text-sm text-muted-foreground my-4">
              It appears you have already uploaded products. You can upload new
              data to replace the existing products or return to the dashboard.
            </p>
            <div className="flex justify-end mt-4">
              <Link to="/dashboard">
                <Button variant="outline">Return to Dashboard</Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DataHyderator;
