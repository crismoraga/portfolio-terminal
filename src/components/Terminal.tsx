'use client';

import React, { useState, useRef, useEffect, useContext } from 'react';
import MatrixRain from './MatrixRain';
import CommandProcessor from './CommandProcessor';
import GUI from './GUI';
import { FaTerminal, FaWindowMaximize, FaVolumeUp, FaVolumeMute, FaDownload, FaAdjust } from 'react-icons/fa';
import { portfolioData } from '@/data/portfolioData';
import useKeySound from '@/hooks/useKeySound';
import useLocalStorage from '@/hooks/useLocalStorage';
import { SoundContext } from '@/contexts/SoundContext';

export type TerminalMode = 'commands' | 'interface';

interface TerminalProps {
  initialMode?: TerminalMode;
}

const Terminal: React.FC<TerminalProps> = ({ initialMode = 'commands' }) => {
  // Estados principales
  const [mode, setMode] = useState<TerminalMode>(initialMode);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState<string>('');
  const [commandOutput, setCommandOutput] = useState<React.ReactElement[]>([
    <div key="welcome" className="command-output">
      <p className="success">¡Bienvenido a mi Portfolio Terminal!</p>
      <p className="mb-2">Soy {portfolioData.name}, {portfolioData.title}.</p>
      <p>Escribe <span className="success">help</span> para ver los comandos disponibles o <span className="success">about</span> para conocer más sobre mí.</p>
    </div>
  ]);
  const [currentPath, setCurrentPath] = useState<string>('~');
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  
  // Preferencias persistentes
  const { isSoundEnabled, setSound } = useContext(SoundContext);
  const [theme, setTheme] = useLocalStorage<string>('terminal-theme', 'default');
  
  // Estados UI
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showAutocomplete, setShowAutocomplete] = useState<boolean>(false);
  const [autocompleteOptions, setAutocompleteOptions] = useState<string[]>([]);
  const [selectedAutocompleteIndex, setSelectedAutocompleteIndex] = useState<number>(0);
  const [matrixDensity, setMatrixDensity] = useState<number>(25);

  // Referencias
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Hooks de sonido
  const keySound = useKeySound('/sounds/key.mp3', { enabled: isSoundEnabled, volume: 0.2 });
  const enterSound = useKeySound('/sounds/enter.mp3', { enabled: isSoundEnabled, volume: 0.3 });
  const errorSound = useKeySound('/sounds/error.mp3', { enabled: isSoundEnabled, volume: 0.3 });

  useEffect(() => {
    // Auto-focus input on mount and when clicking terminal
    inputRef.current?.focus();
    
    // Scroll to bottom when output changes
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [commandOutput]);

  useEffect(() => {
    // Aplicar el tema al montaje y cuando cambie
    document.body.classList.toggle('dark-theme', theme === 'dark');
    
    return () => {
      // Limpiar clases al desmontar
      document.body.classList.remove('dark-theme');
    };
  }, [theme]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log(`Error intentando habilitar pantalla completa: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentCommand.trim()) return;

    // Reproducir sonido de enter
    enterSound.play();
    
    // Ocultar autocompletado
    setShowAutocomplete(false);

    // Procesar el comando
    const trimmedCommand = currentCommand.trim();
    
    // Caso especial para clear
    if (trimmedCommand.toLowerCase() === 'clear') {
      setCommandOutput([]);
      setCurrentCommand('');
      return;
    }

    // Añadir comando al historial
    const newCommandHistory = [...commandHistory, trimmedCommand];
    setCommandHistory(newCommandHistory);
    setHistoryIndex(-1);

    // Procesar comando y obtener salida
    const output = CommandProcessor.process(trimmedCommand, currentPath);
    
    // Reproducir sonido de error si el comando no se encontró
    if (trimmedCommand.split(' ')[0].toLowerCase() !== 'echo' && 
        output.result && 
        React.isValidElement(output.result) && 
        (output.result.props as { className?: string }).className === 'error') {
      errorSound.play();
    }

    // Actualizar ruta si cambió
    if (output.newPath) {
      setCurrentPath(output.newPath);
    }
    
    // Si es comando matrix, ajustar densidad
    if (trimmedCommand.toLowerCase() === 'matrix') {
      setMatrixDensity(prev => Math.min(prev + 15, 60));
      setTimeout(() => setMatrixDensity(25), 10000); // Volver a la densidad normal después de 10s
    }
    
    // Añadir comando y salida al terminal
    setCommandOutput(prev => [...prev, 
      <div key={`cmd-${Date.now()}`} className="flex">
        <span className="prompt">{currentPath}$</span>
        <span>{trimmedCommand}</span>
      </div>,
      <div key={`out-${Date.now()}`} className="command-output">
        {output.result}
      </div>
    ]);
    
    setCurrentCommand('');
  };

  const getAutocompleteOptions = (partial: string): string[] => {
    const commands = [
      'help', 'clear', 'ls', 'cd', 'pwd', 'cat', 'about', 
      'skills', 'projects', 'contact', 'education', 'experience',
      'whoami', 'date', 'echo', 'matrix', 'certifications', 'languages',
      'achievements', 'interests', 'github', 'repos', 'stats', 'roadmap',
      'competencias', 'competencies', 'aptitudes', 'cv', 'resume',
      'ta', 'ayudantias', 'extracurricular', 'certs', 'downloadcv',
      'sudo', 'hack', 'hackthematrix', 'neofetch', 'cowsay', 'fortune',
      'joke', 'banner', 'ascii', 'scan', 'quote', 'easter', 'easteregg', 'secret'
    ];
    
    if (!partial) return [];
    
    // Verificar si es un comando cd con ruta
    if (partial.startsWith('cd ')) {
      const folders = ['proyectos', 'contacto', 'educacion', 'experiencia', '..', '~'];
      const partialPath = partial.substring(3).trim();
      return folders
        .filter(folder => folder.startsWith(partialPath))
        .map(folder => `cd ${folder}`);
    }
    
    // Verificar si es un comando cat con archivo
    if (partial.startsWith('cat ')) {
      const files = ['about.md', 'skills.json'];
      if (currentPath === '~/proyectos') {
        files.push(...portfolioData.projects.map(p => `${p.name}.md`));
      }
      const partialFile = partial.substring(4).trim();
      return files
        .filter(file => file.toLowerCase().startsWith(partialFile.toLowerCase()))
        .map(file => `cat ${file}`);
    }
    
    // Autocompletado de comandos regulares
    return commands.filter(cmd => cmd.startsWith(partial.toLowerCase()));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    keySound.play();
    
    // Navegación por historial de comandos
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (showAutocomplete) {
        setSelectedAutocompleteIndex(prev => 
          prev > 0 ? prev - 1 : autocompleteOptions.length - 1
        );
      } else if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (showAutocomplete) {
        setSelectedAutocompleteIndex(prev => 
          prev < autocompleteOptions.length - 1 ? prev + 1 : 0
        );
      } else if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentCommand('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (showAutocomplete && autocompleteOptions.length > 0) {
        setCurrentCommand(autocompleteOptions[selectedAutocompleteIndex]);
        setShowAutocomplete(false);
      } else {
        // Mostrar opciones de autocompletado
        const options = getAutocompleteOptions(currentCommand);
        if (options.length === 1) {
          // Si solo hay una opción, autocompletar directamente
          setCurrentCommand(options[0]);
        } else if (options.length > 1) {
          setAutocompleteOptions(options);
          setShowAutocomplete(true);
          setSelectedAutocompleteIndex(0);
        }
      }
    } else if (e.key === 'Escape') {
      setShowAutocomplete(false);
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown' && e.key !== 'Tab' && e.key !== 'Escape') {
      const options = getAutocompleteOptions(currentCommand);
      if (options.length > 0) {
        setAutocompleteOptions(options);
        setShowAutocomplete(true);
        setSelectedAutocompleteIndex(0);
      } else {
        setShowAutocomplete(false);
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentCommand(e.target.value);
    if (e.target.value === '') {
      setShowAutocomplete(false);
    }
  };
  
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/CV Cristóbal Moraga G..pdf';
    link.download = 'CV Cristóbal Moraga G..pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // Función para renderizar el botón de descarga de CV
  const renderDownloadButton = () => (
    <button 
      className="download-button"
      onClick={downloadResume}
      title="Descargar CV en PDF"
    >
      <FaDownload className="mr-1" /> CV
    </button>
  );

  const toggleTheme = () => {
    setTheme(theme === 'default' ? 'dark' : 'default');
  };

  return (
    <div 
      className={`terminal ${isFullscreen ? 'fullscreen' : ''} ${theme === 'dark' ? 'dark' : ''}`}
      onClick={focusInput}
      ref={terminalRef}
    >
      <MatrixRain density={matrixDensity} speed={3} opacity={0.6} />
      <div className="terminal-header">
        <div className="terminal-button button-red"></div>
        <div className="terminal-button button-yellow"></div>
        <div className="terminal-button button-green"></div>
        <h1 className="terminal-title text-sm">{portfolioData.name} - portfolio@terminal:~</h1>
        <div className="terminal-controls">
          {renderDownloadButton()}
          <button 
            className="terminal-control-button"
            onClick={() => setSound(!isSoundEnabled)} 
            title={isSoundEnabled ? "Desactivar sonido" : "Activar sonido"}
          >
            {isSoundEnabled ? <FaVolumeUp /> : <FaVolumeMute />}
          </button>
          <button 
            className="terminal-control-button"
            onClick={toggleTheme} 
            title={theme === 'dark' ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
          >
            <FaAdjust />
          </button>
          <button 
            className="terminal-control-button"
            onClick={toggleFullscreen} 
            title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
          >
            <FaWindowMaximize />
          </button>
        </div>
      </div>
      <div className="terminal-mode-switch">
        <button 
          className={`terminal-mode-button ${mode === 'commands' ? 'active' : ''}`}
          onClick={() => setMode('commands')}
        >
          <FaTerminal className="mr-1" /> Terminal
        </button>
        <button 
          className={`terminal-mode-button ${mode === 'interface' ? 'active' : ''}`}
          onClick={() => setMode('interface')}
        >
          <FaWindowMaximize className="mr-1" /> Interfaz
        </button>
      </div>
      {mode === 'commands' ? (
        <>
          <div className="terminal-content" ref={contentRef}>
            {commandOutput}
          </div>
          <form onSubmit={handleSubmit} className="flex relative items-center mt-2">
            <span className="prompt">{currentPath}$</span>
            <input
              ref={inputRef}
              type="text"
              className="command-input"
              value={currentCommand}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onKeyUp={handleKeyUp}
              autoComplete="off"
              autoFocus
              aria-label="Terminal input"
            />
            <span className="cursor animate-cursor-blink"></span>
            {/* Dropdown de autocompletado */}
            {showAutocomplete && autocompleteOptions.length > 0 && (
              <div className="autocomplete-dropdown">
                {autocompleteOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`autocomplete-option ${index === selectedAutocompleteIndex ? 'selected' : ''}`}
                    onClick={() => {
                      setCurrentCommand(option);
                      setShowAutocomplete(false);
                      focusInput();
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </form>
        </>
      ) : (
        <GUI currentPath={currentPath} setCurrentPath={setCurrentPath} />
      )}
    </div>
  );
};

export default Terminal;
