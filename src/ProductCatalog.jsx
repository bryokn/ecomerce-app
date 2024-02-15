import React, { useEffect, useState } from "react";
import data from "../db.json";
import {
  Button,
  Card,
  CardBody,
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
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <Heading
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
            size="md"
            fontSize="2rem"
          >
            {product.brand}
          </Heading>
          <img src={product.image_url} alt={product.name} />
        </div>
        <div className="card-back">
          <Card
            maxW="sm"
            key={product.id}
            alignItems="center"
            justifyContent="center"
            borderRadius="20px"
          >
            <CardBody>
              <Heading
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontWeight="extrabold"
                size="md"
              >
                {product.brand}
              </Heading>
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

              <Text colorScheme="black">Volume: {product.volume_ml}</Text>
              <Text colorScheme="black">Price: {product.price_usd}</Text>
              <Text colorScheme="black">Quantity: {product.quantity}</Text>

              <Button
                variant="solid"
                colorScheme="red"
                w="200px"
                alignItems="center"
                justifyContent="center"
              >
                Add to Cart
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
    // <Card
    //   mb={4}
    //   bg={bg}
    //   color={color}
    //   className="cards"
    //   maxW="sm"
    //   key={product.id}
    //   borderWidth="1px"
    //   borderRadius="lg"
    //   borderColor="blue"
    //   overflow="hidden"
    //   width="250px"
    //   margin="1rem"
    //   alignItems="center"
    //   justifyContent="center"
    // >
    //   <CardBody>
    //     <Heading
    //       bgGradient="linear(to-l, #7928CA, #FF0080)"
    //       bgClip="text"
    //       fontWeight="extrabold"
    //       size="md"
    //     >
    //       {product.brand}
    //     </Heading>
    //     <Text color="black">Type: {product.type}</Text>
    //     <Flex w="100%" h="350px">
    //       <Image
    //         src={product.image_url}
    //         alt={product.name}
    //         borderRadius="lg"
    //         objectFit="cover"
    //         w={"100vw"}
    //       />
    //     </Flex>
    //     <Stack mt="6" spacing="0">
    //       <Text color="black">Volume: {product.volume_ml}</Text>
    //       <Text color="green">Price: {product.price_usd}</Text>
    //       <Text color="black">Quantity: {product.quantity}</Text>
    //     </Stack>
    //   </CardBody>
    //   <Divider />
    //   <CardFooter>
    //     <ButtonGroup spacing="2">
    //       <Button
    //         variant="solid"
    //         colorScheme="red"
    //         w="200px"
    //         alignItems="center"
    //         justifyContent="center"
    //       >
    //         Add to Cart
    //       </Button>
    //     </ButtonGroup>
    //   </CardFooter>
    // </Card>
  ));

  return <div className="cards-container">{productsCard}</div>;
}

export default ProductCatalog;
