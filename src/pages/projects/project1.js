import React from "react";
import { Layout } from "../../layout/Layout";
import Blogs from "../../components/Blog/Blogs";

const Project1 = () => {
  return (
    <Layout>
      <Blogs
        project={{
          header: "Society Management Solution",
          problemStatement:
            "Managing book-keeping tasks in society management is currently a complicated and time-consuming process. Using manual bookkeeping methods leads to inefficiencies and makes it difficult to keep track of books. This results in delayed responses and unhappy residents. The need for a simpler and more efficient solution is evident. For that I came up with a solution as follows:",
          solution:
            "To solve these problems, I have developed a Society Maintenance Management Software. This software, created using React and Node, provides an automated and centralized solution for society management. It simplifies maintenance processes, digitizes records and documents, tracks payments, generates statements automatically, and provides receipts for transactions. By using this software, society management can transition from manual processes to a streamlined digital solution. The software automates tasks such as generating statements and receipts, tracking payments, and keeping digital records. This saves time, reduces errors, and improves overall efficiency. The centralized record-keeping system ensures easy access to historical data, helping with better decision-making and efficient resource management. Overall, the Society Maintenance Management Software revolutionizes society management by eliminating manual processes and improving efficiency.",
          source: "https://example.com",
          image1: "/images/PROJECT_1_1.jpg",
          image2: "/images/PROJECT_1_2.jpg",
          image3: "/images/PROJECT_1_3.jpg",
          image4: "/images/PROJECT_1_4.jpg",
          image5: "/images/PROJECT_1_5.jpg",
          image6: "/images/PROJECT_1_6.jpg",
          image7: "/images/PROJECT_1_7.jpg",
        }}
      />
    </Layout>
  );
};

export default Project1;
