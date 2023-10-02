import React from "react";
import Club from '../../Components/Cards/Club'
import "./Home.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header/>
      <main>
        <article>
          <h2>Our Clubs</h2>
          <Club clubName="programming"/>
          <Club clubName="technical"/>
          <Club clubName="webdev"/>
          <Club clubName="design"/>
        </article>
        <article>
          <h2>Blogs</h2>
        </article>
      </main>
      <Footer/>
    </>
  )
};

export default Home;
