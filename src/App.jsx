// Import necessary libraries and components
import { useState } from "react";
import {
  Button,
  useColorMode,
  Stack,
  ChakraProvider,
  ColorModeScript,
  Divider,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import "./App.css";
import ProductCatalog from "./ProductCatalog";
import { Login, Signup } from "./AuthForms";
import UserPage from "./UserPage";
import ReviewForm from "./ReviewForm";
import CartButton from "./CartButton"; // Import CartButton component

// Component for Login and Signup buttons
function AuthButtons({ openLoginModal, openSignupModal, cartCount }) {
  return (
    <Stack direction="row" spacing={4} id="login">
      <Button colorScheme="teal" variant="solid" onClick={openLoginModal}>
        Login
      </Button>
      <Button colorScheme="teal" variant="solid" onClick={openSignupModal}>
        Sign Up
      </Button>
      <CartButton cartCount={cartCount} selectedProducts={[]} /> {/* Render CartButton component */}
    </Stack>
  );
}

// Component for Theme Toggle Button
function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} variant="ghost">
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}

// Main App component
function App() {
  // Define states for login, signup, user, reviews, and cart items
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [cartItems, setCartItems] = useState([]); // State to store cart items

  // Functions to open and close login and signup modals
  const openLoginModal = () => setLoginIsOpen(true);
  const closeLoginModal = () => setLoginIsOpen(false);
  const openSignupModal = () => setSignupIsOpen(true);
  const closeSignupModal = () => setSignupIsOpen(false);

  // Function to handle logout
  const handleLogout = () => setUser(null);

  // Function to handle review submission
  const handleReviewSubmit = (reviewText) => {
    if (user) {
      const newReview = {
        user: user.firstName + " " + user.lastName,
        text: reviewText,
        timestamp: new Date().toISOString(),
      };
      setReviews([...reviews, newReview]);
    } else {
      alert("You need to log in or sign up to leave a review.");
    }
  };

  // Function to add item to cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]); // Add item to cart
  };

  // Render the App
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <>
        <h1>Drunken Deals</h1>
        <h2>
          Everyday is a weekend if you're brave enough!
          <br />
          Cheers!!
        </h2>

        <Stack direction="row" spacing={4}>
          <AuthButtons
            openLoginModal={openLoginModal}
            openSignupModal={openSignupModal}
            cartCount={cartItems.length} // Pass cart count to AuthButtons
          />
          <ThemeToggleButton />
        </Stack>

        {user ? (
          <UserPage user={user} onLogout={handleLogout} />
        ) : (
          <>
            <Login isOpen={loginIsOpen} onClose={closeLoginModal} setUser={setUser} />
            <Signup isOpen={signupIsOpen} onClose={closeSignupModal} setUser={setUser} />
          </>
        )}

        <ProductCatalog addToCart={addToCart} /> {/* Pass addToCart function to ProductCatalog */}
        <Divider />
        <ReviewForm onSubmit={handleReviewSubmit} />
        <Divider />
        <h2>Customer Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index}>
            <p>
              <strong>{review.user}</strong>: {review.text}
            </p>
            <p>
              <em>{review.timestamp}</em>
            </p>
          </div>
        ))}
      </>
    </ChakraProvider>
  );
}

export default App;
