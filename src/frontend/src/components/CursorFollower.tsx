import { useEffect, useRef, useState } from 'react';

const CursorFollower = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouchDevice || !cursorRef.current || !trailRef.current) return;

    const cursor = cursorRef.current;
    const trail = trailRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 bg-neon-cyan rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-0"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={trailRef}
        className="fixed w-8 h-8 border-2 border-neon-magenta rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default CursorFollower;
