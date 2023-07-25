import React, { useEffect, useState } from "react";
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
} from "./BlogStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { useRouter } from "next/router";
import Carousel from "../Carousel/Carousel";

const Blogs = ({ project }) => {
  const [carouselImages, setCarouselImages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const images = [
      project.image1,
      project.image2,
      project.image3,
      project.image4,
      project.image5,
      project.image6,
      project.image7,
    ];
    setCarouselImages(images.filter((image) => image !== undefined));
  }, []);

  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>{project.header}</SectionTitle>
      <GridContainer>
        <div className="container">
          <div className="row">
            <HeaderThree title={project.title}>Problem Statement</HeaderThree>
            <CardInfo className="card-info">
              {project.problemStatement}
            </CardInfo>
            {carouselImages.length > 0 && <Carousel images={carouselImages} />}
            <HeaderThree title={project.title}>Solution</HeaderThree>
            <CardInfo className="card-info">{project.solution}</CardInfo>
          
            <Hr></Hr>
          </div>
        </div>
      </GridContainer>
    </Section>
  );
};

export default Blogs;
