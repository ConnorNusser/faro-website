'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Film,
  Clock,
  HardDrive,
  Layers
} from 'lucide-react';
import { useAuth } from '@/components/auth/provider';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { StatCard } from '@/components/dashboard/stat-card';
// import { useToast } from "@/components/ui/use-toast";
import { useDashboard } from '@/app/hooks/use-dashboard';
import { HistoryCard } from '@/components/dashboard/history-card';
import { OptionsCard } from '@/components/dashboard/options-card';
import { PreviewCard } from '@/components/dashboard/preview-card';
import { UploadCard } from '@/components/dashboard/upload-card';

export default function DashboardPage() {
  const { user } = useAuth();
  // const { toast } = useToast();
  const {
    selectedFile,
    previewUrl,
    isUploading,
    uploadProgress,
    processingStatus,
    cadOptions,
    error,
    processingHistory,
    handleFileSelect,
    handleUpload,
    handleOptionChange,
    handleDownload,
  } = useDashboard();

  const [activeTab, setActiveTab] = useState('upload');

  if (!user) {
    return null; // Protected by middleware, but just in case
  }

  return (
    <div className="pt-24 min-h-screen bg-[#082832]">
      {/* Welcome Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, {user.email?.split('@')[0]}
          </h1>
          <p className="text-white/60">
            Transform your video footage into precise CAD models with a few clicks.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={Film}
            title="Videos Processed"
            value="24"
            description="This month"
          />
          <StatCard
            icon={Clock}
            title="Processing Time"
            value="1.2h"
            description="Average duration"
          />
          <StatCard
            icon={HardDrive}
            title="Storage Used"
            value="45GB"
            description="Of 100GB quota"
          />
          <StatCard
            icon={Layers}
            title="Models Created"
            value="18"
            description="Ready for download"
          />
        </div>

        {/* Main Content */}
        <Tabs 
          defaultValue="upload" 
          className="space-y-6"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid grid-cols-2 gap-4 bg-white/5 p-1">
            <TabsTrigger 
              value="upload"
              className="data-[state=active]:bg-cyan-500 text-white"
            >
              Upload Video
            </TabsTrigger>
            <TabsTrigger 
              value="history"
              className="data-[state=active]:bg-cyan-500 text-white"
            >
              Processing History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Upload Card */}
              <UploadCard
                selectedFile={selectedFile}
                previewUrl={previewUrl}
                isUploading={isUploading}
                uploadProgress={uploadProgress}
                processingStatus={processingStatus}
                onFileSelect={handleFileSelect}
                onUpload={handleUpload}
              />

              {/* Options Card */}
              <OptionsCard
                options={cadOptions}
                onOptionChange={handleOptionChange}
              />
            </div>

            {/* Preview Section */}
            {processingStatus === 'complete' && (
              <PreviewCard onDownload={handleDownload} />
            )}
          </TabsContent>

          <TabsContent value="history">
            <HistoryCard history={processingHistory} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}