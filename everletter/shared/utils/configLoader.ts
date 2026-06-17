import { useEffect, useState } from 'react';

/**
 * Hook to load configuration data for EverLetter templates
 * @param configPath - Path to the config JSON file
 * @returns Configuration object and loading state
 */
export function useConfigLoader<T = any>(configPath: string) {
  const [config, setConfig] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async loadConfig() {
      try {
        setLoading(true);
        const response = await fetch(configPath);
        if (!response.ok) {
          throw new Error(`Failed to load config: ${response.statusText}`);
        }
        const data = await response.json();
        setConfig(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        setConfig(null);
      } finally {
        setLoading(false);
      }
    }

    loadConfig();
  }, [configPath]);

  return { config, loading, error };
}

/**
 * Default configuration structure for EverLetter
 */
export interface EverLetterConfig {
  recipient: string;
  sender: string;
  title: string;
  message: string;
  photos: string[];
  theme: string;
  music?: string;
  template: string;
}

/**
 * Validates the configuration structure
 */
export function validateConfig(config: any): config is EverLetterConfig {
  const requiredFields = ['recipient', 'sender', 'title', 'message', 'photos', 'template'];
  return requiredFields.every(field => config.hasOwnProperty(field) && config[field] !== null && config[field] !== undefined);
}