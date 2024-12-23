export type CookieCategory = 'essential' | 'performance' | 'functional' | 'advertising';

export interface CookiePreferences {
  essential: boolean; // Always true, can't be disabled
  performance: boolean;
  functional: boolean;
  advertising: boolean;
}

export interface CookieSettings {
  preferences: CookiePreferences;
  hasConsented: boolean;
}