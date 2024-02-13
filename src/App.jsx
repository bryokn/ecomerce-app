import { Button } from "@chakra-ui/react";
import "./App.css";
import ProductCatalog from "./ProductCatalog";
import { useState } from "react";
import { Stack, Button } from '@chakra-ui/react';
import { Login, Signup } from './AuthForms';
import UserPage from './UserPage';

function App() {
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const openLoginModal = () => {
    setLoginIsOpen(true);
  };

  const closeLoginModal = () => {
    setLoginIsOpen(false);
  };

  const openSignupModal = () => {
    setSignupIsOpen(true);
  };

  const closeSignupModal = () => {
    setSignupIsOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <h1>Welcome!! <br />Our Motto is: Everyday is a weekend is you're brave enough! <br/> Cheers</h1>
      <Stack direction='row' spacing={4} align='left'>
        {!user && (
          <>
            <Button colorScheme='teal' variant='solid' onClick={openLoginModal}>
              Login
            </Button>
            <Button colorScheme='teal' variant='solid' onClick={openSignupModal}>
              Sign Up
            </Button>
          </>
        )}
        {user && (
          <UserPage user={user} onLogout={handleLogout} />
        )}
      </Stack>

      <Login isOpen={loginIsOpen} onClose={closeLoginModal} setUser={setUser} />
      <Signup isOpen={signupIsOpen} onClose={closeSignupModal} setUser={setUser} />

      {!user && (
        <>
          <h2>Pick your Poison!!</h2>
          <h6><i>(Not literally!!)</i></h6>
          <ProductCatalog />
        </>
      )}
    </>
  );
}

export default App;
