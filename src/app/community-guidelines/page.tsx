import { Container, Heading, Text } from "@chakra-ui/react";

export default function CommunityGuidelines() {
    const h1Style = "scroll-m-20 text-2xl font-bold tracking-tight lg:text-2xl py-2";
  
    return (
      <div>
        <Container maxW="container.lg" py={10}>
        <Heading className={h1Style}>Community Guidelines</Heading>
        <Text>
          Being part of the Argos community is a commitment to respect: we respect each other, ourselves, and the rules. These rules include Argos's Acceptable Use Policies, along with our Terms of Service and Community Standards. When we share mutual respect, we all succeed. Here’s how we ensure that happens and what we expect from our members.
        </Text>
        </Container>
      </div>
    );
}
  