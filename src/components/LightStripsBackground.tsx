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
      {/* Silicon Valley High-End Gradient Canvas Base */}
      <div className="absolute inset-0 bg-[#030612]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#02040a] via-[#060a1d] to-[#030612]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_-10%,rgba(108,99,255,0.12),rgba(0,0,0,0))]" />

      {/* Cyber Luminous Mesh Grid with Perspective feeling */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff05_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      {/* Mouse Follow Glow */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full pointer-events-none transition-transform duration-75 ease-out opacity-10 blur-[140px]"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: 'radial-gradient(circle, rgba(0,229,255,0.15) 0%, rgba(108,99,255,0.08) 50%, transparent 80%)',
        }}
      />

      {/* Floating Glowing Aurora Orbs (Subtle, Dark Ambient) */}
      <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] bg-[#00E5FF]/03 rounded-full blur-[200px] animate-aurora" />
      <div className="absolute top-[30%] right-[-5%] w-[650px] h-[650px] bg-[#6C63FF]/04 rounded-full blur-[220px] animate-aurora [animation-delay:-4s]" />
      <div className="absolute bottom-[10%] left-[20%] w-[550px] h-[550px] bg-[#8B5CF6]/03 rounded-full blur-[190px] animate-aurora [animation-delay:-8s]" />

      {/* Vertical Light Strips */}
      <div className="absolute inset-0 flex justify-between px-[3%] sm:px-[8%] opacity-[0.08]">
        <div className="relative w-px h-full bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-64 bg-gradient-to-b from-transparent via-[#00E5FF]/40 to-transparent rounded-full animate-light-strip-down duration-[7s]" />
        </div>

        <div className="relative w-px h-full bg-gradient-to-b from-transparent via-indigo-400/10 to-transparent hidden sm:block">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-80 bg-gradient-to-b from-transparent via-[#6C63FF]/40 to-transparent rounded-full animate-light-strip-down duration-[10s] [animation-delay:1.5s]" />
        </div>

        <div className="relative w-px h-full bg-gradient-to-b from-transparent via-purple-400/10 to-transparent">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-56 bg-gradient-to-b from-transparent via-[#8B5CF6]/40 to-transparent rounded-full animate-light-strip-down duration-[8.5s] [animation-delay:3.5s]" />
        </div>

        <div className="relative w-px h-full bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent hidden md:block">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-72 bg-gradient-to-b from-transparent via-[#00E5FF]/40 to-transparent rounded-full animate-light-strip-down duration-[11s] [animation-delay:2s]" />
        </div>
      </div>

      {/* Horizontal Laser Scanning Beams */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.05]">
        <div className="absolute top-[25%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent">
          <div className="w-64 h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF]/60 to-transparent animate-laser-horizontal duration-[11s]" />
        </div>
        <div className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-400/10 to-transparent">
          <div className="w-80 h-[1px] bg-gradient-to-r from-transparent via-[#6C63FF]/60 to-transparent animate-laser-horizontal duration-[15s] [animation-delay:4s]" />
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute left-[10%] w-1.5 h-1.5 rounded-full bg-cyan-300 animate-particle-rising duration-[14s]" />
        <div className="absolute left-[30%] w-1.5 h-1.5 rounded-full bg-indigo-300 animate-particle-rising duration-[18s] [animation-delay:3s]" />
        <div className="absolute left-[55%] w-1.5 h-1.5 rounded-full bg-purple-300 animate-particle-rising duration-[16s] [animation-delay:6s]" />
        <div className="absolute left-[75%] w-1.5 h-1.5 rounded-full bg-cyan-300 animate-particle-rising duration-[20s] [animation-delay:2s]" />
        <div className="absolute left-[90%] w-1 h-1 rounded-full bg-indigo-300 animate-particle-rising duration-[12s] [animation-delay:8s]" />
      </div>
    </div>
  );
};
