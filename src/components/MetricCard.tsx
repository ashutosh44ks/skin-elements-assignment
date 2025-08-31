import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons-react";

interface MetricCardProps {
  label: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative";
  icon?: ReactNode;
  className?: string;
  prefix?: string;
  suffix?: string;
}

const changeColors = {
  positive: "text-green-600 bg-green-100 dark:bg-green-900",
  negative: "text-red-600 bg-red-100 dark:bg-red-900",
};

export default function MetricCard({
  label,
  value,
  change,
  changeType = "positive",
  icon,
  className = "",
  prefix = "",
  suffix = "",
}: MetricCardProps) {
  const formatNumberValue = (value: number | string) => {
    if (typeof value === "number") {
      return value.toLocaleString();
    }
    return value;
  };
  return (
    <div
      className={cn(
        "rounded-xl bg-white dark:bg-muted/50 p-4 flex flex-col gap-2 min-w-[180px] border border-border",
        className
      )}
    >
      <div className="flex items-center gap-2">
        {icon && <span className="text-2xl text-muted-foreground">{icon}</span>}
        <span className="text-sm font-medium text-muted-foreground">
          {label}
        </span>
      </div>
      <div className="flex items-end justify-between mt-2">
        <span className="text-3xl font-semibold text-foreground">
          {prefix}
          {formatNumberValue(value)}
          {suffix}
        </span>
        {change && (
          <span
            className={cn(
              "flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold ml-2",
              changeType === "positive"
                ? changeColors.positive
                : changeColors.negative
            )}
          >
            {changeType === "positive" ? (
              <IconArrowUpRight className="inline w-4 h-4" />
            ) : (
              <IconArrowDownRight className="inline w-4 h-4" />
            )}
            {change}
          </span>
        )}
      </div>
    </div>
  );
}
