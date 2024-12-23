import React from 'react';
import { useCookieConsent } from '../../hooks/useCookieConsent';
import { CookieConsentBanner } from './CookieConsentBanner';
import { CookiePreferencesModal } from './CookiePreferencesModal';

export const CookieManager: React.FC = () => {
  const {
    settings,
    isOpen,
    acceptAll,
    declineAll,
    savePreferences,
    openSettings,
  } = useCookieConsent();

  if (!settings.hasConsented) {
    return (
      <>
        <CookieConsentBanner
          onAcceptAll={acceptAll}
          onDeclineAll={declineAll}
          onManagePreferences={openSettings}
        />
        {isOpen && (
          <CookiePreferencesModal
            initialPreferences={settings.preferences}
            onSave={savePreferences}
            onClose={() => savePreferences(settings.preferences)}
          />
        )}
      </>
    );
  }

  return null;
};