import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [itemState, setItemState] = useState();

  useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  });

  return (
    <div class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <ItemDetail />
    </div>
  );
};

export default ItemDetailContainer;
