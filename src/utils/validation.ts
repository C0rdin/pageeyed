import { FormData } from '../types/form';

export const validateEmail = (email: string): boolean => {
  return /\S+@\S+\.\S+/.test(email);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const getFieldError = (
  name: keyof FormData,
  value: string
): string | undefined => {
  switch (name) {
    case 'email':
      if (!validateRequired(value)) return 'Email is required';
      if (!validateEmail(value)) return 'Invalid email format';
      return undefined;
    case 'fullName':
      if (!validateRequired(value)) return 'Name is required';
      return undefined;
    case 'websiteType':
      if (!value) return 'Please select a website type';
      return undefined;
    case 'requirements':
      if (!validateRequired(value)) return 'Requirements are required';
      return undefined;
    default:
      return undefined;
  }
};