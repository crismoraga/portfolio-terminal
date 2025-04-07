'use client';

import React, { useContext } from 'react';
import { FaVolumeUp, FaVolumeOff } from 'react-icons/fa';
import { SoundContext } from '@/contexts/SoundContext';

interface SoundButtonProps {
  className?: string;
}

const SoundButton: React.FC<SoundButtonProps> = ({ className = "terminal-control-button" }) => {
  const { isSoundEnabled, setSound } = useContext(SoundContext);

  return (
    <button 
      className={className}
      onClick={() => setSound(!isSoundEnabled)} 
      title={isSoundEnabled ? "Desactivar sonido" : "Activar sonido"}
      aria-label={isSoundEnabled ? "Desactivar sonido" : "Activar sonido"}
    >
      {isSoundEnabled ? <FaVolumeUp /> : <FaVolumeOff />}
    </button>
  );
};

export default SoundButton;
