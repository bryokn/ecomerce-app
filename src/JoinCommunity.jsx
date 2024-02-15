import { useState } from "react";
import { Button, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text, Box, Input } from "@chakra-ui/react";

function JoinCommunityButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleApplyNow = () => {
    
    if (!name || !email) {
      alert("Please enter your name and email address.");
      return;
    }

    setSuccessMessage("Application successful! We'll get back to you.");
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
            {successMessage ? (
              <Text fontSize="lg" textAlign="center" color="green.500">
                {successMessage}
              </Text>
            ) : (
              <>
                <VStack spacing={4} align="stretch">
                  <Input
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </VStack>
                <Button
                  colorScheme="teal"
                  size="lg"
                  width="100%"
                  mt="4"
                  onClick={handleApplyNow}
                >
                  Apply now
                </Button>
              </>
            )}
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

