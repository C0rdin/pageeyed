// Common form-related types
export interface BaseFormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  websiteType: string;
  requirements: string;
  deadline: string;
}

export type WebsiteType = 'business' | 'blog' | 'ecommerce' | 'landing' | 'other';

export interface InputProps extends BaseFormProps {
  label: string;
  name: string;
  value: string;
  type?: string;
  required?: boolean;
}