import { useState, ChangeEvent, FormEvent } from 'react';
import { FormData } from '../types/form';

export const useForm = (initialState: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is modified
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.websiteType) {
      newErrors.websiteType = 'Please select a website type';
    }
    
    if (!formData.requirements.trim()) {
      newErrors.requirements = 'Requirements are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        // Form submission logic here
        console.log('Form submitted:', formData);
        return true;
      } catch (error) {
        console.error('Form submission error:', error);
        return false;
      }
    }
    return false;
  };

  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    resetForm
  };
};