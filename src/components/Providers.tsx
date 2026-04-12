'use client';
import SchemaMarkup from './SchemaMarkup';
import StickyCta from './StickyCta';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaMarkup />
      {children}
    </>
  );
}
