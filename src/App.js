import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import './App.css';

//pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import RecipeDetail from "./pages/RecipeDetail";
import PageNotFound from "./pages/PageNotFound";

//modules
// import { ToastContainer } from "react-toastify";

function App() {
  // let location = useLocation();
  return (

    <>
      {/* {location.pathname === "/sign-in" || location.pathname === "/sign-up" ? null : <NavigationBar />} */}

      <Routes>

        <Route path="/" element={<Navigate to="/home" replace="true" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="*" element={<PageNotFound />} />

      </Routes>
      {/* <ToastContainer /> */}
    </>

  );
}

export default App;
