import { createContext, useState, useContext } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  function addToCart(item, quantity) {
    if (isInCart(item.id)) {
      return setCartList(
        cartList.map((product) =>
          product.item.id == item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    }
    setCartList([...cartList, { item, quantity }]);
  }

  const isInCart = (id) => {
    return cartList.some((product) => product.item.id == id);
  };

  function deleteFromCart(id) {
    const updateCart = cartList.filter((product) => product.item.id != id);
    setCartList(updateCart);
  }

  function getTotalPrice() {
    let total = 0;
    cartList.map((product) => {
      total = total + product.item.price * product.quantity;
    });
    return total;
  }

  function getTotalItems() {
    let totalItems = 0;
    cartList.map((product) => {
      totalItems = totalItems + product.quantity;
    });
    return totalItems;
  }

  const context = {
    cartList,
    addToCart,
    deleteFromCart,
    getTotalPrice,
    getTotalItems,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
