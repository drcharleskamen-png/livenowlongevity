'use client';
import { useEffect, useRef } from 'react';
import {
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  motion,
  useReducedMotion,
} from 'framer-motion';

type Props = {
  /** Target number to count to. */
  to: number;
  /** Starting number — defaults to 0. */
  from?: number;
  /** Decimals to display (e.g. 0 -> "299", 2 -> "299.00"). */
  decimals?: number;
  /** Spring stiffness. Lower = slower, smoother. */
  stiffness?: number;
  /** Spring damping. Higher = less bounce. */
  damping?: number;
  /** Optional prefix (e.g. "$"). Rendered before the number. */
  prefix?: string;
  /** Optional suffix. */
  suffix?: string;
  className?: string;
};

/**
 * Animates a number from `from` to `to` once it enters the viewport.
 * Uses Motion's spring + useTransform so the rendered text snaps to
 * integers with the user's locale formatting (commas, etc).
 */
export default function CountUp({
  to,
  from = 0,
  decimals = 0,
  stiffness = 60,
  damping = 18,
  prefix,
  suffix,
  className,
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  const value = useMotionValue(reduce ? to : from);
  const spring = useSpring(value, reduce ? { duration: 0 } : { stiffness, damping });
  const display = useTransform(spring, (v) =>
    v.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );

  useEffect(() => {
    if (inView) value.set(to);
  }, [inView, to, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
