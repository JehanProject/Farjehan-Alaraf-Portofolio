import { motion, useReducedMotion } from 'framer-motion';

export default function SectionReveal({ children, className = '', delay = 0, ...props }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
