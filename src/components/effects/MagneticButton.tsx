'use client';
import { useRef, type ReactNode } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type HTMLMotionProps,
} from 'framer-motion';

type Props = Omit<HTMLMotionProps<'a'>, 'children' | 'href'> & {
  href: string;
  children: ReactNode;
  /** Max pixel travel of the button toward cursor. */
  strength?: number;
  /** Inner content moves at this fraction of the outer travel (parallax depth). */
  innerRatio?: number;
  className?: string;
};

/**
 * Magnetic anchor — element nudges toward cursor when hovered. Inner content
 * moves at a smaller scale so the label appears to push slightly into the
 * cursor for a tactile "press" feel. Springs return everything to rest.
 *
 * Disabled under prefers-reduced-motion or on touch devices (no hover).
 */
export default function MagneticButton({
  href,
  children,
  strength = 16,
  innerRatio = 0.5,
  className,
  target,
  rel,
  ...rest
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 240, damping: 20, mass: 0.6 });

  // Inner moves at innerRatio of the outer — must be at top level (hooks rule)
  const ix = useTransform(sx, (v) => v * innerRatio);
  const iy = useTransform(sy, (v) => v * innerRatio);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    x.set((dx / (rect.width / 2)) * strength);
    y.set((dy / (rect.height / 2)) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.97 }}
      className={className}
      {...rest}
    >
      <motion.span
        style={{
          x: ix,
          y: iy,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          willChange: 'transform',
        }}
      >
        {children}
      </motion.span>
    </motion.a>
  );
}
