import React, { useEffect, useState } from "react";
import styles from "./Blog.module.css";
import Carousel from "../../components/Carousel/Carousel";
import { Layout } from "../../layout/Layout";

const Project1 = () => {
  const [carouselImages, setCarouselImages] = useState([]);

  const blog = {
    title:
      "Society Maintenance Management Software: Simplifying Maintenance Operations",
    projectOverview:
      "In the past, society management relied on manual bookkeeping and time-consuming processes to manage maintenance tasks. To simplify operations, I developed a Society Maintenance Management Software that automates and centralizes these processes, resulting in improved efficiency and enhanced management & resident satisfaction. The key Features of this application are: ",
    keyFeaturesAndAchievements: [
      "Streamlined Maintenance Processes",
      "Digital Records and Documentation",
      "Payment Tracking and Reporting",
      "Automated Statement Generation",
      "Receipt Generation",
    ],
    impact:
      "Previously, society management relied on manual bookkeeping, which presented several challenges. Keeping track of maintenance tasks, payment records, and documentation in physical books was time-consuming and prone to errors. The Society Maintenance Management Software I developed simplified these processes, leading to significant improvements. Society management now benefits from streamlined maintenance operations, accurate payment tracking, reduced paperwork, and enhanced financial transparency.",
    conclusion:
      "Through the implementation of the Society Maintenance Management Software, society management has transitioned from outdated manual processes to a simplified, digital solution. The software's key features, including automated statement and receipt generation, payment tracking, and centralized record-keeping, have empowered society management to operate more efficiently and provide an enhanced living experience for residents.",
    contactInformation:
      "If you would like more information about this project or discuss how I can contribute to your software development needs, please feel free to reach out. I am eager to help you achieve your goals and create efficient solutions for your clients.",
    author: "Mukarram",
    image1: "/images/PROJECT_1_1.jpg",
    image2: "/images/PROJECT_1_2.jpg",
    image3: "/images/PROJECT_1_3.jpg",
    image4: "/images/PROJECT_1_4.jpg",
    image5: "/images/PROJECT_1_5.jpg",
    image6: "/images/PROJECT_1_6.jpg",
    image7: "/images/PROJECT_1_7.jpg",
  };

  useEffect(() => {
    const images = [
      blog.image1,
      blog.image2,
      blog.image3,
      blog.image4,
      blog.image5,
      blog.image6,
      blog.image7,
    ];
    setCarouselImages(images.filter((image) => image !== undefined));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.images}>
        {carouselImages.length > 0 && <Carousel images={carouselImages} />}
      </div>
      <div className={styles.content}>
        {blog ? (
          <>
            <h1>{blog.title}</h1>
            <h2>Project Overview:</h2>
            <p>{blog.projectOverview}</p>
            {/* <h2>Key Features and Achievements:</h2> */}
            <ul>
              {blog.keyFeaturesAndAchievements &&
              blog.keyFeaturesAndAchievements.length > 0 ? (
                <ul>
                  {blog.keyFeaturesAndAchievements.map((feature, index) => {
                    const colonIndex = feature.indexOf(":");
                    const boldText = feature.slice(0, colonIndex + 1);
                    const remainingText = feature.slice(colonIndex + 1);

                    return (
                      <>
                        <li key={index}>
                          <span className={styles}>
                            <strong>{boldText}</strong>
                            {remainingText}
                          </span>
                        </li>
                        {/* <br /> */}
                      </>
                    );
                  })}
                </ul>
              ) : (
                <p>No key features and achievements found.</p>
              )}
            </ul>
            <h2>Conclusion:</h2>
            <p>{blog.conclusion}</p>
            <p>Author: {blog.author}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Project1;
