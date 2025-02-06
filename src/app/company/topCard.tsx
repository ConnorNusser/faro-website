'use client'
import React from 'react';
import { Box, Flex, chakra, useColorModeValue, Img } from '@chakra-ui/react';
const FoundersMessageCard = () => {
  return (
    <Flex justifyContent="center" py={6}>
      <Box
        w={{ base: "full" }}
        rounded="sm"
        overflow="hidden"
        bg={useColorModeValue("white", "gray.800")}
        border="1px"
        borderColor="black"
        boxShadow="6px 6px 0 rgb(66, 153, 225)"  // Updated shadow color
      >
        <Flex direction={{ base: "column", md: "row" }} p={4}>
          {/* Image Section */}
          <Box flex="1" mr={{ md: 4 }} mb={{ base: 4, md: 0 }} borderColor="white">
            <Img
              src="/images/dumbbell.jpg"  // Replace with actual image path
              alt="Founders"
              objectFit="cover"
              w="full"
              h="full"
            />
          </Box>

          {/* Text Section */}
          <Box flex="2"  ml={8}>
            <Box bg="black" px={2} py={1} color="white" mb={2} display="inline-block">
              <chakra.span fontSize="xs" fontWeight="medium">
                Founders
              </chakra.span>
            </Box>

            <chakra.h2 color="black" fontSize="2xl" mb={2}>
              A Message from the Founders of Argos
            </chakra.h2>

            <chakra.p color="gray.500" fontSize="lg" mb={4}>
              Dear Argos Community,
            </chakra.p>

            <chakra.p color="gray.500" fontSize="lg" mb={4}>
              For years, I've grappled with the challenge of connecting with others at the gym without the awkwardness of interrupting their workouts...
            </chakra.p>

            <chakra.p color="gray.500" fontSize="lg" mb={4}>
              Argos was conceived as a solution to bridge this gap. It not only eliminates the anxiety of approaching strangers...
            </chakra.p>

            <chakra.p color="gray.500" fontSize="lg">
              In Good Health,<br />
              Christian, Sharatt, Connor, Kinan & Caroline
            </chakra.p>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default FoundersMessageCard;
