import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";

function Cart() {
  const orders = useSelector((state) => state.cart.cart);
  // const cart = fakeCart;
  const user = useSelector((state) => state.user.username);
  const dispatcher = useDispatch();
  const handleClear = () => {
    dispatcher(clearCart());
  };
  return (
    <div>
      <LinkButton to="/menu">&larr; Back to Menu</LinkButton>

      <h2>Your cart, {user}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {orders.map((item) => {
          if (!item) return null;
          return <CartItem key={item.id} pizza={item} />;
        })}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" event={handleClear}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
