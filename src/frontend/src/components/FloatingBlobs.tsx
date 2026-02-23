import { useEffect, useRef } from 'react';

const FloatingBlobs = () => {
  const blobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!blobsRef.current) return;

    const blobs = blobsRef.current.querySelectorAll('.blob');

    blobs.forEach((blob, index) => {
      const randomDuration = 8000 + Math.random() * 4000;
      const randomDelay = index * 500;
      
      (blob as HTMLElement).style.animation = `float-blob ${randomDuration}ms ease-in-out ${randomDelay}ms infinite alternate`;
    });
  }, []);

  return (
    <div ref={blobsRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="blob absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
      <div className="blob absolute top-1/2 right-1/4 w-80 h-80 bg-neon-magenta/10 rounded-full blur-3xl" />
      <div className="blob absolute bottom-1/4 left-1/3 w-72 h-72 bg-electric-blue/10 rounded-full blur-3xl" />
      <div className="blob absolute top-1/3 right-1/3 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl" />
    </div>
  );
};

export default FloatingBlobs;
