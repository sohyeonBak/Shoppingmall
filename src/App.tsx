import {BrowserRouter, Switch, Route} from "react-router-dom"
import Header from "./component/header/header"
import Home from "./component/home/home"
import Login from "./component/login/login";
import Signup from "./component/signup/signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/login' >
          <Login />
        </Route>
        <Route path='/signup' >
          <Signup />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
