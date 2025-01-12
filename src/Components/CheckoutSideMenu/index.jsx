import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import "./styles.css";

const CheckoutSideMenu = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const context = useContext(ShoppingCartContext);
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: "10.01.25",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.closeCheckoutSideMenu();
  };
  const finalPrice = totalPrice(context.cartProducts);
  useEffect(() => {
    if (finalPrice === 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [finalPrice]);
  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}
          ></XMarkIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll grow">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="p-6 border-t-2">
        <p className="flex justify-between items-center">
          <span className="font-light">Total:</span>
          <span className="font-medium text-xl">{finalPrice.toFixed(2)}€</span>
        </p>
        <Link to={`/my-orders/last`}>
          {isDisabled ? (
            <button
              className="w-full bg-black py-3 text-white rounded-lg mt-3"
              onClick={() => handleCheckout()}
            >
              Checkout
            </button>
          ) : (
            ""
          )}
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
