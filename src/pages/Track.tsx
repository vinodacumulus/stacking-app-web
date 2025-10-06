import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface KPICardProps {
  title: string;
  value: string;
  subtitle: string;
}

function KPICard({ title, value, subtitle }: KPICardProps) {
  return (
    <Card className="flex-1 rounded-xl border border-[#E4E4E7] bg-white shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)]">
      <CardHeader className="flex items-center px-6 pt-6 pb-2">
        <h3 className="flex-1 text-sm font-normal text-[#09090B] leading-5">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="px-6 pb-6 pt-0">
        <div className="flex flex-col">
          <div className="text-2xl font-semibold text-[#09090B] leading-[30px] tracking-[0.4px]">
            {value}
          </div>
          <div className="text-xs font-normal text-[#71717A] leading-5">
            {subtitle}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Track() {
  const kpiData = [
    {
      title: "Total spending",
      value: "$45,231.89",
      subtitle: "+20.1% from last month",
    },
    {
      title: "Rewards earned",
      value: "$778",
      subtitle: "+8% from last month",
    },
    {
      title: "Missed savings",
      value: "$458",
      subtitle: "+5% from last month",
    },
  ];

  return (
    <div className="flex w-full min-h-screen bg-white">
      <Sidebar />
      <main className="flex flex-col flex-1 p-6 pt-[60px] gap-6">
        {/* Header */}
        <header className="flex items-center justify-between w-full">
          <h1 className="text-black font-bold text-2xl leading-[120%] tracking-[-0.48px]">
            Track my stack
          </h1>
        </header>

        {/* Content */}
        <div className="flex flex-col gap-6 max-w-[930px]">
          {/* KPI Cards */}
          <div className="flex items-start gap-2.5 w-full">
            {kpiData.map((kpi, index) => (
              <KPICard
                key={index}
                title={kpi.title}
                value={kpi.value}
                subtitle={kpi.subtitle}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
