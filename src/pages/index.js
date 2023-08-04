import React, { useState, useEffect, useRef } from "react";
import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref: bgAnimationRef, inView: isBgAnimationVisible } = useInView();
  const { ref: projectsRef, inView: isProjectsVisible } = useInView();
  const { ref: technologiesRef, inView: isTechnologiesVisible } = useInView();
  const { ref: timelineRef, inView: isTimelineVisible } = useInView();

  const [showBgAnimation, setShowBgAnimation] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showTechnologies, setShowTechnologies] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);

  console.log(showProjects)

  useEffect(() => {
    setTimeout(() => {
      setShowComponents(true);
    });
  }, []);

  useEffect(() => {
    if (isBgAnimationVisible) {
      setShowBgAnimation(true);
    }
  }, [isBgAnimationVisible]);

  useEffect(() => {
    if (isProjectsVisible) {
      setShowProjects(true);
    }
  }, [isProjectsVisible]);

  useEffect(() => {
    if (isTechnologiesVisible) {
      setShowTechnologies(true);
    }
  }, [isTechnologiesVisible]);

  useEffect(() => {
    if (isTimelineVisible) {
      setShowTimeline(true);
    }
  }, [isTimelineVisible]);


  const hiddenBgStyle = {
    opacity: 0,
    filter: "blur(5px)",
    transform: "scale(2)",
    transition: "all 1s",
  };

  const showBgStyle = {
    opacity: 1,
    filter: "blur(0)",
    transform: "scale(1)",
    transition: "all 1s ease",

  };

  const hiddenProjectStyle = {
    opacity: 0,
    // filter: "blur(5px)",
    transform: "scale(0.5)",
    transition: "all 1s",
  };

  const showProjectStyle = {
    opacity: 1,
    // filter: "blur(0)",
    transform: "scale(1)",
    transition: "all 1s ease",

  };

  const hiddenRightStyle = {
    opacity: 0,
    filter: "blur(5px)",
    transform: "scale(.7)",
    // transform: "translateX(100%)",
    // transition: "all 1s ease",
  };

  const hiddenTechStyle = {
    opacity: 0,
    filter: "blur(5px)",
    transform: "translateX(-100%)",
    transition: "all 1s",
  };


  const showTechStyle = {
    opacity: 1,
    filter: "blur(0)",
    transform: "translateX(0%)",
    transition: "all 1s ease",

  };

  const hiddenTimeStyle = {
    opacity: 0,
    filter: "blur(5px)",
    transform: "translateY(100%)",
    transition: "all 1s",
  };


  const showTimeStyle = {
    opacity: 1,
    filter: "blur(0)",
    transform: "translateY(0%)",
    transition: "all 1s ease",

  };
  const [showComponents, setShowComponents] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowComponents(true);
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#ffffff",
        transition: "opacity 1s",
      }}
    >
      <Layout>
        <div
          ref={bgAnimationRef}
          style={showBgAnimation ? showBgStyle : hiddenBgStyle}
        >
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-start ">
              <BgAnimation />
              <br />
            </div>
            <div className="col-md-6">
              <Hero />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div ref={projectsRef} style={showProjects ? showProjectStyle : hiddenProjectStyle}>
          <Projects />
        </div>
        <div
          ref={technologiesRef}
          style={showTechnologies ? showTechStyle : hiddenTechStyle}
        >
          <Technologies />
        </div>
        <div ref={timelineRef} style={showTimeline ? showTimeStyle : hiddenTimeStyle}>
          <Timeline />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
