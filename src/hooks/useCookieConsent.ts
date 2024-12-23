import { useState, useEffect } from 'react';
import { CookiePreferences, CookieSettings } from '../types/cookies';

const COOKIE_SETTINGS_KEY = 'cookie_settings';

const defaultPreferences: CookiePreferences = {
  essential: true, // Always true
  performance: false,
  functional: false,
  advertising: false,
};

export const useCookieConsent = () => {
  const [settings, setSettings] = useState<CookieSettings>({
    preferences: defaultPreferences,
    hasConsented: false,
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedSettings = localStorage.getItem(COOKIE_SETTINGS_KEY);
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    } else {
      setIsOpen(true);
    }
  }, []);

  const saveSettings = (newSettings: CookieSettings) => {
    localStorage.setItem(COOKIE_SETTINGS_KEY, JSON.stringify(newSettings));
    setSettings(newSettings);
    setIsOpen(false);
  };

  const acceptAll = () => {
    const newSettings: CookieSettings = {
      preferences: {
        essential: true,
        performance: true,
        functional: true,
        advertising: true,
      },
      hasConsented: true,
    };
    saveSettings(newSettings);
  };

  const declineAll = () => {
    const newSettings: CookieSettings = {
      preferences: {
        ...defaultPreferences,
        essential: true, // Essential cookies can't be disabled
      },
      hasConsented: true,
    };
    saveSettings(newSettings);
  };

  const savePreferences = (preferences: CookiePreferences) => {
    const newSettings: CookieSettings = {
      preferences: {
        ...preferences,
        essential: true, // Essential cookies can't be disabled
      },
      hasConsented: true,
    };
    saveSettings(newSettings);
  };

  const openSettings = () => setIsOpen(true);

  return {
    settings,
    isOpen,
    acceptAll,
    declineAll,
    savePreferences,
    openSettings,
  };
};