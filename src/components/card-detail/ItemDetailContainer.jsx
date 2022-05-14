import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import { products as productsData } from "../../data/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProductDetail = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsData.find((product) => product.id == id));
      }, 2000);
    });

    getProductDetail
      .then((result) => {
        setProduct(result);
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  }, [id]);

  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      {loading ? (
        <Loading />
      ) : (
        <ItemDetail key={product.id} product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
