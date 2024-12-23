import React, { useState } from 'react';
import { X } from 'lucide-react';
import { CookiePreferences } from '../../types/cookies';
import { Button } from '../shared/Button';

interface CookiePreferencesModalProps {
  initialPreferences: CookiePreferences;
  onSave: (preferences: CookiePreferences) => void;
  onClose: () => void;
}

export const CookiePreferencesModal: React.FC<CookiePreferencesModalProps> = ({
  initialPreferences,
  onSave,
  onClose,
}) => {
  const [preferences, setPreferences] = useState(initialPreferences);

  const handleToggle = (category: keyof CookiePreferences) => {
    if (category === 'essential') return; // Essential cookies can't be toggled
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Cookie Preferences</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Essential Cookies */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Essential Cookies</h3>
                <p className="text-sm text-gray-500">Required for basic website functionality</p>
              </div>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={preferences.essential}
                  disabled
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600"></div>
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 bg-white rounded-full transition peer-checked:translate-x-6"></div>
              </div>
            </div>
          </div>

          {/* Performance Cookies */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Performance Cookies</h3>
                <p className="text-sm text-gray-500">Help us improve our website by collecting anonymous usage data</p>
              </div>
              <button
                onClick={() => handleToggle('performance')}
                className="relative inline-flex items-center"
              >
                <input
                  type="checkbox"
                  checked={preferences.performance}
                  onChange={() => {}}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600"></div>
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 bg-white rounded-full transition peer-checked:translate-x-6"></div>
              </button>
            </div>
          </div>

          {/* Functional Cookies */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Functional Cookies</h3>
                <p className="text-sm text-gray-500">Enable additional features and remember your preferences</p>
              </div>
              <button
                onClick={() => handleToggle('functional')}
                className="relative inline-flex items-center"
              >
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={() => {}}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600"></div>
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 bg-white rounded-full transition peer-checked:translate-x-6"></div>
              </button>
            </div>
          </div>

          {/* Advertising Cookies */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Advertising Cookies</h3>
                <p className="text-sm text-gray-500">Help us deliver relevant advertisements and track their effectiveness</p>
              </div>
              <button
                onClick={() => handleToggle('advertising')}
                className="relative inline-flex items-center"
              >
                <input
                  type="checkbox"
                  checked={preferences.advertising}
                  onChange={() => {}}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-indigo-600"></div>
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 bg-white rounded-full transition peer-checked:translate-x-6"></div>
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 flex justify-end gap-4">
          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => onSave(preferences)}
          >
            Save Preferences
          </Button>
        </div>
      </div>
    </div>
  );
};