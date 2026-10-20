import { motion, useReducedMotion } from 'framer-motion';
import SectionReveal from './SectionReveal';

export default function SectionHeading({ eyebrow, title, description, centered = false }) {
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal className={`mb-10 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="section-kicker mb-3">{eyebrow}</p>}
      <motion.h2
        aria-label={title}
        initial={reduceMotion ? false : 'hidden'}
        whileInView={reduceMotion ? undefined : 'visible'}
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.045 } } }}
        className="section-title text-white"
      >
        {title.split(' ').map((word, index) => (
          <span key={`${word}-${index}`} aria-hidden="true" className="editorial-reveal-word mr-[0.22em] last:mr-0">
            <motion.span
              variants={{
                hidden: { opacity: 0, y: '110%' },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20, delay: index * 0.045 } },
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h2>
      {description && (
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
          className="section-copy mt-4 text-sm sm:text-base"
        >
          {description}
        </motion.p>
      )}
    </SectionReveal>
  );
}
