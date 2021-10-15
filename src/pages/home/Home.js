import React from "react";
import "./Home.css";
import Container from "../../components/Container";
import Display from "../../components/Display";
import Header from "../../components/Header";
import Outfit from "../../components/Outfit";
import Footer from "../../components/Footer";
import Connect from "../../components/Connect";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Display />
      <Container />
      <Outfit />
      <Connect />
      <Footer />
    </div>
  );
};

export default Home;
