import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "./cartSlice";

function CartItem({ pizza }) {
  const { id, name, quantity, totalPrice } = pizza;
  const dispatcher = useDispatch();
  const handleDelete = () => {
    dispatcher(deleteItem(id));
  };
  const handleIncrease = () => {
    dispatcher(increaseItemQuantity(id));
  };
  const handleDeacrease = () => {
    dispatcher(decreaseItemQuantity(id));
  };
  return (
    <li key={id} className="py-3 sm:flex sm:items-center sm:justify-between">
      <div className="flex items-center gap-2 sm:gap-4">
        {" "}
        {/* New flex container */}
        <p className="mb-1 sm:mb-0">
          {name} ({quantity})
        </p>
        <Button type="small" event={handleIncrease}>
          &#43;
        </Button>
        <Button type="small" event={handleDeacrease}>
          &#8722;
        </Button>
      </div>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small" event={handleDelete}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
