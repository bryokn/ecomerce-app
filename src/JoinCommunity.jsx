import { useState } from "react";
import { Button, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text, Box } from "@chakra-ui/react";

function JoinCommunityButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Box position="fixed" bottom="1rem" right="1rem">
        <Button colorScheme="teal" onClick={handleOpen}>
          Join Our Community
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Let’s work together!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4} align="stretch">
              <Text fontSize="lg" textAlign="center">
                Are you an influencer or a content creator? Join our influencer affiliate program and earn today.
              </Text>
              <Button colorScheme="teal" size="lg" width="100%">Apply now</Button>
            </VStack>
          </ModalBody>
          <ModalFooter justifyContent="center">
            <Button colorScheme="teal" onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default JoinCommunityButton;

