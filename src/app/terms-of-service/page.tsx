'use client'
import { Container, Button } from "@chakra-ui/react";
import { Download } from "lucide-react"; // Import the download icon
import TosContent from "./termsOfServices"; // Import your TOS content

export default function Home() {
  const handlePrint = () => {
    window.print(); // Trigger the print dialog
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
        <TosContent />
      </Container>
    </div>
  );
}
