import React, { useEffect, useState } from "react";
import styles from "./Blog.module.css";
import Carousel from "../../components/Carousel/Carousel";
import { Layout } from "../../layout/Layout";

const Project1 = () => {
  const [carouselImages, setCarouselImages] = useState([]);

  const blog = {
    title:
      "Streamlining Order Management: An Efficient Admin Panel for Enhanced Control",
    projectOverview:
      "The software project aimed to develop an admin panel that would streamline the process of maintaining orders. The key objectives were to introduce a user-friendly interface for admins, empower them to verify order validity through customizable statuses, enforce role-level restrictions for enhanced security, and provide a convenient feature for granting cashback rewards directly through the panel itself. The resulting admin panel not only achieved these goals but also exceeded expectations in terms of functionality and impact.",
    keyFeaturesAndAchievements: [
      "Customizable Order Statuses: The admin panel allowed different admins to change order statuses based on their respective roles and responsibilities. This feature enabled a systematic workflow, ensuring that each order went through the necessary verification process, keeping stakeholders informed about the progress and maintaining transparency throughout.",
      "Role-Level Restrictions: To enhance security and maintain data integrity, the admin panel implemented role-level restrictions. This meant that admins had access only to the specific functionalities and information relevant to their roles. By enforcing these restrictions, the panel minimized the risk of unauthorized access and improved overall data protection.",
      "Convenient Cashback Management: One standout feature of the admin panel was its ability to facilitate cashback rewards directly through the interface. Admins could easily allocate cashbacks to eligible orders, fostering customer loyalty and increasing the likelihood of repeat purchases. This streamlined approach eliminated the need for manual cashback calculations, saving time and reducing the chances of errors.",
    ],
    impact:
      "The introduction of this admin panel brought about a significant impact on order management and overall operational efficiency. The key benefits include: The admin panel simplified the process of maintaining orders, from verification to tracking. Admins could easily change statuses, ensuring that orders progressed smoothly and efficiently. This streamlined approach reduced delays, improved customer satisfaction, and optimized order management.   With role-level restrictions, the admin panel provided enhanced security measures. Admins could access and modify order details within their authorized scope, reducing the risk of data breaches and ensuring greater control over the system. This strengthened the overall integrity of the order management process. The cashback feature offered through the admin panel proved to be a powerful tool for customer engagement. By conveniently granting cashbacks, businesses could reward their customers, encouraging loyalty and repeat purchases. This led to improved customer satisfaction and increased revenue potential.",
    conclusion:
      "The development of this powerful panel for the Social Media Department brought about a transformative change in content management and scheduling. By providing seamless file transfer, organized scheduling, and image preservation, the panel optimized the workflow and improved collaboration between the client and the department. Furthermore, it effectively utilized server space, eliminating the need for additional file-sharing platforms.",
    contactInformation:
      "If you would like more information about this project or discuss how I can contribute to your software development needs, please feel free to reach out. I am eager to help you achieve your goals and create efficient solutions for your clients.",
    author: "Mukarram",
    image1: "/images/PROJECT_4_1.jpg",
    image2: "/images/PROJECT_4_2.jpg",
    image3: "/images/PROJECT_4_3.jpg",
    image4: "/images/PROJECT_4_4.jpg",
  };

  useEffect(() => {
    const images = [blog.image1, blog.image2, blog.image3, blog.image4];
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
