'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { OptionsCardProps } from '@/app/types/dashboard';

export const OptionsCard = ({ options, onOptionChange }: OptionsCardProps) => {
  return (
    <Card className="bg-white/5 backdrop-blur-lg border-white/10">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white">
          CAD Generation Options
        </CardTitle>
        <CardDescription className="text-white/60">
          Configure your output settings
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="text-white">Output Format</Label>
            <Select
              value={options.fileFormat}
              onValueChange={(value) => onOptionChange('fileFormat', value)}
            >
              <SelectTrigger className="bg-white/10 border-white/10 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="obj">OBJ</SelectItem>
                <SelectItem value="stl">STL</SelectItem>
                <SelectItem value="fbx">FBX</SelectItem>
                <SelectItem value="step">STEP</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-white">Quality</Label>
            <Select
              value={options.quality}
              onValueChange={(value) => onOptionChange('quality', value)}
            >
              <SelectTrigger className="bg-white/10 border-white/10 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Draft - Faster Processing</SelectItem>
                <SelectItem value="medium">Standard</SelectItem>
                <SelectItem value="high">High Quality</SelectItem>
                <SelectItem value="ultra">Ultra - Slower Processing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator className="border-white/10" />

          <div className="space-y-4">
            <Label className="text-white">Additional Options</Label>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="optimization"
                checked={options.optimization}
                onCheckedChange={(checked) => 
                  onOptionChange('optimization', checked)
                }
              />
              <label
                htmlFor="optimization"
                className="text-sm text-white cursor-pointer"
              >
                Mesh Optimization
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="textures"
                checked={options.textures}
                onCheckedChange={(checked) => 
                  onOptionChange('textures', checked)
                }
              />
              <label
                htmlFor="textures"
                className="text-sm text-white cursor-pointer"
              >
                Include Textures
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="measurements"
                checked={options.measurements}
                onCheckedChange={(checked) => 
                  onOptionChange('measurements', checked)
                }
              />
              <label
                htmlFor="measurements"
                className="text-sm text-white cursor-pointer"
              >
                Include Measurements
              </label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};