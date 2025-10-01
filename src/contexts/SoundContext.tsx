'use client';

import React, { createContext, ReactNode } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';

interface SoundContextType {
  isSoundEnabled: boolean;
  setSound: (enabled: boolean) => void;
  volume: number;
  setVolume: (volume: number) => void;
}

const defaultContext: SoundContextType = {
  isSoundEnabled: false,
  setSound: () => {},
  volume: 0.5,
  setVolume: () => {},
};

export const SoundContext = createContext<SoundContextType>(defaultContext);

interface SoundProviderProps {
  children: ReactNode;
}

export const SoundProvider: React.FC<SoundProviderProps> = ({ children }) => {
  const [isSoundEnabled, setIsSoundEnabled] = useLocalStorage<boolean>('terminal-sound-enabled', false);
  const [volume, setVolume] = useLocalStorage<number>('terminal-sound-volume', 0.5);

  const setSound = (enabled: boolean) => {
    setIsSoundEnabled(enabled);
    
    // Reproducir sonido de interruptor cuando se activa/desactiva
    if (typeof window !== 'undefined' && enabled) {
      try {
        const audio = new Audio('/sounds/switch.mp3');
        audio.volume = volume;
        audio.play().catch(err => {
          console.warn("No se pudo reproducir el sonido:", err);
        });
      } catch (error) {
        console.warn("Error al reproducir sonido:", error);
      }
    }
  };

  return (
    <SoundContext.Provider value={{ isSoundEnabled, setSound, volume, setVolume }}>
      {children}
    </SoundContext.Provider>
  );
};

export default SoundProvider;
