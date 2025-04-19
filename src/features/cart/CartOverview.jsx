import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart.reduce((acc, order) => {
    return acc + (Number(order.totalPrice) || 0);
  }, 0);
  const totalPizzas = cart.reduce((acc, order) => {
    return acc + (Number(order.quantity) || 0);
  }, 0);
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 text-stone-300 sm:space-x-6">
        <span>{`${totalPizzas} pizzas`}</span>
        <span>({total}$)</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
