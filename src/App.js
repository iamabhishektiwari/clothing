import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/Homepage";

const Hatpage = () => {
  return (
    <div>
      <h1>Hatspage</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={Hatpage} />
      </Switch>
    </div>
  );
}

export default App;
