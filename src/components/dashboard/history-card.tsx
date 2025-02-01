import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HistoryCardProps } from '@/app/types/dashboard';
import { formatDistance } from 'date-fns';

export const HistoryCard = ({ history }: HistoryCardProps) => {
  return (
    <Card className="bg-white/5 backdrop-blur-lg border-white/10">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white">
          Processing History
        </CardTitle>
        <CardDescription className="text-white/60">
          View your recent video processing history
        </CardDescription>
      </CardHeader>
      <CardContent>
        {history.length === 0 ? (
          <div className="text-center py-8 text-white/40">
            No processing history yet
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((job) => (
              <div
                key={job.id}
                className="flex items-center justify-between p-4 rounded-lg bg-white/5"
              >
                <div>
                  <p className="text-white font-medium">
                    {job.videoUrl.split('/').pop()}
                  </p>
                  <p className="text-sm text-white/60">
                    Processed {formatDistance(new Date(job.createdAt), new Date(), { addSuffix: true })}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs ${
                    job.status === 'complete' ? 'bg-green-500/10 text-green-500' :
                    job.status === 'processing' ? 'bg-blue-500/10 text-blue-500' :
                    'bg-red-500/10 text-red-500'
                  }`}>
                    {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};