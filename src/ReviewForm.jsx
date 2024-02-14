import { useState } from "react";
import { Button, Textarea, VStack, Heading } from "@chakra-ui/react";

function ReviewForm({ onSubmit }) {
  const [reviewText, setReviewText] = useState("");

  const handleChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(reviewText);
    setReviewText(""); 
  };

  return (
    <VStack align="flex-start" spacing={4}>
      <Heading size="md">We Value Your Feedback</Heading>
      <Textarea
        placeholder="Write your review here..."
        value={reviewText}
        onChange={handleChange}
      />
      <Button colorScheme="teal" onClick={handleSubmit}>
        Submit Review
      </Button>
    </VStack>
  );
}

export default ReviewForm;
