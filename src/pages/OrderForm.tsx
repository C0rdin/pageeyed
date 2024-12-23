import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { FileUpload } from '../components/OrderForm/FileUpload';
import { PersonalInfo } from '../components/OrderForm/PersonalInfo';
import { ProjectDetails } from '../components/OrderForm/ProjectDetails';
import { Requirements } from '../components/OrderForm/Requirements';
import { useForm } from '../hooks/useForm';
import { CheckCircle } from 'lucide-react';

const initialFormState = {
  fullName: '',
  email: '',
  phone: '',
  websiteType: '',
  requirements: '',
  deadline: '',
};

const OrderForm = () => {
  const [searchParams] = useSearchParams();
  const showSuccess = searchParams.get('payment') === 'success';
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    resetForm
  } = useForm(initialFormState);

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Tell Us About Your Project
        </h1>
        
        {showSuccess && (
          <div className="max-w-3xl mx-auto mb-8 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center text-green-700">
            <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
            <p>Payment successful! Please fill out your project requirements below.</p>
          </div>
        )}

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <PersonalInfo 
              formData={formData} 
              onChange={handleChange}
              errors={errors}
            />
            <ProjectDetails 
              formData={formData} 
              onChange={handleChange}
              errors={errors}
            />
            <Requirements 
              formData={formData} 
              onChange={handleChange}
              errors={errors}
            />
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deadline (Optional)
              </label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <FileUpload />

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-indigo-600 text-white py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
              >
                Submit Requirements
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 border border-gray-300 rounded-full font-semibold hover:bg-gray-50 transition-colors"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;