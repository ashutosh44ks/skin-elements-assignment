import ChartCard from "@/components/ChartCard";
import ChartPieDonut from "@/components/ChartPieDonut";
import { ChartRadialSimple } from "@/components/ChartRadialDefault";
import { Badge } from "@/components/ui/badge";
import { useProducts } from "@/hooks/useProducts";
import { IconTrendingUp, IconTrophyFilled } from "@tabler/icons-react";

const chartData = [
  { ageGroup: "18-24", count: 120, fill: "var(--color-chart-1)" },
  { ageGroup: "25-34", count: 200, fill: "var(--color-chart-2)" },
  { ageGroup: "35-44", count: 150, fill: "var(--color-chart-3)" },
  { ageGroup: "45-54", count: 100, fill: "var(--color-chart-4)" },
  { ageGroup: "55+", count: 80, fill: "var(--color-chart-5)" },
];
const Profit = () => {
  const { products } = useProducts();
  const winningDemographic = chartData.reduce(
    (prev, curr) => (curr.count > prev.count ? curr : prev),
    chartData[0]
  );
  const maxProfitProduct = products.reduce(
    (prev, curr) => (curr.profit > prev.profit ? curr : prev),
    products[0]
  );
  const randomProduct = products[Math.floor(Math.random() * products.length)];
  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <ChartCard
          title="Key Demographics"
          description="An overview of key demographic metrics."
        >
          <ChartRadialSimple
            chartData={chartData}
            chartConfig={{
              count: {
                label: "People",
              },
              "18-24": {
                label: "18-24",
                color: "var(--chart-1)",
              },
              "25-34": {
                label: "25-34",
                color: "var(--chart-2)",
              },
              "35-44": {
                label: "35-44",
                color: "var(--chart-3)",
              },
              "45-54": {
                label: "45-54",
                color: "var(--chart-4)",
              },
              "55+": {
                label: "55+",
                color: "var(--chart-5)",
              },
            }}
            dataKey="count"
            nameKey="ageGroup"
          />
          <div className="flex justify-center mt-4">
            <Badge variant="outline">
              <IconTrophyFilled />
              Current winning demographic: {winningDemographic.ageGroup}
            </Badge>
          </div>
        </ChartCard>
      </div>
      <div className="flex-1">
        <ChartCard
          title="Profit Division by Product"
          description="A breakdown of profit contributed by each product."
        >
          <ChartPieDonut
            chartData={products.map((p, i) => ({
              name: p.name,
              value: p.profit,
              fill: `var(--chart-${(i % 6) + 1})`,
            }))}
            chartConfig={products.reduce(
              (acc: Record<string, { label: string; color: string }>, p, i) => {
                acc[p.name] = {
                  label: p.name,
                  color: `var(--chart-${(i % 6) + 1})`,
                };
                return acc;
              },
              {} as Record<string, { label: string; color: string }>
            )}
            dataKey="value"
            nameKey="name"
            showLegends
          />
          <div className="flex justify-center mt-4 flex-col gap-2 items-center">
            {maxProfitProduct && (
              <Badge variant="outline">
                <IconTrophyFilled />
                Current winning MVP Product: {maxProfitProduct.name}
              </Badge>
            )}
            {randomProduct && (
              <Badge variant="secondary">
                <IconTrendingUp />
                Hottest Product this season: {randomProduct.name}
              </Badge>
            )}
          </div>
        </ChartCard>
      </div>
    </div>
  );
};

export default Profit;
