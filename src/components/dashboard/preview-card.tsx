import { Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PreviewCardProps } from '@/app/types/dashboard';

export const PreviewCard = ({ onDownload }: PreviewCardProps) => {
  return (
    <Card className="bg-white/5 backdrop-blur-lg border-white/10">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white">
          CAD Preview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-black/30 rounded-lg flex items-center justify-center">
          <p className="text-white/60">
            CAD Preview would render here
          </p>
        </div>
        <div className="mt-4 flex justify-end">
          <Button 
            className="bg-cyan-500 hover:bg-cyan-600"
            onClick={onDownload}
          >
            <Download className="w-4 h-4 mr-2" />
            Download CAD File
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};