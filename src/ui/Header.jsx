import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="flex text-center text-xl font-semibold text-yellow-500">
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
    </header>
  );
}

export default Header;
