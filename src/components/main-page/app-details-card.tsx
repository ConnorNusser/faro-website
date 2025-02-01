'use client'

import {
  Container,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function AppDetailsCard() {
  return (
    <Container maxW={'5xl'} py={12}>
      {/* Flex container with responsive direction */}
      <Flex
        direction={useBreakpointValue({ base: 'column', md: 'row' })}
        align={'center'}
        justify={'space-between'}
        wrap={'wrap'} // To ensure wrapping on smaller screens
        gap={8} // Adds space between the elements
      >
        {/* First SVG: iphone-feed */}
        <Flex direction={'column'} align={'center'}>
          <img
            src={'/images/iphone-gym.svg'}
            alt={'iPhone Feed'}
            width={250}
            height={400} 
          />
          <Heading as={'h4'} size={'md'} mt={4}>iPhone Feed</Heading>
          <Text color={'gray.500'}>Explore your gym's activity feed.</Text>
        </Flex>

        {/* Right arrow between iphone-feed and iphone-details */}
        <Flex justify={'center'}>
          <img
            src={'/images/right_arrow.svg'}
            alt={'Right Arrow'}
            width={10}
            height={10}
          />
        </Flex>

        {/* Second SVG: iphone-details */}
        <Flex direction={'column'} align={'center'}>
          <img
            src={'/images/iphone-details.svg'}
            alt={'iPhone Details'}
            width={250}
            height={400}
          />
          <Heading as={'h4'} size={'md'} mt={4}>iPhone Details</Heading>
          <Text color={'gray.500'}>Stay informed with gym details.</Text>
        </Flex>

        {/* Right arrow between iphone-details and iphone-chat */}
        <Flex justify={'center'}>
          <img
            src={'/images/right_arrow.svg'}
            alt={'Right Arrow'}
            width={10}
            height={10}
          />
        </Flex>

        {/* Third SVG: iphone-chat */}
        <Flex direction={'column'} align={'center'}>
          <img
            src={'/images/iphone-chat.svg'}
            alt={'iPhone Chat'}
            width={250}
            height={400}
          />
          <Heading as={'h4'} size={'md'} mt={4}>iPhone Chat</Heading>
          <Text color={'gray.500'}>Chat with your community in real-time.</Text>
        </Flex>
      </Flex>
    </Container>
  )
}
