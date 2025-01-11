import { XMarkIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDelete } = props;
  let renderXMarkIcon;
  if (handleDelete) {
    renderXMarkIcon = (
      <XMarkIcon
        className="h-4 w-4 text-black cursor-pointer"
        onClick={() => handleDelete(id)}
      ></XMarkIcon>
    );
  }
  OrderCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    handleDelete: PropTypes.func,
  };
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light max-w-[140px]">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}€</p>
        {renderXMarkIcon}
      </div>
    </div>
  );
};

export default OrderCard;
