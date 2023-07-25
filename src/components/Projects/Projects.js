import React from "react";
import Link from "next/link";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ImgLink,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { useRouter } from "next/router";

export const ClickableImg = ({ p }) => (
  <ImgLink href={p.source}>
    <Img src={p.image} />
  </ImgLink>
);

const Projects = () => {
  const router = useRouter();

  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Recent Projects..</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          return (
            <>
              <div className="container">
                <div className="row">
                  <div className="">
                    <div className="row">
                      <HeaderThree title={p.title}>{p.title}</HeaderThree>
                    </div>
                    <CardInfo className="card-info">{p.description}</CardInfo>
                    <UtilityList>
                      <ExternalLinks href={p.source}>Read More</ExternalLinks>
                    </UtilityList>
                    <Hr></Hr>
                  </div>
                  {/* <div className="col-md-3">

                  </div>
                  <div className="col-md-3">
                    <ClickableImg key={i} p={p} />
                  </div> */}
                </div>
              </div>
            </>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Projects;
