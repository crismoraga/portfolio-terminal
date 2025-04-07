import { useRef, useCallback } from 'react';

interface KeySoundOptions {
  volume?: number;
  enabled?: boolean;
}

/**
 * Hook para manejar los sonidos del teclado de manera eficiente
 */
export const useKeySound = (soundUrl: string, options: KeySoundOptions = {}) => {
  const { volume = 0.2, enabled = true } = options;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Inicializar el audio de forma perezosa
  const initAudio = useCallback(() => {
    if (!audioRef.current && typeof window !== 'undefined') {
      audioRef.current = new Audio(soundUrl);
      audioRef.current.volume = volume;
    }
    return audioRef.current;
  }, [soundUrl, volume]);
  
  // Reproducir el sonido
  const play = useCallback(() => {
    if (!enabled) return;
    
    try {
      const audio = initAudio();
      if (audio) {
        // Clonar para permitir reproducción superpuesta
        const clonedAudio = audio.cloneNode() as HTMLAudioElement;
        clonedAudio.volume = volume;
        clonedAudio.play().catch(err => {
          console.warn("Error al reproducir sonido:", err);
        });
      }
    } catch (error) {
      console.warn("Error con la reproducción de audio:", error);
    }
  }, [enabled, initAudio, volume]);
  
  // Cambiar volumen
  const setVolume = useCallback((newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  }, []);
  
  return { play, setVolume };
};

export default useKeySound;
