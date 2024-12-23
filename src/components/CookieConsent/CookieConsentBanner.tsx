import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from '../shared/Button';

interface CookieConsentBannerProps {
  onAcceptAll: () => void;
  onDeclineAll: () => void;
  onManagePreferences: () => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  onAcceptAll,
  onDeclineAll,
  onManagePreferences,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-gray-600">
              This website uses cookies to ensure you get the best experience on our site.{' '}
              <Link to="/cookies" className="text-indigo-600 hover:text-indigo-700">
                Learn more in our Cookie Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onDeclineAll}
            >
              Decline All
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onManagePreferences}
            >
              Manage Preferences
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={onAcceptAll}
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};