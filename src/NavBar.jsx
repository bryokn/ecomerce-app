import {
  Box,
  Button,
  ButtonGroup,
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
