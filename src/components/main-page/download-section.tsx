'use client'

import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Heading,
  Stack,
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export const DownloadSection = () => {
  //const bg = useColorModeValue("white", "gray.800");

  return (
    <Box
      w="full"
      h="container.sm"
      backgroundImage="url('/images/rectangle-80.svg')"  // Use correct path for the background image
      bgPos="center"
      bgSize="cover"
    >
      <Flex
        align="center"
        pos="relative"
        justify="center"
        boxSize="full"
        bg="blackAlpha.700"
      >
        <Stack textAlign="center" alignItems="center" spacing={6}>
          <Heading
            fontWeight="semibold"
            color="white"
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }} // Larger starting font size
          >
            Gradient is live at select locations in the US.
          </Heading>
          <Button
            colorScheme="brand"
            textTransform="uppercase"
            w={{ base: "full", md: "fit-content" }} // Full width on small screens, fit-content on larger
            fontSize={{ base: "lg", sm: "xl" }} // Larger button font size
            whiteSpace="normal" // Allow text to wrap
            p={{ base: 4, md: 2 }} // Padding adjustments for better appearance
          >
            Download the app on the App Store or Google Play to get started.
          </Button>
          {/* Responsive Grid for App Store and Google Play buttons */}
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} mt={4}>
            {/* Google Play Store */}

            {/* Apple App Store */}
            <Box>
              <a href="https://apps.apple.com/us/app/gradient-connect/id6464495135" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/app_store.png"  // Path to Apple App Store badge in public/images
                  alt="Download on the App Store"
                  width={200}
                  height={100}
                />
              </a>
            </Box>
            <Box>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/play_store.png"  // Path to Google Play badge in public/images
                  alt="Get it on Google Play"
                  width={220}
                  height={140}
                />
              </a>
            </Box>
          </SimpleGrid>
        </Stack>
      </Flex>
    </Box>
  );
}

export default DownloadSection;
