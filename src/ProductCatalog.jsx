import React, { useEffect, useState } from "react";
import data from "../db.json";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

function ProductCatalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.liquors);
  }, []);

  const productsCard = products.map((product) => (
    <Card
      className="cards"
      maxW="sm"
      key={product.id}
      borderWidth="1px"
      borderRadius="lg"
      borderColor="blue"
      overflow="hidden"
      width="250px"
      margin="1rem"
      alignItems="center"
      justifyContent="center"
      background="#b3b3ff"
    >
      <CardBody>
        <Heading size="md">Name: {product.name}</Heading>
        <Text color="black">Type: {product.type}</Text>
        <Flex w="100%" h="350px">
          <Image
            src={product.image_url}
            alt={product.name}
            borderRadius="lg"
            objectFit="cover"
            w={"100vw"}
          />
        </Flex>
        <Stack mt="6" spacing="0">
          <Text color="black">Volume: {product.volume_ml}</Text>
          <Text color="green">Price: {product.price_usd}</Text>
          <Text color="black">Quantity: {product.quantity}</Text>
import { useState } from "react";
import { Button, useColorMode, Stack, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import "./App.css";
import ProductCatalog from "./ProductCatalog";
import { Login, Signup } from "./AuthForms";
import UserPage from "./UserPage";
import ReviewForm from "./ReviewForm"; 

function AuthButtons({ openLoginModal, openSignupModal }) {
  return (
    <Stack direction="row" spacing={4}>
      <Button colorScheme="teal" variant="solid" onClick={openLoginModal}>
        Login
      </Button>
      <Button colorScheme="teal" variant="solid" onClick={openSignupModal}>
        Sign Up
      </Button>
    </Stack>
  );
}

function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} variant="ghost">
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}

function App() {
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]); 

  const openLoginModal = () => setLoginIsOpen(true);
  const closeLoginModal = () => setLoginIsOpen(false);
  const openSignupModal = () => setSignupIsOpen(true);
  const closeSignupModal = () => setSignupIsOpen(false);
  const handleLogout = () => setUser(null);

 
  const handleReviewSubmit = (reviewText) => {
    const newReview = {
      user: user, 
      text: reviewText,
      timestamp: new Date().toISOString(),
    };
    setReviews([...reviews, newReview]); 
  };

  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <>
        <h1>Welcome!!</h1>
        <p>Our Motto is: Everyday is a weekend is you're brave enough! Cheers</p>

        <Stack direction="row" spacing={4}>
          <AuthButtons
            openLoginModal={openLoginModal}
            openSignupModal={openSignupModal}
          />
          <ThemeToggleButton />
        </Stack>

        <Login isOpen={loginIsOpen} onClose={closeLoginModal} setUser={setUser} />
        <Signup
          isOpen={signupIsOpen}
          onClose={closeSignupModal}
          setUser={setUser}
        />

        {!user ? (
          <>
            <h2>Pick your Poison!!</h2>
            <h6>
              <i>(Not literally!!)</i>
            </h6>
            <ProductCatalog />
          </>
        ) : (
          <>
            <h2>Pick your Poison!!</h2>
            <h6>
              <i>(Not literally!!)</i>
            </h6>
            <ProductCatalog />
            <ReviewForm onSubmit={handleReviewSubmit} /> 
            <h2>Customer Reviews</h2>
            {reviews.map((review, index) => (
              <div key={index}>
                <p><strong>{review.user}</strong>: {review.text}</p>
                <p><em>{review.timestamp}</em></p>
              </div>
            ))}
          </>
        )}
      </>
    </ChakraProvider>
  );
}

export default App;
