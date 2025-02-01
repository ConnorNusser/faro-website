'use client'

import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react'
import { Dumbbell, MessageSquare, BarChart } from 'lucide-react'
import { ReactElement } from 'react'

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function SplitWithImage() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Join Us
          </Text>
          <Heading>Connecting with your community.</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Join Gradient today to connect with your local gym community and stay updated on the latest workouts and events.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
              icon={<Dumbbell color={'#D69E2E'} size={20} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Workout Programs'}
            />
            <Feature
              icon={<MessageSquare color={'#38A169'} size={20} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Easy to use Messaging'}
            />
            <Feature
              icon={<BarChart color={'#805AD5'} size={20} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Stats Tracking'}
            />
          </Stack>
        </Stack>
        <Flex>
          {/* Replacing the existing image with the SVG from public/images */}
          <img
            src={'/images/connect_with_community.svg'}
            alt={'Connect with Community'}
            style={{ width: '100%', height: 'auto' }}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}
