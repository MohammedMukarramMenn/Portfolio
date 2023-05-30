import React, { useEffect, useState } from "react";
import styles from "./Blog.module.css";
import Carousel from "../../components/Carousel/Carousel";
import { Layout } from "../../layout/Layout";

const Project1 = () => {
  const [carouselImages, setCarouselImages] = useState([]);

  const blog = {
    title: "Chatbot",
    projectOverview:
      "The project involved creating a user-friendly chatbot for a pharmaceutical company. The main goal was to develop a chatbot that could easily interact with the user and facilitate appointment bookings. The chatbot aimed to improve the user experience and streamline interactions with the pharmaceutical company..",
    keyFeaturesAndAchievements: [
      "Understanding Requirements: Through thorough discussions with the client, we defined the chatbot's functionalities, such as capturing user details and implementing an appointment booking system.",
      "User-Friendly Design: Utilizing React, we created a visually appealing and responsive interface that made it easy for users to interact with the chatbot.",
      "Thorough Testing: We conducted comprehensive testing, including checking individual components, ensuring different parts worked well together, and validating user acceptance. Continuous integration and deployment helped automate these processes, ensuring a reliable chatbot.",
    ],
    impact:
      "The chatbot provided a convenient way for users to interact with the pharmaceutical company. The intuitive interface and intelligent responses improved overall user satisfaction. The chatbot automated the capture of user details and responded to queries promptly. This reduced the workload on customer service personnel, allowing them to focus on more complex inquiries and provide personalized assistance.",
    conclusion:
      "Building an efficient chatbot for a pharmaceutical company was an exciting project. I successfully created a user-friendly chatbot that captured user information and facilitated appointment bookings seamlessly. This project showcases my technical skills, understanding of client requirements, and ability to develop innovative software solutions in the healthcare industry.",
    contactInformation:
      "If you would like more information about this project or discuss how I can contribute to your software development needs, please feel free to reach out. I am eager to help you achieve your goals and create efficient solutions for your clients.",
    author: "Mukarram",
    image1: "/images/PROJECT_2_1.jpg",
    image2: "/images/PROJECT_2_2.jpg",
    image3: "/images/PROJECT_2_3.jpg",
    image4: "/images/PROJECT_2_4.jpg",
    image5: "/images/PROJECT_2_5.jpg",
  };

  useEffect(() => {
    const images = [
      blog.image1,
      blog.image2,
      blog.image3,
      blog.image4,
      blog.image5,
    ];
    setCarouselImages(images.filter((image) => image !== undefined));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          {blog ? (
            <>
              <h1>{blog.title}</h1>
              {carouselImages.length > 0 && (
                <Carousel images={carouselImages} />
              )}
              <br />
              <h2>Project Overview:</h2>
              <p>{blog.projectOverview}</p>
              <br />
              <h2>Key Features and Achievements:</h2>
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
                            <span>
                              <strong>{boldText}</strong>
                              {remainingText}
                            </span>
                          </li>
                          <br />
                        </>
                      );
                    })}
                  </ul>
                ) : (
                  <p>No key features and achievements found.</p>
                )}
              </ul>
              {/* <br />
            <h2>Impact:</h2>
            <p>{blog.impact}</p> */}
              <br />
              <h2>Conclusion:</h2>
              <p>{blog.conclusion}</p>
              <br />
              <p>Author: {blog.author}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </main>
      </div>
    </>
  );
};

export default Project1;
