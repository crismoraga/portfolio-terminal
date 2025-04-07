import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // Estado para almacenar el valor
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // Inicializar desde localStorage si existe
  useEffect(() => {
    try {
      if (typeof window === 'undefined') {
        return;
      }
      
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.warn(`Error al acceder a localStorage para la clave "${key}":`, error);
    }
  }, [key]);

  // Función para actualizar el valor en localStorage
  const setValue = (value: T) => {
    try {
      // Guardar el estado
      setStoredValue(value);
      
      // Guardar en localStorage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.warn(`Error al guardar en localStorage para la clave "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
