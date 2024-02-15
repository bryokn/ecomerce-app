import { useState } from "react";
import {
  Button,
  useColorMode,
  Stack,
  ChakraProvider,
  ColorModeScript,
  Divider,
} from "@chakra-ui/react";
import "./App.css";
import ProductCatalog from "./ProductCatalog";
import { Login, Signup } from "./AuthForms";
import UserPage from "./UserPage";
import ReviewForm from "./ReviewForm";
import FooterContent from "./FooterContent";
import NavBar from "./NavBar";


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

  const handleReviewSubmit = (reviewText, user) => {

    if (!user) {
    console.log("Review submitted:", reviewText, "User:", user);
    if (user) {
      const newReview = {
        user: user.firstName + " " + user.lastName, 
        text: reviewText,
        timestamp: new Date().toISOString(),
      };
      setReviews(prevReviews => [...prevReviews, newReview]);

    } else {
      alert("You need to log in or sign up to leave a review.");
      return;
    }

    console.log("Review submitted:", reviewText, "User:", user);

    const newReview = {
      user: user.firstName + " " + user.lastName,
      text: reviewText,
      timestamp: new Date().toISOString(),
    };

    setReviews(prevReviews => [...prevReviews, newReview]);
  };

  return (
    <ChakraProvider>
      <>
        <h1>Welcome!!</h1>
        <p>
          Our Motto is: Everyday is a weekend if you're brave enough! Cheers
        </p>

        <Stack direction="row" spacing={4}>
          <AuthButtons
            openLoginModal={openLoginModal}
            openSignupModal={openSignupModal}
          />
        </Stack>

        <Login
          isOpen={loginIsOpen}
          onClose={closeLoginModal}
          setUser={setUser}
        />
        <Signup
          isOpen={signupIsOpen}
          onClose={closeSignupModal}
          setUser={setUser}
        />

        <h2>Pick your Poison!!</h2>
        <h6>
          <i>(Not literally!!)</i>
        </h6>
        <ProductCatalog />
        <Divider />
        <ReviewForm onSubmit={handleReviewSubmit} user={user} />
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
         <FooterContent />
      </>
    </ChakraProvider>
  );
}

export default App;

