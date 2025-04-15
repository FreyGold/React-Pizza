import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((item) => (
        <MenuItem pizza={item} key={item.id} />
      ))}
    </ul>
  );
}

export const loader = async function () {
  const menu = await getMenu();
  return menu;
};

export default Menu;
