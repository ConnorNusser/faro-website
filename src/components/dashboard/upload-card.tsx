'use client';

import { Upload, RefreshCcw, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { UploadCardProps } from '@/app/types/dashboard';

export const UploadCard = ({
  selectedFile,
  previewUrl,
  isUploading,
  uploadProgress,
  processingStatus,
  onFileSelect,
  onUpload,
}: UploadCardProps) => {
  return (
    <Card className="bg-white/5 backdrop-blur-lg border-white/10">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white">
          Upload Video
        </CardTitle>
        <CardDescription className="text-white/60">
          Upload your video file in MP4, MOV, or AVI format
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div
            className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center cursor-pointer hover:border-cyan-400/50 transition-colors"
            onClick={() => document.getElementById('file-upload')?.click()}
          >
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept="video/*"
              onChange={onFileSelect}
            />
            <Upload className="w-12 h-12 mx-auto mb-4 text-white/60" />
            <p className="text-white/80 mb-2">
              {selectedFile ? selectedFile.name : 'Drop your video here or click to browse'}
            </p>
            <p className="text-sm text-white/40">
              Maximum file size: 500MB
            </p>
          </div>

          {previewUrl && (
            <div className="relative rounded-lg overflow-hidden bg-black/30">
              <video
                src={previewUrl}
                className="w-full"
                controls
              />
            </div>
          )}

          {selectedFile && !isUploading && processingStatus === 'idle' && (
            <Button
              className="w-full bg-cyan-500 hover:bg-cyan-600"
              onClick={onUpload}
            >
              Start Processing
            </Button>
          )}

          {isUploading && (
            <div className="space-y-2">
              <Progress value={uploadProgress} className="h-2" />
              <p className="text-sm text-white/60 text-center">
                Uploading... {uploadProgress}%
              </p>
            </div>
          )}

          {processingStatus === 'processing' && (
            <Alert className="bg-blue-500/10 text-blue-500">
              <RefreshCcw className="h-4 w-4 animate-spin" />
              <AlertDescription>
                Converting video to CAD model...
              </AlertDescription>
            </Alert>
          )}

          {processingStatus === 'complete' && (
            <Alert className="bg-green-500/10 text-green-500">
              <Check className="h-4 w-4" />
              <AlertDescription>
                Conversion complete! View your model in the preview.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </CardContent>
    </Card>
  );
};