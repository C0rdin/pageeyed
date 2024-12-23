import React from 'react';
import { BaseFormProps, FormData } from '../../types/form';
import { Input } from '../shared/Input';

interface PersonalInfoProps extends BaseFormProps {
  formData: FormData;
  errors: Partial<FormData>;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ 
  formData, 
  onChange,
  errors 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Input
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={onChange}
        error={errors.fullName}
        required
      />
      <Input
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={onChange}
        error={errors.email}
        required
      />
    </div>
  );
};