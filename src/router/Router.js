import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/Root";
import HomePage from "../pages/Home";
import FoodListPage, { foodLoader } from "../pages/FoodList";
import CheckoutPage from "../pages/Checkout";
import FoodDetailsPage from "../pages/FoodDetails";
import DeliveryStatusPage from "../pages/DeliveryStatus";
import AccountPage from "../pages/Account";
import EntertainmentPage, { entertainmentLoader } from "../pages/Entertainment";
const Router = (props) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        {
          index: true,
          path: "",
          element: <HomePage></HomePage>,
        },
        {
          path: "food",
          element: <FoodListPage></FoodListPage>,
          loader: foodLoader,
          children: [
            {
              path: ":foodId",
              element: <FoodDetailsPage></FoodDetailsPage>,
            },
          ],
        },
        { path: "checkout", element: <CheckoutPage></CheckoutPage> },
        {
          path: "delivery-status",
          element: <DeliveryStatusPage></DeliveryStatusPage>,
        },
        {
          loader: entertainmentLoader,
          path: "entertainment",
          element: <EntertainmentPage></EntertainmentPage>,
        },
        {
          path: "account",
          element: <AccountPage></AccountPage>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}>{props.children}</RouterProvider>;
};
export default Router;
