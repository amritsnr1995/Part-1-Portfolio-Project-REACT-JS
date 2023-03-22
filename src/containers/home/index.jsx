import React from "react";
// simple animation from react libraries.
import { Animate } from "react-simple-animate";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./style.scss";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello , I am Amrit
          <br />
          FrontEnd Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: "translateY(600px" }}
        end={{ transform: "translatex(0px" }}
      >
        <div className="home__contacts">
          <div className="home__contacts__buttons">
            <button>Hire me</button>
            <a href="#">Download Resume</a>
          </div>
          <div className="home__contacts__socials">
            <FaFacebook size={32} />
            <FaLinkedin size={32} />
            <FaInstagram size={32} />
            <FaTwitter size={32} />
          </div>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
