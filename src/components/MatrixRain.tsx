'use client';

import React, { useRef, useEffect, useState } from 'react';
import throttle from '@/utils/throttle';

interface MatrixRainProps {
  density?: number; // Densidad de caracteres (1-100)
  speed?: number; // Velocidad de caída (1-10)
  fontSize?: number; // Tamaño de la fuente
  opacity?: number; // Opacidad (0-1)
  color?: string; // Color principal
}

const MatrixRain: React.FC<MatrixRainProps> = ({
  density = 25,
  speed = 3,
  fontSize = 14,
  opacity = 0.8,
  color = '#00ff00'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  
  // Efecto para actualizar las dimensiones cuando se redimensiona la ventana
  useEffect(() => {
    const updateSize = throttle(() => {
      if (typeof window === 'undefined') return;
      
      const parent = canvasRef.current?.parentElement;
      if (parent) {
        setSize({
          width: parent.clientWidth,
          height: parent.clientHeight
        });
      }
    }, 100);
    
    updateSize();
    window.addEventListener('resize', updateSize);
    
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Efecto para dibujar la animación Matrix
  useEffect(() => {
    if (!canvasRef.current || !size.width || !size.height) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Configuración del canvas al tamaño actual
    canvas.width = size.width;
    canvas.height = size.height;
    
    // Caracteres para usar en la animación (caracteres japoneses, números y letras)
    const characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    // Número de columnas (basado en el ancho y la densidad)
    const columns = Math.ceil(size.width / fontSize * (density / 100));
    
    // Array para almacenar la posición Y de cada carácter
    const drops: number[] = Array(columns).fill(1);
    
    // Función para generar un carácter aleatorio
    const getRandomChar = () => {
      return characters.charAt(Math.floor(Math.random() * characters.length));
    };
    
    // Función para generar un valor de transparencia aleatorio para el efecto degradado
    const getRandomOpacity = () => {
      return Math.random() * 0.5 + 0.3; // Entre 0.3 y 0.8
    };
    
    // Función para dibujar la animación
    const draw = () => {
      // Fondo semi-transparente para crear el efecto de desvanecimiento
      ctx.fillStyle = `rgba(0, 0, 0, ${0.1 / speed})`;
      ctx.fillRect(0, 0, size.width, size.height);
      
      // Configuración del estilo del texto
      ctx.font = `${fontSize}px monospace`;
      
      // Dibuja los caracteres
      for (let i = 0; i < drops.length; i++) {
        // Carácter aleatorio
        const char = getRandomChar();
        
        // Calcular posición
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        // Define el color con opacidad variable para crear un efecto gradiente
        if (drops[i] * fontSize < 50) { // Caracteres en la parte superior más brillantes
          ctx.fillStyle = color;
        } else {
          ctx.fillStyle = `rgba(0, 255, 0, ${getRandomOpacity() * opacity})`;
        }
        
        // Dibuja el carácter
        ctx.fillText(char, x, y);
        
        // Reinicia la gota cuando llega al fondo o aleatoriamente
        if (y > size.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Aumenta la posición Y
        drops[i]++;
      }
    };
    
    // Iniciar la animación
    const intervalId = setInterval(draw, 33 / speed); // ~30 FPS ajustado por velocidad
    
    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, [size, density, speed, fontSize, opacity, color]);

  return (
    <canvas 
      ref={canvasRef} 
      className="matrix-bg"
      style={{ 
        opacity: opacity * 0.5, // Ajusta la opacidad general
        filter: 'blur(0.5px)' // Ligero desenfoque para suavizar
      }}
    />
  );
};

export default MatrixRain;
