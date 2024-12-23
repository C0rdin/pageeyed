import React from 'react';
import { BaseFormProps, FormData, WebsiteType } from '../../types/form';

interface ProjectDetailsProps extends BaseFormProps {
  formData: FormData;
}

const websiteTypes: WebsiteType[] = ['business', 'blog', 'ecommerce', 'landing', 'other'];

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ formData, onChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Type of Website
        </label>
        <select
          name="websiteType"
          value={formData.websiteType}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          required
        >
          <option value="">Select type</option>
          {websiteTypes.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};