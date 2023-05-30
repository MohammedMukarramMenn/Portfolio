import React, { useEffect, useState } from "react";
import styles from "./Blog.module.css";
import Carousel from "../../components/Carousel/Carousel";
import { Layout } from "../../layout/Layout";

const Project1 = () => {
  const [carouselImages, setCarouselImages] = useState([]);

  const blog = {
    title:
      "Streamlining Social Media Management: A Powerful Panel for the Social Media ",
    projectOverview:
      "The software project in question aimed to create an efficient panel that would simplify the workflow of a Social Media Department. The client, faced with the challenge of managing numerous files and images, required a solution that would allow seamless file transfer, enable organized scheduling, and ensure the preservation of image resolution. The resulting panel not only fulfilled these requirements but also exceeded expectations in terms of features and impact.",
    keyFeaturesAndAchievements: [
      "Streamlined File Transfer: The panel provided an intuitive interface for clients to upload files and pictures, eliminating the need for cumbersome email exchanges. This streamlined process reduced the chances of miscommunication and ensured that the Social Media Department had all the necessary content readily available.",
      "Scheduled Content Management: With the panel's scheduling feature, the client could specify when each image, caption, and tag combination was to be uploaded. This feature allowed for precise content planning, ensuring that posts went live at the optimal times for maximum engagement.",
      "Image Preservation: Maintaining image quality is crucial for successful social media campaigns. The panel intelligently handled image uploads, ensuring that the resolution remained intact, thus enhancing the overall visual appeal of the posts. This saved time for the Social Media Department, eliminating the need for additional image processing.",
      "Storage Utilization: The panel effectively utilized server space, acting as a centralized hub for file storage. This eliminated the need for separate file-sharing platforms and enhanced the efficiency of accessing and retrieving content for future use.",
    ],
    impact:
      "By providing a unified platform for content sharing and scheduling, the panel improved collaboration between the client and the Social Media Department. Real-time access to files and clear communication reduced errors and ensured that the right content was published at the right time. The streamlined process facilitated by the panel saved significant time for the Social Media Department. Manual tasks such as file transfer and image processing were automated, allowing team members to focus on other critical aspects of social media management. This optimization resulted in increased productivity and improved overall performance. With the panel's image preservation capabilities, the Social Media Department was able to maintain high-quality visuals throughout their campaigns. This led to higher engagement rates and enhanced brand perception on social media platforms.",
    conclusion:
      "The development of this powerful panel for the Social Media Department brought about a transformative change in content management and scheduling. By providing seamless file transfer, organized scheduling, and image preservation, the panel optimized the workflow and improved collaboration between the client and the department. Furthermore, it effectively utilized server space, eliminating the need for additional file-sharing platforms.",
    contactInformation:
      "If you would like more information about this project or discuss how I can contribute to your software development needs, please feel free to reach out. I am eager to help you achieve your goals and create efficient solutions for your clients.",
    author: "Mukarram",
    image1: "/images/PROJECT_3_1.jpg",
    image2: "/images/PROJECT_3_2.jpg",
    image3: "/images/PROJECT_3_3.jpg",
    image4: "/images/PROJECT_3_4.jpg",
  };

  useEffect(() => {
    const images = [
      blog.image1,
      blog.image2,
      blog.image3,
      blog.image4,
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
