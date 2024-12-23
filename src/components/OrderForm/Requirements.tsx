import React from 'react';
import { BaseFormProps, FormData } from '../../types/form';

interface RequirementsProps extends BaseFormProps {
  formData: FormData;
}

export const Requirements: React.FC<RequirementsProps> = ({ formData, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Project Requirements
      </label>
      <textarea
        name="requirements"
        value={formData.requirements}
        onChange={onChange}
        rows={6}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        required
      ></textarea>
    </div>
  );
};