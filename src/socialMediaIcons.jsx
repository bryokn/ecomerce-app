import { IconButton, VStack, HStack } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function SocialMediaIcons() {
  return (
    <VStack
      position="fixed"
      bottom="1rem"
      left="1rem"
      spacing={4}
      align="flex-start"
    >
      <HStack spacing={4}>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <IconButton
            as={FaInstagram}
            aria-label="Instagram"
            colorScheme="teal"
            size="sm"
          />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <IconButton
            as={FaFacebook}
            aria-label="Facebook"
            colorScheme="teal"
            size="sm"
          />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <IconButton
            as={FaTwitter}
            aria-label="Twitter"
            colorScheme="teal"
            size="sm"
          />
        </a>
      </HStack>
    </VStack>
  );
}

export default SocialMediaIcons;
