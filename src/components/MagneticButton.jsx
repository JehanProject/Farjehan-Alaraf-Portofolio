import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({
  children,
  className = '',
  onClick,
  strength = 0.35,
  variant = 'primary',
  ...props
}) {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  const baseStyle =
    variant === 'primary'
      ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-size-200 text-white shadow-lg shadow-blue-500/25 border border-cyan-400/40 hover:shadow-cyan-500/40'
      : variant === 'gold'
      ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-space-950 font-bold shadow-lg shadow-yellow-500/25 border border-yellow-300 hover:shadow-yellow-500/50'
      : 'glass-panel text-slate-200 hover:text-white border-white/10 hover:border-cyan-400/40 hover:bg-white/5';

  return (
    <motion.button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 15, mass: 0.1 }}
      whileTap={{ scale: 0.96 }}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-xl font-medium transition-all duration-300 ${baseStyle} ${className}`}
      {...props}
    >
      {/* Ripple wave layer */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none absolute rounded-full bg-white/35 animate-ping"
          style={{
            left: ripple.x - 20,
            top: ripple.y - 20,
            width: 40,
            height: 40,
            transform: 'scale(3)',
            animationDuration: '600ms',
          }}
        />
      ))}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
