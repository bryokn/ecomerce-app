import { Button } from "@chakra-ui/react";
import ProductCatalog from "./ProductCatalog";

function App() {
  return (
    <>
      <h1>Welcome to the Cocktail Bar!</h1>
      <div className="login-signup">
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </div>
      <h2>Pick your Poison!!</h2>
      <h5>(Not literally!!)</h5>
      <ProductCatalog />
    </>
  );
}

export default App;
