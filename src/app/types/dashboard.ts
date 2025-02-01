export interface CadOptions {
    fileFormat: string;
    quality: string;
    optimization: boolean;
    textures: boolean;
    measurements: boolean;
  }
  
  export interface ProcessingJob {
    id: string;
    status: 'processing' | 'complete' | 'error';
    progress: number;
    videoUrl: string;
    cadUrl?: string;
    createdAt: Date;
    options: CadOptions;
  }
  
  export interface StatCardProps {
    icon: any;
    title: string;
    value: string;
    description: string;
}

export interface StatCardProps {
    icon: any;
    title: string;
    value: string;
    description: string;
  }
  
  export interface CadOptions {
    fileFormat: string;
    quality: string;
    optimization: boolean;
    textures: boolean;
    measurements: boolean;
  }
  
  export interface ProcessingJob {
    id: string;
    status: 'processing' | 'complete' | 'error';
    progress: number;
    videoUrl: string;
    cadUrl?: string;
    createdAt: Date;
    options: CadOptions;
  }
  
  export interface UploadCardProps {
    selectedFile: File | null;
    previewUrl: string | null;
    isUploading: boolean;
    uploadProgress: number;
    processingStatus: 'idle' | 'processing' | 'complete' | 'error';
    onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onUpload: () => void;
  }
  
  export interface OptionsCardProps {
    options: CadOptions;
    onOptionChange: (key: keyof CadOptions, value: any) => void;
  }
  
  export interface PreviewCardProps {
    onDownload: () => void;
  }
  
  export interface HistoryCardProps {
    history: ProcessingJob[];
  }