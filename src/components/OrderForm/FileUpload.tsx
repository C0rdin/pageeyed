import React from 'react';
import { Upload } from 'lucide-react';

export const FileUpload: React.FC = () => {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
      <div className="flex flex-col items-center">
        <Upload className="w-12 h-12 text-gray-400 mb-4" />
        <p className="text-sm text-gray-600 text-center">
          Drag and drop files here, or click to select files<br />
          <span className="text-xs text-gray-500">(Logo, images, or any reference materials)</span>
        </p>
      </div>
    </div>
  );
};