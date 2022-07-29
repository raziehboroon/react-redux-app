import "./App.css";
import Counter from "./components/Counter";
import Number from "./components/Number";
import { Provider } from "react-redux";
import store from "./redux/store";
import Users from "./components/Users";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <Number />
        <Users />
      </div>
    </Provider>
  );
}

export default App;
