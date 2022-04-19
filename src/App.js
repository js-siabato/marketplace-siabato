import "./App.css";
import CartWidget from "./components/cart/CartWidget";
import ItemListContainer from "./components/container/ItemListContainer";
import NavBar from "./components/navigation-top/NavBar";

function App() {
  return (
    <>
      <NavBar>
        <CartWidget />
      </NavBar>
      <ItemListContainer text="Hello world!..." />
    </>
  );
}

export default App;
