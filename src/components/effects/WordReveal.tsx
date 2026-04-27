'use client';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Splits a string into words and reveals them one at a time with a spring.
 * Renders inline by default — wrap in your own heading element.
 *
 * Children that aren't strings (e.g. <span>) render as a single chunk so
 * you can compose with accent spans.
 */
type Props = {
  text: string;
  /** Delay (in seconds) before the first word reveals. */
  delay?: number;
  /** Stagger between words. */
  stagger?: number;
  /** Replace any inline class — usually omit. */
  className?: string;
  /** Optional accent: tokens that match this string get the accent class. */
  accentMatch?: string;
  accentClass?: string;
  /** Render after the words (e.g. an accent span). */
  trailing?: ReactNode;
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: '0.6em', filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 220, damping: 22, mass: 0.9 },
  },
};

export default function WordReveal({
  text,
  delay = 0,
  stagger = 0.06,
  className,
  accentMatch,
  accentClass,
  trailing,
}: Props) {
  const reduce = useReducedMotion();
  const tokens = text.split(/(\s+)/); // keep whitespace tokens

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delay,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={className}
      style={{ display: 'inline' }}
    >
      {tokens.map((tok, i) => {
        if (/^\s+$/.test(tok)) return tok;
        const isAccent =
          accentMatch &&
          accentClass &&
          tok.toLowerCase().includes(accentMatch.toLowerCase());
        return (
          <motion.span
            key={`${tok}-${i}`}
            variants={wordVariants}
            style={{ display: 'inline-block', willChange: 'transform, opacity, filter' }}
            className={isAccent ? accentClass : undefined}
          >
            {tok}
          </motion.span>
        );
      })}
      {trailing}
    </motion.span>
  );
}
