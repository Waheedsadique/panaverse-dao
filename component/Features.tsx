"use client";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text>
          <Heading as={"h1"}>One of the Best Tutors In The World Here!</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
          Best Tutors aims to provide a safe, friendly and pleasant environment for both students and tutors. We encourage our pupils to show enthusiasm towards their studies and strive to present the finest teaching for our students. As a result, we expect each and every student to achieve top results. We trust that each individual will actively contribute to achieve Best Tutors aims.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Business Planning"}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Financial Planning"}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Market Analysis"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
'https://scontent.flhe12-1.fna.fbcdn.net/v/t39.30808-6/326529074_3098895356922762_7665616936829717143_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHZZZc_gKfx5IspKsHTHmXAGliAIgxHQwsaWIAiDEdDC1w-No86aCZw5DwDFCKFarxYFVaDWDGp8HZxqtbI74jT&_nc_ohc=ZOfjdQhFeW0AX-pmrBg&tn=OKuxL76yQAOdLdbO&_nc_ht=scontent.flhe12-1.fna&oh=00_AfBy4mxsBouAZcjdpdsdjNh3ste9P0fKDU8vA5duC3WNjQ&oe=63DFBCAB'
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
