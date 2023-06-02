import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <li>
        <Link href="https://uatportfolio.vercel.app/#projects" legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="https://uatportfolio.vercel.app/#skills" legacyBehavior>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="https://uatportfolio.vercel.app/#about" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
      {/* <Link
        href="/"
        style={{ display: "flex", alignItems: "center", color: "white" }}
      >
        <span
          style={{
            marginLeft: 10,
            marginTop: 7,
            fontSize: 20,
            color: "#000000",
          }}
        >
          Mohmmed Mukarram Menn
        </span>
      </Link> */}
    </Div1>
    {/* <Div2> */}
      {/* <li>
        <a href="https://blog.vipuljha.com">
          <NavLink>Blog</NavLink>
        </a>
      </li> */}
    {/* </Div2> */}
    <Div3>
      <SocialIcons href="https://github.com/MohammedMukarramMenn">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/mohmmed-mukarram-menn-b308131b7">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/mukarram_menn/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://www.twitter.com/lordarcadius">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;
