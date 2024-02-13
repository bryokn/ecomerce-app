import "./App.css";
import ProductCatalog from "./ProductCatalog";

function App() {
  return (
    <>
      <h1>Welcome to the Cocktail Bar!</h1>
      <div className="login-signup">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
      <h2>Pick your Poison!!</h2>
      <h5>(Not literally!!)</h5>
      <ProductCatalog />
    </>
  );
}

export default App;
