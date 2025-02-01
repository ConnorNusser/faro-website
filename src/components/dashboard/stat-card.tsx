// components/dashboard/stat-card.tsx
import { Card, CardContent } from "@/components/ui/card";
import { StatCardProps } from '@/app/types/dashboard';

export const StatCard = ({ icon: Icon, title, value, description }: StatCardProps) => (
  <Card className="bg-white/5 backdrop-blur-lg border-white/10">
    <CardContent className="p-6">
      <div className="flex items-center space-x-4">
        <div className="bg-cyan-500/10 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-cyan-500" />
        </div>
        <div>
          <p className="text-sm font-medium text-white/60">{title}</p>
          <h3 className="text-2xl font-bold text-white">{value}</h3>
          <p className="text-sm text-white/40">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);
