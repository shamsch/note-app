import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
//hooks
import { useAuthContext } from "./hooks/useAuthContext";
// pages & components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";

function App() {
  const { check_log_status, user } = useAuthContext();
  //console.log(check_log_status)
  return (
    <div className="App">
      {check_log_status && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/*If not logged in redirect to login page, but other wise let them go to home page */}
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login"></Navigate>}
            />
            {/*If logged in we let them go to home page, but other wise redirect to login page*/}
            <Route
              path="/login"
              element={user ? <Navigate to="/"></Navigate> : <Login />}
            />
            {/*If signed up aka logged in we let them go to home page, but other wise redirect to sign up page*/}
            <Route
              path="/signup"
              element={user ? <Navigate to="/"></Navigate> : <Signup />}
            ></Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
