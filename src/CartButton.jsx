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

function CartButton({ cartCount, selectedProducts, removeFromCart }) {
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

  // Function to remove a single item from the cart
  const handleRemoveFromCart = (index) => {
    const updatedProducts = [...selectedProducts]; 
    updatedProducts.splice(index, 1); 
    removeFromCart(updatedProducts); 
    calculateTotalPrice(); 
  };

  //Clear Cart
  const handleClearCart = () => {
    setTotalPrice(0); 
    onClose(); 
    removeFromCart([]);
  };

  return (
    <>
      <Button id="cart" colorScheme="teal" variant="solid" onClick={onOpen}>
        Cart <Badge ml={1} colorScheme="black">{cartCount}</Badge>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Cart ({cartCount}) Drinks</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ul>
              {selectedProducts.map((product, index) => (
                <li key={index}>
                  <div>{product.name} - {product.brand}</div>
                  <div>${product.price_usd}</div> {/* Update to use correct price property */}
                  <Button colorScheme="purple" size="sm" variant="outline" onClick={() => handleRemoveFromCart(index)}>Remove Drink</Button>
                </li>
              ))}
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" variant="ghost" mr={3} onClick={calculateTotalPrice}>
              Add Total
            </Button>
            <div>Price: ${totalPrice.toFixed(2)}</div>
            <Button colorScheme="green" variant="outline" mr={3} onClick={() => {}}>
              Pay
            </Button>
            <Button colorScheme="red" onClick={handleClearCart}>
              Clear Cart
            </Button>
            {/**<Button colorScheme="yellow" mr={3} onClick={onClose}>
              Close
            </Button>**/}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CartButton;