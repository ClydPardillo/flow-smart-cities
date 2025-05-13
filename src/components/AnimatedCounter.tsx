
import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  delay = 0,
  prefix = '',
  suffix = ''
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      startTimeRef.current = null;
      
      const animate = (timestamp: number) => {
        if (startTimeRef.current === null) {
          startTimeRef.current = timestamp;
        }
        
        const progress = timestamp - startTimeRef.current;
        const percentage = Math.min(progress / duration, 1);
        
        countRef.current = Math.floor(percentage * end);
        setCount(countRef.current);
        
        if (percentage < 1) {
          rafIdRef.current = requestAnimationFrame(animate);
        }
      };
      
      rafIdRef.current = requestAnimationFrame(animate);
    }, delay);
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [end, duration, delay]);
  
  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
