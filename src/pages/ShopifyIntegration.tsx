import { ChartBarInteractive } from "@/components/chart-bar-interactive";
import { SectionCards } from "@/components/section-cards";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
const ShopifyIntegration = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  if (!hasSubmitted)
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setHasSubmitted(true);
          }}
          className="max-w-md mx-auto p-6 bg-white dark:bg-muted/50 rounded border shadow flex flex-col gap-4"
        >
          <h2 className="text-xl font-semibold">Shopify Store Integration</h2>
          <p className="text-sm text-gray-600 mb-2">
            You're not logged in. Please provide your Shopify store details to
            continue.
          </p>
          <Input name="shopName" placeholder="Shopify Store Name" required />
          <Input
            name="shopDomain"
            placeholder="Shopify Store Domain"
            required
          />
          <Input name="userName" placeholder="User Name" required />
          <Input name="email" placeholder="Email" type="email" required />
          <Input name="accessToken" placeholder="Access Token" required />
          <Button type="submit" className="mt-2">
            Submit
          </Button>
        </form>
      </div>
    );
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartBarInteractive />
      </div>
    </div>
  );
};

export default ShopifyIntegration;
