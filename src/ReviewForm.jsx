import { useState } from "react";
import { Button, Textarea, VStack, Heading, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from "@chakra-ui/react";

function ReviewForm({ onSubmit, user }) {
  const [reviewText, setReviewText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(reviewText, user);
    setIsOpen(true);
    setReviewText("");
  };

  const onClose = () => setIsOpen(false);

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

      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Your Review has been submitted!
            </AlertDialogHeader>

            <AlertDialogFooter>
              <Button colorScheme="teal" onClick={onClose} ml={3}>
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </VStack>
  );
}

export default ReviewForm;
