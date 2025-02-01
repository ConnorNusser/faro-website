'use client'
import { Container, Button } from '@chakra-ui/react';
import PrivacyContent from './privacyPolicyContent';
import { Download } from 'lucide-react';

export default function Home() {
    const handlePrint = () => {
      window.print();
    };
  
    return (
      <div>
        <Container maxW="container.lg" py={10}>
        <Button 
            onClick={handlePrint} 
            leftIcon={<Download />} 
            colorScheme="teal" 
            mt={5}
          >
            Download
          </Button>
          <PrivacyContent />
        </Container>
      </div>
    );
  }
  