"use client";
import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
  
  
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Our Teachers Speak</Heading>
          <Text>We Are Make a Best Developer In The World</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Inspirational Teacher</TestimonialHeading>
              <TestimonialText>
              “If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people." .
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://scontent.flhe12-1.fna.fbcdn.net/v/t39.30808-1/263273711_10158351180047623_7045526683278197383_n.jpg?stp=dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeElpLaG0Sl8rIrVjGm3fJV36dXcOl3Y_4Dp1dw6Xdj_gIcTMQJsUgi9IOrd7p-Oqmw3wECSJzSHpSNJ8dp0Cqpd&_nc_ohc=7tkZ2bcv_x4AX9fDHl5&tn=OKuxL76yQAOdLdbO&_nc_ht=scontent.flhe12-1.fna&oh=00_AfApn97R6z69AkyPvzWJgOGg4YW2RV89rbW6kDxWToFEjQ&oe=63E04A63"
              }
              name={"Zia Khan"}
              title={"COO PIAIC | CEO PANACLOUD "}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Ideal Teacher</TestimonialHeading>
              <TestimonialText>
              A good education can change anyone
                but a good teacher can change everythings..
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfHH2q_Lt4DgcQ7MtNwmkkCx3i8YENM1s5vu4ZhPUiQ&s"              }
              name={"Hira khan"}
              title={"CEO PANAVERSE"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Ideal Teacher</TestimonialHeading>
              <TestimonialText>
              Teaching is the one profession that creates all other professions.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://avatars.githubusercontent.com/u/62209503?v=4"             }
              name={"Adil Altaf"}
              title={"CEO PANAVERSE"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
