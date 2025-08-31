import { RadialBar, RadialBarChart } from "recharts";
import type { LegendType } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

interface ChartDataItem {
  fill: string;
  [key: string]: string | number;
}
interface ChartRadialProps {
  chartData: ChartDataItem[];
  chartConfig: ChartConfig;
  dataKey: string;
  nameKey: string;
}
export function ChartRadialSimple({
  chartData,
  chartConfig,
  dataKey,
  nameKey,
}: ChartRadialProps) {
  const legendPayload = chartData.map((item: ChartDataItem) => ({
    value:
      chartConfig[item[nameKey] as keyof typeof chartConfig]?.label ||
      item[nameKey],
    color: item.fill,
    type: "square" as LegendType,
    dataKey: item[nameKey],
  }));
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[300px]"
    >
      <RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel nameKey={nameKey} />}
        />
        <RadialBar dataKey={dataKey} background />
        <ChartLegend
          content={
            <ChartLegendContent payload={legendPayload} nameKey={nameKey} />
          }
        />
      </RadialBarChart>
    </ChartContainer>
  );
}
