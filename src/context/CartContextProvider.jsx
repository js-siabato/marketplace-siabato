import { createContext, useState, useContext } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  function addToCart(item, quantity) {
    if (isInCart(item.id)) {
      return setCartList(
        cartList.map((product) =>
          product.id == item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    }
    setCartList([...cartList, { ...item, quantity }]);
  }

  const isInCart = (id) => {
    return cartList.some((item) => item.id == id);
  };

  const context = {
    addToCart,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
