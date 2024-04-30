import { Box, Flex, Heading, Text, Button, Image, VStack, Link } from "@chakra-ui/react";
import { FaTicketAlt, FaInstagram, FaFacebook, FaTwitter, FaSpotify } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.900" color="white" minHeight="100vh">
      <Flex direction="column" align="center" justify="center" p={8}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1604514288114-3851479df2f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZHxlbnwwfHx8fDE3MTQ0OTI3MDl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Band Logo" mb={4} />
        <Heading as="h1" size="2xl" mb={2}>
          The Rockers
        </Heading>
        <Text fontSize="xl" mb={6}>
          Join us on our world tour!
        </Text>
        <Button leftIcon={<FaTicketAlt />} colorScheme="red" size="lg" mb={4}>
          Buy Tickets
        </Button>
        <VStack spacing={3}>
          <Link href="https://instagram.com" isExternal>
            <Button variant="ghost" leftIcon={<FaInstagram />} colorScheme="whiteAlpha">
              Instagram
            </Button>
          </Link>
          <Link href="https://facebook.com" isExternal>
            <Button variant="ghost" leftIcon={<FaFacebook />} colorScheme="whiteAlpha">
              Facebook
            </Button>
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Button variant="ghost" leftIcon={<FaTwitter />} colorScheme="whiteAlpha">
              Twitter
            </Button>
          </Link>
          <Link href="https://spotify.com" isExternal>
            <Button variant="ghost" leftIcon={<FaSpotify />} colorScheme="whiteAlpha">
              Spotify
            </Button>
          </Link>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
