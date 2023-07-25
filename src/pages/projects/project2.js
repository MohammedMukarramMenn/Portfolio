import React from "react";
import { Layout } from "../../layout/Layout";
import Blogs from "../../components/Blog/Blogs";

const Project2 = () => {
  return (
    <Layout>
      <Blogs
        project={{
          header: "Orders Management Panel",
          problemStatement:
            "The existing order management process lacks efficiency and effectiveness, leading to delays, security vulnerabilities, and missed opportunities for customer engagement. Admins struggle with a cumbersome interface and limited functionalities, resulting in poor order tracking, inadequate security measures, and a lack of a convenient cashback management system. These issues hinder the overall operational efficiency of the organization and negatively impact customer satisfaction and revenue potential.",
          solution:
            "Our solution addresses the challenges faced in the existing order management process. We developed an advanced admin panel using React and Node to streamline order tracking. The admin panel features a user-friendly interface with customizable order statuses, enabling admins to easily verify order validity and track their progress. This enhances efficiency, reduces delays, and improves customer satisfaction. Additionally, we implemented role-level restrictions within the admin panel, ensuring enhanced security by allowing admins to access and modify order details within their authorized scope. This mitigates the risk of data breaches and strengthens the overall integrity of the system. Furthermore, our solution includes a convenient cashback management feature directly within the admin panel, empowering businesses to reward customers and drive engagement, loyalty, and repeat purchases. By simplifying order management, enhancing security, and facilitating cashback rewards, our solution significantly improves operational efficiency, customer satisfaction, and revenue potential.",
          source: "https://example.com",
          image1: "/images/PROJECT_4_1.jpg",
          image2: "/images/PROJECT_4_2.jpg",
          image3: "/images/PROJECT_4_3.jpg",
          image4: "/images/PROJECT_4_4.jpg",
        }}
      />
    </Layout>
  );
};

export default Project2;
