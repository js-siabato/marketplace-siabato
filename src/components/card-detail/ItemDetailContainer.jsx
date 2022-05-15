import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProductDetail();
  }, [product]);

  const getProductDetail = () => {
    const db = getFirestore();
    const productDoc = doc(db, "products", id);
    getDoc(productDoc).then((result) => {
      if (result.exists()) {
        setProduct({ id: result.id, ...result.data() });
      }
    });
    setLoading(false);
  };

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
