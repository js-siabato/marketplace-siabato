import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products as productsData } from "../../data/products";
import Loading from "../Loading";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === undefined) {
          resolve(productsData);
        } else {
          resolve(productsData.filter((product) => product.category == id));
        }
      }, 2000);
    });

    getProducts
      .then((result) => {
        setProducts(result);
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  }, [id]);

  return (
    <section class="h-screen bg-gradient-to-br to-indigo-100 p-10">
      <h1 class="text-center font-bold text-2xl text-indigo-500">
        {!id && "TODOS NUESTROS PRODUCTO"}
      </h1>

      {loading ? (
        <Loading />
      ) : (
        <div class="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
          <ItemList products={products} />
        </div>
      )}
    </section>
  );
};

export default ItemListContainer;
