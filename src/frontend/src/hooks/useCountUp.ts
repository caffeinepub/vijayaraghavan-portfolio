import { useEffect, useState } from 'react';

export const useCountUp = (target: number, trigger: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.round(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target, trigger]);

  return count;
};
