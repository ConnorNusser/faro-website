// client-provider.tsx
'use client';

import { ChakraProvider } from '@chakra-ui/react';

export default function ClientProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  );
}