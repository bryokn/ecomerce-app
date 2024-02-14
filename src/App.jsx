import { Button, useColorMode, Stack, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import "./App.css";
import ProductCatalog from "./ProductCatalog";
import { useState } from "react";
import { Login, Signup } from "./AuthForms";
import UserPage from "./UserPage";

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

  const openLoginModal = () => setLoginIsOpen(true);
  const closeLoginModal = () => setLoginIsOpen(false);
  const openSignupModal = () => setSignupIsOpen(true);
  const closeSignupModal = () => setSignupIsOpen(false);
  const handleLogout = () => setUser(null);

  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" /> {/* Initialize color mode */}
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
          <UserPage user={user} onLogout={handleLogout} />
        )}
      </>
    </ChakraProvider>
  );
}

export default App;
