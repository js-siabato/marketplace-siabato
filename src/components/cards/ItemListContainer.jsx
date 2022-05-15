import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts();
  }, [id]);

  const getProducts = () => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    getDocs(productsCollection).then((snapshot) => {
      const productsData = snapshot.docs.map((product) => ({
        id: product.id,
        ...product.data(),
      }));
      if (id === undefined) {
        setProducts(productsData);
      } else {
        setProducts(productsData.filter((products) => products.category == id));
      }
    });
    setLoading(false);
  };

  return (
    <section className="h-screen bg-gradient-to-br to-indigo-100 p-10">
      <h1 className="text-center font-bold text-2xl text-indigo-500">
        {!id && "TODOS NUESTROS PRODUCTO"}
      </h1>

      {loading ? (
        <Loading />
      ) : (
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
          <ItemList products={products} />
        </div>
      )}
    </section>
  );
};

export default ItemListContainer;
