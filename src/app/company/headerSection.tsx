'use client'
import React from 'react';
import { Box, Flex, chakra } from '@chakra-ui/react';

const HeadingSection = () => {
  return (
    <Flex justifyContent="center" py={6}>
      <Box textAlign="center">
        <chakra.h1 color="black" fontSize="4xl" mb={2}>
          We’re on a mission to help gym communities connect seamlessly.
        </chakra.h1>
        <chakra.h2 color="gray.500" fontSize="md" mb={4}>
          Our platform enables fitness enthusiasts to engage with one another, fostering a collaborative and motivating community environment.
        </chakra.h2>

      </Box>
    </Flex>
  );
};

export default HeadingSection;
