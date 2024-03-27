import React, { useState, useEffect } from "react";
import "./Home.css";
import HomeComponent from "./home/Components/Home";
import About from "./home/Components/About";
import Work from "./home/Components/Work";
import Testimonial from "./home/Components/Testimonial";
import Contact from "./home/Components/Contact";
import Footer from "./home/Components/Footer";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div class="loader">
        </div>
      ) : (
        <div className="App">
          <HomeComponent />
          <About />
          <Work />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;