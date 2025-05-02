import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

interface ImageUploaderProps {
  onImageSelect: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl);
        onImageSelect(file);
      }
    },
    [onImageSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp'],
    },
    maxFiles: 1,
    multiple: false,
  });

  const clearImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setPreview(null);
  };

  return (
    <div className="w-full">
      <div 
        {...getRootProps()} 
        className={`dropzone ${isDragActive ? 'dropzone-active' : ''} ${preview ? 'bg-gray-50' : ''}`}
      >
        <input {...getInputProps()} />
        
        {preview ? (
          <div className="relative">
            <button 
              onClick={clearImage}
              className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow-md hover:bg-red-50 transition-colors"
            >
              <X className="h-5 w-5 text-red-500" />
            </button>
            <div className="flex justify-center">
              <img 
                src={preview} 
                alt="Plant preview" 
                className="max-h-64 rounded-lg shadow-sm" 
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Click or drag to replace image
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-center">
              {isDragActive ? (
                <Upload className="h-12 w-12 text-primary-500 animate-bounce-slow" />
              ) : (
                <ImageIcon className="h-12 w-12 text-gray-400" />
              )}
            </div>
            <p className="text-lg font-medium text-gray-700">
              {isDragActive ? 'Drop the image here' : 'Drag and drop your plant image'}
            </p>
            <p className="text-sm text-gray-500">or click to select a file</p>
            <p className="text-xs text-gray-400">
              Supports JPG, PNG, WEBP (max 10MB)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;