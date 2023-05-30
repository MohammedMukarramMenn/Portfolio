import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./Blog.module.css";
import Carousel from "../components/Carousel/Carousel";
import { Layout } from "../layout/Layout";

const Blog = () => {
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [carouselImages, setCarouselImages] = useState([]);

  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      fetch(`${process.env.API_URL}/api/blogs?slug=${slug}`)
        .then((response) => response.json())
        .then((parsed) => {
          setBlog(parsed);
          const images = [parsed.image];
          let i = 1;
          while (parsed[`image${i}`]) {
            images.push(parsed[`image${i}`]);
            i++;
          }
          setCarouselImages(images.filter((image) => image !== undefined));
        })
        .catch((error) => {
          console.error("Error fetching blog:", error);
        });
    }
  }, [slug]);

  return (
    <Layout>
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
    </Layout>
  );
};

export default Blog;
