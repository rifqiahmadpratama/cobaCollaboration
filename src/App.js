import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import './App.css';

//pages
import Home from "./pages/Home";
// import SignIn from "./pages/Home";
// import SignUp from "./pages/Home";
// import Page404 from "./pages/404";

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
        {/* 
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="*" element={<Page404 />} /> */}

      </Routes>
      {/* <ToastContainer /> */}

    </>

  );
}

export default App;
