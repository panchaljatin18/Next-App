'use client';
import React, { useState, useEffect, useRef } from 'react';

const GalaxyCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hue, setHue] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  // Refs for smooth animation
  const cursorRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e) => {
      // Update target position
      cursorRef.current = { x: e.clientX, y: e.clientY };
      setHue(prev => (prev + 1) % 360);
    };

    // Smooth animation loop
    const animate = () => {
      setPosition(prev => ({
        x: prev.x + (cursorRef.current.x - prev.x) * 0.15,
        y: prev.y + (cursorRef.current.y - prev.y) * 0.15
      }));
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleLinkHover = () => setIsPointer(true);
    const handleLinkLeave = () => setIsPointer(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'none';

    const interactiveElements = document.querySelectorAll('a, button, input, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHover);
      el.addEventListener('mouseleave', handleLinkLeave);
    });

    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    // Start animation
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHover);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
      document.body.style.cursor = 'auto';
      document.head.removeChild(style);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [mounted]);

  // Don't render anything until mounted on client
  if (!mounted) return null;

  // Colors based on states
  const getMainColor = () => {
    if (isClicking) return '#FF3366';
    if (isPointer) return '#00FFFF';
    return `hsl(${hue}, 85%, 65%)`;
  };

  const getGlowColor = () => {
    if (isClicking) return '#HGF89';
    if (isPointer) return '#FDF600';
    return `hsl(${hue + 40}, 55%, 15%)`;
  };

  const mainColor = getMainColor();
  const glowColor = getGlowColor();

  // Calculate sizes based on states
  const cursorSize = isClicking ? 28 : isPointer ? 25 : 18;
  const glowSize = isClicking ? 90 : isPointer ? 20 : 80;
  const innerSize = 6; // Fixed smaller inner dot

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}>
      <style jsx global>{`
        * { cursor: none !important; }
      `}</style>
      
      {/* Outer glow - smooth and subtle */}
      <div
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${glowSize}px`,
          height: `${glowSize}px`,
          background: `radial-gradient(circle, ${mainColor}40 0%, ${glowColor}30 50%, transparent 80%)`,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9996,
          filter: 'blur(16px)',
        }}
      />
      
      {/* Main cursor core */}
      <div
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          background: `radial-gradient(circle at 35% 35%, white 0%, ${mainColor} 75%, ${glowColor} 100%)`,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: `0 0 ${glowSize * 0.8}px ${mainColor}, 0 0 ${glowSize * 1.2}px ${glowColor}`,
          border: '1.5px solid rgba(255,255,255,0.8)',
        }}
      />
            
      {/* Smooth outer ring */}
      <div
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${cursorSize + 12}px`,
          height: `${cursorSize + 12}px`,
          border: `2px solid ${mainColor}`,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0.6,
          animation: 'pulse 2s ease infinite',
        }}
      />
      
      {/* Click ripple effect */}
      {isClicking && (
        <div
          style={{
            position: 'fixed',
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: '35px',
            height: '35px',
            border: `2.5px solid ${mainColor}`,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 9997,
            animation: 'ripple 0.4s ease-out forwards',
            boxShadow: `0 0 30px ${mainColor}`,
          }}
        />
      )}
      
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
        }
        
        @keyframes ripple {
          0% {
            width: 30px;
            height: 30px;
            opacity: 0.9;
            border-width: 2.5px;
          }
          100% {
            width: 100px;
            height: 100px;
            opacity: 0;
            border-width: 1px;
          }
        }
      `}</style>
    </div>
  );
};

export default GalaxyCursor;