import "./App.css";
import Header from "./components/Header/Header/Header";
import DUMMY_MEALS from "./dummy-meals";
import AvailableMeals from "./components/AvailableMeals/AvailableMeals";
import ContentContainer from "./components/UI/ContentContainer/ContentContainer";
import { OrderContextProvider } from "./context/OrderContext/order-context";
import MealsContext, {
  MealsContextProvider,
} from "./context/MealsContext/MealsContext";
import Cart from "./components/UI/Cart/Cart";
function App() {
  return (
    <MealsContextProvider>
      <OrderContextProvider>
        <Cart></Cart>
        <Header />
        <ContentContainer>
          <AvailableMeals />
        </ContentContainer>
      </OrderContextProvider>
    </MealsContextProvider>
  );
}

export default App;
