'use client';

import { useEffect, useState } from 'react';
import Terminal from './Terminal';

// Este componente asegura que el Terminal se renderice solo en el cliente
// para evitar problemas de hidratación con window o document
const ClientTerminal = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return (
      <div className="loading-container">
        <div className="loading-text">
          <p>Iniciando terminal...</p>
          <p>
            <span className="success">$</span> loading portfolio_terminal.exe
          </p>
        </div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    );
  }
  
  return <Terminal initialMode="commands" />;
};

export default ClientTerminal;
