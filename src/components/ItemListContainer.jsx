import { useEffect, useState } from "react";
import { products as productsData } from "../data/products";
// import Item from "./Item";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsData);
      }, 2000);
    });

    getProducts
      .then((result) => {
        setProductsState(result);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <section class="h-screen bg-gradient-to-br to-indigo-100 p-10">
      <h1 class="text-center font-bold text-2xl text-indigo-500">
        Productos más vistos por nuestro clientes
      </h1>

      <div class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
        {/* {products.map((product) => (
          <Item key={product.id} productData={product} />
        ))} */}
        <ItemList products={productsState} />
      </div>
    </section>
  );
};

export default ItemListContainer;
