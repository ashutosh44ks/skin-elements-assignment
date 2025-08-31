import { useProducts } from "@/hooks/useProducts";
import { useParams } from "react-router";
import MetricCard from "@/components/MetricCard";
import {
  IconCreditCard,
  IconCurrencyDollar,
  IconPercentage,
  IconTrendingUp,
} from "@tabler/icons-react";
import ChartPieDonut from "@/components/ChartPieDonut";
import ChartCard from "@/components/ChartCard";
import ChartBarDefault from "@/components/ChartBarDefault";

const ProductDetails = () => {
  const { productId } = useParams();
  const { getProductById } = useProducts();
  if (!productId) return null;
  const product = getProductById(Number(productId));
  if (!product) return null;
  const totalCharges = product.te + product.credit + product.amazonFee;

  return (
    <div>
      <h2 className="text-2xl font-medium">Product Details</h2>
      <p className="mb-4 text-sm">
        Showing details for product: {product.name}
      </p>
      <div className="flex flex-wrap gap-4 mb-4">
        <MetricCard
          label="Sales"
          value={product.sales}
          icon={<IconTrendingUp />}
          className="flex-1"
        />
        <MetricCard
          label="Profit"
          value={product.profit}
          icon={<IconCurrencyDollar />}
          className="flex-1"
        />
        <MetricCard
          label="Credit"
          value={product.credit}
          icon={<IconCreditCard />}
          className="flex-1"
        />
        <MetricCard
          label="Profit %"
          value={product.profitPercentage}
          icon={<IconPercentage />}
          className="flex-1"
        />
      </div>
      <div className="flex gap-4 mt-4 md:flex-row flex-col-reverse">
        <pre className="p-4 border border-border rounded-md bg-muted/50 flex-1">
          {JSON.stringify(product, null, 2)}
        </pre>
        <div className="flex-1 flex flex-col gap-4">
          <ChartCard
            title="Product Expense Breakdown"
            description="Jan 2025 - Present"
            footer="Contribution of each expense to the total costs for this product."
          >
            <ChartPieDonut
              chartData={[
                { name: "TE", value: product.te, fill: "var(--chart-3)" },
                {
                  name: "Credit",
                  value: product.credit,
                  fill: "var(--chart-4)",
                },
                {
                  name: "Amazon Fee",
                  value: product.amazonFee,
                  fill: "var(--chart-5)",
                },
              ]}
              chartConfig={{
                TE: {
                  label: "TE",
                  color: "var(--chart-3)",
                },
                Credit: {
                  label: "Credit",
                  color: "var(--chart-4)",
                },
                "Amazon Fee": {
                  label: "Amazon Fee",
                  color: "var(--chart-5)",
                },
              }}
              dataKey="value"
              nameKey="name"
            />
          </ChartCard>
          <ChartCard
            title="Sales and Profit Metrics"
            description="Jan 2025 - Present"
            footer="A direct comparison of sales and profit for the selected product."
          >
            <ChartBarDefault
              chartData={[
                { name: "Sales", value: product.sales },
                { name: "Profit", value: product.profit },
                { name: "Expenses", value: totalCharges },
              ]}
              chartConfig={{
                Sales: { label: "Sales", color: "var(--chart-1)" },
                Profit: { label: "Profit", color: "var(--chart-2)" },
                Expenses: { label: "Expenses", color: "var(--chart-3)" },
                value: { label: "Amount" },
              }}
              dataKey="value"
              nameKey="name"
            />
          </ChartCard>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
