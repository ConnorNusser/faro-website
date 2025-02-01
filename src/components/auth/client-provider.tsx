'use client';

import { AuthProvider } from './provider';

export default function ClientProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}