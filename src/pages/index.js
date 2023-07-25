import React, { useState, useEffect } from "react";
import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  const [showComponents, setShowComponents] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowComponents(true);
    },);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#ffffff",
        opacity: showComponents ? 1 : 0,
        transition: "opacity 1s",
      }}
    >
      <Layout>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-start">
            <BgAnimation />
            <br />
          </div>
          <div className="col-md-6">
            <Hero />
          </div>
        </div>
        <Projects />
        <Technologies />
        <Timeline />
      </Layout>
    </div>
  );
};

export default Home;
