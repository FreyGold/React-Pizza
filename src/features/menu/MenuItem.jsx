import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem } from "../cart/cartSlice";
import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatcher = useDispatch();
  const menu = useLoaderData();

  const handleAdd = async () => {
    const item = menu.find((item) => item.id === id);
    dispatcher(addItem({ ...item }));
  };
  return (
    <li className="my-2 flex gap-4">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-600">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-end justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          <Button
            type={pizza.soldOut ? "secondary" : "small"}
            event={handleAdd}
          >
            {pizza.soldOut ? "Sold Out" : "Add to cart"}
          </Button>
        </div>
      </div>
    </li>
  );
}

export const loader = async function () {
  const menu = await getMenu();
  return menu;
};

export default MenuItem;
