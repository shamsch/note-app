import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
//hooks
import { useAuthContext } from "./hooks/useAuthContext";
// pages & components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";


function App() {
  const { check_log_status,user } = useAuthContext();
  //console.log(check_log_status)
  return (
    <div className="App">
      {check_log_status && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {/*If not logged in redirect to login page, but other wise let them go to home page */}
              {!user && <Redirect to='/login'></Redirect>}
              {user && <Home/>}
            </Route>
            <Route path="/login">
              {/*If logged in we let them go to home page, but other wise redirect to login page*/}
              {user && <Redirect to='/'></Redirect>}
              {!user && <Login/>}
            </Route>
            <Route path="/signup">
              {/*If signed up aka logged in we let them go to home page, but other wise redirect to sign up page*/}
              {user && <Redirect to='/'></Redirect>}
              {!user && <Signup/>}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
