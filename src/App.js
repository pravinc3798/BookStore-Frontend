import { Provider } from "react-redux";
import ForgetPasswordPage from "./components/login-signup/ForgetPasswordPage";
import Login from "./components/login-signup/Login";
import LoginPage from "./components/login-signup/LoginPage";
import SignUp from "./components/login-signup/SignUp";
import BookStoreRouter from "./components/routing/BookStoreRouter";
import { store } from "./redux/Reducer";

function App() {
  return (
    <Provider store={store}>
      <BookStoreRouter />
    </Provider>
  );
}

export default App;
