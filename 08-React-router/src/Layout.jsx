import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
// very important -OUTLET
import { Outlet } from "react-router-dom";



function Layout() {
  return (
    <>
      {/* to pass components dynamically we use outlet - it will use the layout as a base and it will keep header and footer same and wherever we will use outlet there we can change tabs  there*/}

      <Header />

      <Outlet /> 

      <Footer />
    </>
  );
}

export default Layout;
