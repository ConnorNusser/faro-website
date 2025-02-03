import { useState, useEffect } from 'react';
import { ProcessingJob, CadOptions } from '@/app/types/dashboard';
import supabaseClient from '@/app/db/client';

export const useDashboard = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [processingStatus, setProcessingStatus] = useState<'idle' | 'processing' | 'complete' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [processingHistory, setProcessingHistory] = useState<ProcessingJob[]>([]);
  const [cadPreviewUrl, setCadPreviewUrl] = useState<string | null>(null);
  const [cadDownloadUrl, setCadDownloadUrl] = useState<string | null>(null);
  const [cadOptions, setCadOptions] = useState<CadOptions>({
    fileFormat: 'obj',
    quality: 'high',
    optimization: true,
    textures: true,
    measurements: false,
  });

  // Load processing history
  useEffect(() => {
    fetchProcessingHistory();
    return () => {
      // Cleanup preview URLs
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, []);

  const fetchProcessingHistory = async () => {
    try {
      const { data, error } = await supabaseClient
        .from('processing_jobs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProcessingHistory(data);
    } catch (error) {
    //   toast({
    //     variant: "destructive",
    //     title: "Error",
    //     description: "Failed to load processing history"
    //   });
    }
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file size (500MB limit)
    if (file.size > 500 * 1024 * 1024) {
    //   toast({
    //     variant: "destructive",
    //     title: "Error",
    //     description: "File size exceeds 500MB limit"
    //   });
      return;
    }

    // Validate file type
    const validTypes = ['video/mp4', 'video/quicktime', 'video/avi'];
    if (!validTypes.includes(file.type)) {
    //   toast({
    //     variant: "destructive",
    //     title: "Error",
    //     description: "Please upload an MP4, MOV, or AVI file"
    //   });
      return;
    }

    setSelectedFile(file);
    setError(null);

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadProgress(0);
    setError(null);

    try {
      // Upload to Supabase Storage
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      const { data: uploadData, error: uploadError } = await supabaseClient
        .storage
        .from('videos')
        .upload(filePath, selectedFile, {
          onUploadProgress: (progress) => {
            setUploadProgress(Math.round((progress.loaded / progress.total) * 100));
          },
        });

      if (uploadError) throw uploadError;

      // Create processing job
      const { data: jobData, error: jobError } = await supabaseClient
        .from('processing_jobs')
        .insert([
          {
            video_url: uploadData.path,
            status: 'processing',
            options: cadOptions,
          }
        ])
        .select()
        .single();

      if (jobError) throw jobError;

      setProcessingStatus('processing');
      startPolling(jobData.id);

    //   toast({
    //     title: "Upload Complete",
    //     description: "Your video is now being processed"
    //   });

    } catch (error) {
    //   toast({
    //     variant: "destructive",
    //     title: "Upload Failed",
    //     description: error instanceof Error ? error.message : "An error occurred"
    //   });
      setProcessingStatus('error');
    } finally {
      setIsUploading(false);
    }
  };

  const startPolling = (jobId: string) => {
    const pollInterval = setInterval(async () => {
      const { data: job, error } = await supabaseClient
        .from('processing_jobs')
        .select('*')
        .eq('id', jobId)
        .single();

      if (error) {
        clearInterval(pollInterval);
        setProcessingStatus('error');
        return;
      }

      if (job.status === 'complete') {
        clearInterval(pollInterval);
        setProcessingStatus('complete');
        setCadPreviewUrl(job.cad_preview_url);
        setCadDownloadUrl(job.cad_url);
        fetchProcessingHistory();
      } else if (job.status === 'error') {
        clearInterval(pollInterval);
        setProcessingStatus('error');
      }
    }, 5000);

    return () => clearInterval(pollInterval);
  };

  const handleOptionChange = (key: keyof CadOptions, value: any) => {
    setCadOptions(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleDownload = async () => {
    if (!cadDownloadUrl) return;

    try {
      const { data, error } = await supabaseClient
        .storage
        .from('cad_models')
        .download(cadDownloadUrl);

      if (error) throw error;

      // Create download link
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = `cad-model.${cadOptions.fileFormat}`;
      document.body.appendChild(a);
      a.click();
      
      // Cleanup
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
    //   toast({
    //     variant: "destructive",
    //     title: "Download Failed",
    //     description: "Failed to download CAD file"
    //   });
    }
  };

  return {
    selectedFile,
    previewUrl,
    isUploading,
    uploadProgress,
    processingStatus,
    error,
    cadOptions,
    processingHistory,
    handleFileSelect,
    handleUpload,
    handleOptionChange,
    handleDownload,
  };
};