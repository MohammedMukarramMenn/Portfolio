import React from "react";

const BackgroundAnimation = () => (
  <>
    <style jsx>{`
      @media (max-width: 576px) {
        img {
          padding-bottom: 10px;
          width: 60%; /* Adjust the width as per your requirement */
        }
      }

      img:hover {
        content: url("/avatar-hover.jpg"); /* Replace "avatar-hover.jpg" with your desired image path */
      }
    `}</style>
    <img src="/avatar.jpg" alt="Avatar" />
  </>
);

export default BackgroundAnimation;
