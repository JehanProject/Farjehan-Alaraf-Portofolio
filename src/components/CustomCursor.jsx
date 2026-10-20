import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(-30);
  const y = useMotionValue(-30);
  const springX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.25 });

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    const syncPointer = () => setEnabled(media.matches && !reduceMotion);
    const moveCursor = (event) => {
      x.set(event.clientX - 5);
      y.set(event.clientY - 5);
    };

    syncPointer();
    media.addEventListener('change', syncPointer);
    window.addEventListener('pointermove', moveCursor, { passive: true });
    return () => {
      media.removeEventListener('change', syncPointer);
      window.removeEventListener('pointermove', moveCursor);
    };
  }, [reduceMotion, x, y]);

  if (!enabled) return null;

  return <motion.div aria-hidden="true" className="cursor-glow" style={{ x: springX, y: springY }} />;
}
