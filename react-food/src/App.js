import "./App.css";
import Header from "./components/Header/Header/Header";
import DUMMY_MEALS from "./dummy-meals";
import AvailableMeals from "./components/AvailableMeals/AvailableMeals";
import ContentContainer from "./components/UI/ContentContainer/ContentContainer";
import { OrderContextProvider } from "./context/OrderContext/order-context";
function App() {
  return (
    <OrderContextProvider>
      <Header />
      <ContentContainer>
        <AvailableMeals meals={DUMMY_MEALS} />
      </ContentContainer>
    </OrderContextProvider>
  );
}

export default App;
