// CartButton.jsx
import React, { useState } from "react";
import {
  Button,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

function CartButton({ cartCount, selectedProducts, clearCart }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to calculate total price
  const calculateTotalPrice = () => {
    let total = 0;
    selectedProducts.forEach((product) => {
      total += product.price_usd; // Assuming price_usd is the correct property for the price
    });
    setTotalPrice(total);
  };

  // Function to clear the cart
  const handleClearCart = () => {
    clearCart(); // Call the clearCart function passed as prop
    setTotalPrice(0); // Reset total price to 0
    onClose(); // Close the modal after clearing the cart
  };

  return (
    <>
      <Button id="cart" colorScheme="blue" variant="solid" onClick={onOpen}>
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
                  <div>${product.price_usd}</div> {/* Update to use correct price property */}
                </li>
              ))}
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={calculateTotalPrice}>
              Total
            </Button>
            <div>Price: ${totalPrice.toFixed(2)}</div>
            <Button colorScheme="green" mr={3} onClick={() => {}}>
              Pay
            </Button>
            <Button colorScheme="red" onClick={handleClearCart}>
              Clear Cart
            </Button>
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






/** CartButton.jsx
import React, { useState } from "react";
import {
  Button,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

function CartButton({ cartCount, selectedProducts, clearCart }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to calculate total price
  const calculateTotalPrice = () => {
    let total = 0;
    selectedProducts.forEach((product) => {
      total += product.price_usd; // Assuming price_usd is the correct property for the price
    });
    setTotalPrice(total);
  };

  return (
    <>
      <Button colorScheme="blue" variant="solid" onClick={onOpen}>
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
                  <div>${product.price_usd}</div> {/* Update to use correct price property /}
                </li>
              ))}
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={calculateTotalPrice}>
              Total
            </Button>
            <div>Price: ${totalPrice.toFixed(2)}</div>
            <Button colorScheme="green" mr={3} onClick={() => {}}>
              Pay
            </Button>
            <Button colorScheme="red" onClick={clearCart}>
              Clear Cart<br/>
            </Button>
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

**/