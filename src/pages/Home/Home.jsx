import React from "react";
import Layout from "../../layouts/Layout.jsx";
import BannerOne from "../../components/Banner/BannerOne.jsx";

import Contact from "../../components/Contact/Contact.jsx";

import Intrest from "../../components/Intrest/Intrest.jsx";
import Projects from "../../components/Projects/Projects.jsx";


import Profile from "../../components/Profile/Profile.jsx";
import BannerTwo from "../../components/Banner/BannerTwo.jsx";


const Home = () => {
  return (
    <Layout   className="black-background">
      <BannerOne />
      <BannerTwo />
      <Intrest/>
      <Projects/>
      <Profile/>     
      <Contact />
    </Layout>
  );
};

export default Home;
