import React from "react";
import { Layout } from "../../layout/Layout";
import Blogs from "../../components/Blog/Blogs";

const Project3 = () => {
  return (
    <Layout>
      <Blogs 
        project={{
          header: "Social Media Management",
          problemStatement:
            "The Social Media Department is faced with the challenge of managing numerous files and images, which has led to a complicated workflow. The client requires a solution that simplifies file transfer, streamlines content management and scheduling, and ensures the preservation of image resolution. Additionally, the client wants to optimize storage utilization and eliminate the need for external file-sharing platforms.",
          solution:
            "I developed a panel using React and NodeJS to address the above issues. The panel streamlines file transfer, enabled organized scheduling, preserved image resolution, and optimized storage utilization. It simplified file transfer through efficient mechanisms, saving time and reducing errors. The organized scheduling feature allowed the department to plan and schedule social media content in advance, ensuring a consistent presence and better content distribution. The panel also prioritized image preservation, maintaining high-quality visuals for captivating social media posts. Furthermore, it optimized storage utilization, eliminating the need for additional file-sharing platforms and simplifying the system architecture. Overall, the panel brought transformative improvements in content management, scheduling, and collaboration within the Social Media Department. ",
          source: "https://example.com",
          image1: "/images/PROJECT_3_1.jpg",
          image2: "/images/PROJECT_3_2.jpg",
          image3: "/images/PROJECT_3_3.jpg",
        }}
      />
    </Layout>
  );
};

export default Project3;
