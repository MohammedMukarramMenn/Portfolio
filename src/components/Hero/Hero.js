import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, LinkItem } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          I'm <b>Mohmmed Mukarram Menn</b>, and I'm a{" "}
          <b>Full-Stack Web Developer</b>. I'm passionate about crafting{" "}
          <b>awesome applications and designs for the web</b>. If you have a
          cool idea in mind, let's team up and bring it to life! Let's make
          something amazing together!  
          {/* <LinkItem href="#footer">Lets Connect!</LinkItem> */}
        </SectionText>
        <br />
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.open("/files/resume.pdf", "_blank").focus();

          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
