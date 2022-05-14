import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/card-detail/ItemDetailContainer";
import ItemListContainer from "./components/cards/ItemListContainer";
import Cart from "./components/cart/Cart";
import NavBar from "./components/NavBar";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
