import React from "react";
import styles from "../styles/Home.module.css";
import { SocialIcon } from "react-social-icons";
const SocialMedia = () => {
  return (
    <>
      {" "}
      <div className={styles.grid}>
        <SocialIcon
          network="facebook"
          bgColor="#ffffff"
          url="https://fb.com/bhardwajharsh08"
        />
        <SocialIcon
          network="twitter"
          bgColor="#ffffff"
          url="https://twitter.com/h4harshbhardwaj"
        />
        <SocialIcon
          network="youtube"
          bgColor="#ffffff"
          url="https://www.youtube.com/watch?v=gmF45hVeF4s"
        />
        <SocialIcon
          network="linkedin"
          bgColor="#ffffff"
          url="https://linkedin.com/in/eddy08"
        />
        <SocialIcon
          network="instagram"
          bgColor="#ffffff"
          url="https://instagram.com/bhardwajharsh08"
        />
      </div>
    </>
  );
};
export default SocialMedia;
