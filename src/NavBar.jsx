import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function NavBar({ Login, Signup }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("blue.200", "blue.500");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box className="navbar" mb={4} bg={bg} color={color}>
      <Button onClick={toggleColorMode} variant="ghost">
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
      <Heading
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontWeight="extrabold"
        size="md"
        fontSize="2rem"
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://i.pinimg.com/474x/8a/74/10/8a741009f63f8d61e97517f83a4b8131.jpg"
            alt="Icon"
            style={{
              marginRight: "10px",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
            }}
          />
          The Liqour Cave
        </div>
      </Heading>
      <InputGroup marginY={"10"} w={"70"}>
        <InputLeftElement pointerEvents="none" marginRight={"4"}>
          <SearchIcon color="#f310e4" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="search for liquor..."
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontWeight="extrabold"
        />
      </InputGroup>
      <ButtonGroup>
        <Button colorScheme="teal" variant="solid" onClick={Login}>
          Login
        </Button>
        <Button colorScheme="teal" variant="solid">
          Sign Up
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default NavBar;
