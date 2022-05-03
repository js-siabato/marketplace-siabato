import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Item key={product.id} productData={product} />
      ))}
    </>
  );
};

export default ItemList;
