import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContextProvider";

const Item = ({ productData }) => {
  const { addToCart } = useCartContext();

  return (
    <div>
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/item/${productData.id}`}>
          <img
            className="rounded-t-lg p-8"
            src={require(`../../assets/img/${productData.image}`)}
            alt={productData.name}
          />
        </Link>
        <div className="px-5 pb-5">
          <Link to={`/item/${productData.id}`}>
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
              {productData.name}
            </h3>
          </Link>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${productData.price}
            </span>
            <button
            onClick={() => addToCart(productData, 1)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
