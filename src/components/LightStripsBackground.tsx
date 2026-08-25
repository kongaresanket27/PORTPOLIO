import React, { useEffect, useState } from 'react';

export const LightStripsBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Primary Warm Cream Background (#FAF8F2) */}
      <div className="absolute inset-0 bg-[#FAF8F2]" />
      
      {/* Subtle Natural Linear Gradient with Light Cyan & White Tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F2] via-[#EAF7FA]/35 to-[#FAF8F2]" />

      {/* Very Soft Ocean Blue, Sky Cyan & Mint Ambient Glow Highlights */}
      <div className="absolute top-[-10%] left-[20%] w-[650px] h-[550px] bg-[#39BDEB]/[0.035] rounded-full blur-[160px] animate-soft-glow" />
      <div className="absolute top-[40%] right-[10%] w-[550px] h-[500px] bg-[#1689C7]/[0.025] rounded-full blur-[160px] animate-soft-glow [animation-delay:-7s]" />
      <div className="absolute bottom-[-5%] left-[30%] w-[600px] h-[500px] bg-[#55BFA3]/[0.02] rounded-full blur-[180px] animate-soft-glow [animation-delay:-12s]" />

      {/* Mouse Follow Soft Ambient Glow */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full pointer-events-none transition-transform duration-150 ease-out opacity-40 blur-[100px]"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: 'radial-gradient(circle, rgba(22,137,199,0.06) 0%, rgba(57,189,235,0.04) 45%, transparent 70%)',
        }}
      />
    </div>
  );
};




