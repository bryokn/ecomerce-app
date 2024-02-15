import React from "react";
import { Button, Badge, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react";

function CartButton({ cartCount, selectedProducts }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="teal" variant="solid" onClick={onOpen}>
        Cart <Badge ml={1} colorScheme="red">{cartCount}</Badge>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Selected Drinks</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ul>
              {selectedProducts.map((product, index) => (
                <li key={index}>
                  <div>{product.name}</div>
                  <div>${product.price}</div>
                </li>
              ))}
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="yellow" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CartButton;

