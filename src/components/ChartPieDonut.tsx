import { Pie, PieChart, type LegendType } from "recharts";
import type { ChartConfig } from "@/components/ui/chart";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ChartDataItem {
  fill: string;
  [key: string]: string | number;
}
interface ChartPieDonutProps {
  chartData: ChartDataItem[];
  chartConfig: ChartConfig;
  dataKey: string;
  nameKey: string;
  showLegends?: boolean;
}

function ChartPieDonut({
  chartData,
  chartConfig,
  dataKey,
  nameKey,
  showLegends = false,
}: ChartPieDonutProps) {
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
      className="mx-auto aspect-square max-h-[270px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey={dataKey}
          nameKey={nameKey}
          innerRadius={60}
        />
        {showLegends && (
          <ChartLegend
            content={
              <ChartLegendContent payload={legendPayload} nameKey={nameKey} />
            }
          />
        )}
      </PieChart>
    </ChartContainer>
  );
}

export default ChartPieDonut;
