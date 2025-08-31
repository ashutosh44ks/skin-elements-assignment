import { TrendingDown, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ChartCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
  trend?: number;
  footer?: string;
}

const ChartCard = ({
  children,
  title,
  description,
  trend,
  footer, // example - Showing total visitors for the last 6 months
}: ChartCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {trend && (
          <div className="flex gap-2 leading-none font-medium">
            Trending up by {trend}% this month{" "}
            {trend > 0 ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
          </div>
        )}
        {footer && (
          <div className="text-muted-foreground leading-none">{footer}</div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ChartCard;
