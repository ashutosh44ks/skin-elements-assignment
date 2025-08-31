import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

interface ChartBarDefaultProps {
  chartData: unknown[];
  chartConfig: ChartConfig;
  dataKey: string;
  nameKey: string;
}
function ChartBarDefault({
  chartData,
  chartConfig,
  dataKey,
  nameKey
}: ChartBarDefaultProps) {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={nameKey}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey={dataKey} fill="var(--chart-3)" radius={8} />
      </BarChart>
    </ChartContainer>
  );
}

export default ChartBarDefault;