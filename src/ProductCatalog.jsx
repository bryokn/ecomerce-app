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

function ProductCatalog({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.liquors);
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product); // Call addToCart function with the selected product
  };

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
      background="#eaf6ffi"
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
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="red"
            w="200px"
            alignItems="center"
            justifyContent="center"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  ));

  return <div className="cards-container">{productsCard}</div>;
}

export default ProductCatalog;

