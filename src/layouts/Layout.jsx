import React from "react";

import Footer from "../components/Footers/Footer";

import Preloader from "../components/Preloader/Preloader";
import ScrollTop from "../components/ScrollTop/ScrollTop";

const Layout = ({ children, className, mainClassName }) => {
  return (
    <>
      <Preloader />
      <ScrollTop />

      <div className={className}>
        
        <main className={mainClassName}>{children}</main>

        
        <Footer />
       
      </div>
    </>
  );
};

export default Layout;
