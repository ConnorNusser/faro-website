import { Box, Heading, Text, Button, HStack, Icon, VStack } from "@chakra-ui/react";
import { LucideArrowRight, Telescope } from "lucide-react";

export type companyRoleType = 'SoftwareEngineerIntern' | 'SoftwareEngineer';

export interface CareerCardProps { 
    roleName: string;
    jobDescriptionString: string;
    roleType: companyRoleType;
    jobDescriptionLink: string;
}

export default function CareersCard(props: CareerCardProps) {
  return (
    <Box maxW="4xl" borderWidth="2px" borderRadius="lg" overflow="hidden" p={4} m={4}>
      <HStack spacing={4} align="center">
        <Icon as={props.roleType === 'SoftwareEngineer' ? Telescope : LucideArrowRight} boxSize={6} />
        <VStack align="start">
          <Heading as="h3" size="md">{props.roleName}</Heading>
          <Text>Remote</Text>
        </VStack>
      </HStack>
      <Box mt={4}>
        <Text>{props.jobDescriptionString}</Text>
        <Button size="sm" mt={4} onClick={() => window.open(props.jobDescriptionLink, '_blank')}>
          Apply Now
        </Button>
      </Box>
    </Box>
  );
}
