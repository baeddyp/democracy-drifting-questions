
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface FloatingPillProps {
  question: string;
  initialPosition?: { x: number; y: number };
  className?: string;
  onClick?: (question: string) => void;
  isPaused?: boolean;
  colorVariant?: number;
  isSelected?: boolean;
}

const FloatingPill: React.FC<FloatingPillProps> = ({ 
  question, 
  initialPosition = { x: 50, y: 50 },
  className,
  onClick,
  isPaused = false,
  colorVariant = 1,
  isSelected = false
}) => {
  const pillRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!pillRef.current) return;
    
    const moveX = Math.floor(Math.random() * 40) - 20; // -20 to 20
    const moveY = Math.floor(Math.random() * 40) - 20; // -20 to 20
    const moveX2 = Math.floor(Math.random() * 40) - 20; // -20 to 20
    const moveY2 = Math.floor(Math.random() * 40) - 20; // -20 to 20
    const delay = Math.random() * 10; // 0 to 10s delay
    const speed = Math.random() * 10; // 0 to 10s additional animation time
    
    const pill = pillRef.current;
    pill.style.setProperty('--move-x', `${moveX}vw`);
    pill.style.setProperty('--move-y', `${moveY}vh`);
    pill.style.setProperty('--move-x2', `${moveX2}vw`);
    pill.style.setProperty('--move-y2', `${moveY2}vh`);
    pill.style.setProperty('--delay', `${delay}`);
    pill.style.setProperty('--speed', `${speed}`);
    pill.style.left = `${initialPosition.x}%`;
    pill.style.top = `${initialPosition.y}%`;
  }, [initialPosition]);

  const handleClick = () => {
    if (onClick) {
      onClick(question);
    }
  };

  return (
    <div 
      ref={pillRef}
      className={cn(
        "floating-pill px-6 py-3 rounded-full shadow-lg max-w-xs cursor-pointer transition-all",
        `pill-variant-${colorVariant}`,
        isSelected ? "z-50 scale-110" : "",
        isPaused && isSelected ? "!animation-play-state-paused" : "",
        className
      )}
      onClick={handleClick}
      style={{
        animationPlayState: isPaused && isSelected ? 'paused' : 'running'
      }}
    >
      <span className="font-medium text-blue-900">{question}</span>
    </div>
  );
};

export default FloatingPill;
