import React from 'react';
import { PersonalInfo } from './PersonalInfo';
import { ProjectDetails } from './ProjectDetails';
import { Requirements } from './Requirements';
import { FileUpload } from './FileUpload';
import { useForm } from '../../hooks/useForm';

const initialFormState = {
  fullName: '',
  email: '',
  phone: '',
  websiteType: '',
  requirements: '',
  deadline: '',
};

const OrderForm = () => {
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    resetForm
  } = useForm(initialFormState);

  return (
    <section id="order" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Order Your Website
        </h2>
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
                Submit Order
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
    </section>
  );
};

export default OrderForm;