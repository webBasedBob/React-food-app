import Router from "./router/Router";
import { useSelector } from "react-redux";
import Auth from "./components/Auth/Auth";
function App() {
  const authModalIsDisplayed = useSelector((context) => {
    return context.auth.displayAuthModal;
  });
  return <Router>{authModalIsDisplayed && <Auth></Auth>}</Router>;
}

export default App;
