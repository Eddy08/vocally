import React from "react";
import styles from "../styles/Home.module.css";
import { SocialIcon } from "react-social-icons";
const SocialMedia = () => {
  return (
    <>
      {" "}
      <div
        className={` max-h-scree-lg max-w-screen-lg grid grid-flow-dense grid-cols-5 place-content-center`}
      >
        <SocialIcon
          network="facebook"
          bgColor="#ffffff"
          url="https://fb.com/bhardwajharsh08"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.SearchIcon}`}
        />
        <SocialIcon
          network="twitter"
          bgColor="#ffffff"
          url="https://twitter.com/h4harshbhardwaj"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.SearchIcon}`}
        />
        <SocialIcon
          network="youtube"
          bgColor="#ffffff"
          url="https://www.youtube.com/watch?v=gmF45hVeF4s"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.SearchIcon}`}
        />
        <SocialIcon
          network="linkedin"
          bgColor="#ffffff"
          url="https://linkedin.com/in/eddy08"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.SearchIcon}`}
        />
        <SocialIcon
          network="instagram"
          bgColor="#ffffff"
          url="https://instagram.com/bhardwajharsh08"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.SearchIcon}`}
        />
      </div>
    </>
  );
};
export default SocialMedia;
