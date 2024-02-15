import { useState } from "react";
import { Button, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text, Box, Input, Checkbox } from "@chakra-ui/react";

function JoinCommunityButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAbove18, setIsAbove18] = useState(false); 
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

    if (!isAbove18) {
      alert("You must confirm that you are 18 or above to apply.");
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
                  <Checkbox
                    isChecked={isAbove18}
                    onChange={(e) => setIsAbove18(e.target.checked)}
                  >
                    I confirm that I am 18 years or above.
                  </Checkbox>
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


