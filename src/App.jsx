import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order, { loader as orderLoader } from "./features/order/Order";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter(
  [
    {
      path: "/", // This is important
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> }, // Use index: true for home route
        {
          path: "menu", // Remove leading slash
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
        { path: "cart", element: <Cart /> }, // Remove leading slash
        {
          path: "order/new", // Remove leading slash
          element: <CreateOrder />,
          action: createOrderAction,
        },
        { path: "order/:orderId", element: <Order />, loader: orderLoader }, // Remove leading slash
      ],
    },
  ],
  {
    basename: "/React-Pizza", // No trailing slash here
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
