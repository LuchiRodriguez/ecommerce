import { ChevronRightIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  OrdersCard.propTypes = {
    totalPrice: PropTypes.number.isRequired,
    totalProducts: PropTypes.number.isRequired,
  };
  return (
    <div className="flex justify-between items-center border border-black p-4 w-80 rounded-lg mb-3">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">10.01.25</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">{totalPrice}€</span>
          <ChevronRightIcon className="h-4 w-4 text-black" />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
