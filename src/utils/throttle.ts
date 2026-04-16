/**
 * Limita la frecuencia con la que se ejecuta una función
 * @param fn Función a ejecutar
 * @param wait Tiempo de espera en ms
 * @returns Función limitada (throttled)
 */
export function throttle<T extends (...args: unknown[]) => unknown>(fn: T, wait = 100) {
  let inThrottle = false;
  let lastFn: ReturnType<typeof setTimeout>;
  let lastTime = 0;
  
  return function(this: unknown, ...args: Parameters<T>): ReturnType<T> | undefined {
    if (!inThrottle) {
      const result = fn.apply(this, args) as ReturnType<T>;
      lastTime = Date.now();
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, wait);
      
      return result;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn.apply(this, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
}

export default throttle;
