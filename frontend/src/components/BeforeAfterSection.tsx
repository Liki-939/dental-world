'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Case {
  beforeImg: string;
  afterImg: string;
  description: string;
}

export default function BeforeAfterSection({ cases }: { cases: Case[] }) {
  if (!cases || cases.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
      {cases.map((c, index) => (
        <BeforeAfterSlider key={index} data={c} />
      ))}
    </div>
  );
}

function BeforeAfterSlider({ data }: { data: Case }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleInteractionStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div 
        ref={containerRef}
        className="relative h-64 sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-soft cursor-ew-resize select-none touch-none group"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}
      >
        {/* Before Image (Background) */}
        <div className="absolute inset-0">
          <Image src={data.beforeImg} alt="Before" fill className="object-cover pointer-events-none" />
          <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm z-10 transition-opacity">
            Before
          </div>
        </div>

        {/* After Image (Foreground, clipped) */}
        <div 
          className="absolute inset-0 border-r-2 border-white/80 shadow-[10px_0_15px_-3px_rgba(0,0,0,0.1)]"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image src={data.afterImg} alt="After" fill className="object-cover pointer-events-none" />
          <div className="absolute top-4 right-4 bg-brand text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg z-10">
            After
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute inset-y-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 flex items-center justify-center transition-transform hover:scale-110"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          <div className="w-8 h-8 -ml-3.5 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-slate-100 text-brand">
            <ChevronLeft className="w-4 h-4 -mr-1" />
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="text-center px-4">
        <p className="text-slate-600 font-medium">{data.description}</p>
      </div>
    </div>
  );
}
