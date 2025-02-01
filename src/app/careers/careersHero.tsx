"use client";
import { motion } from "framer-motion";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function CareersHero() {
  return (
    <Box position="relative" overflow="hidden"  pt={{ base: 8, lg: 24 }}>
      <Container maxW="100%" centerContent bg='#edf2f7' py="20">
        <Box maxW="4xl" textAlign="center">
          <motion.div
            initial={{ opacity: 1, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading size="2xl" fontWeight="bold" color="gray.800">
              Kickstart your Career at Gradient
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text mt={4} fontSize="lg" color="gray.800">
              At Gradient, we are seeking talented individuals who are dedicated to fostering a sense of belonging, encouragement, and support within the fitness realm. As a team member, you will play a pivotal role in shaping the future of our app and empowering gym enthusiasts worldwide.
            </Text>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
