/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
// import Card from "@mui/material/Card";
// import Checkbox from "@mui/material/Checkbox";

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDInput from "components/MDInput";
// import MDButton from "components/MDButton";

// Authentication layout components
// import CoverLayout from "layouts/authentication/components/CoverLayout";
// import React from "react";
// import Webcam from "react-webcam";

// Images
// import bgImage from "assets/images/bg-sign-up-cover.jpeg";

import React from "react";
import Webcam from "react-webcam";
// import Axios from "axios";
export default function WebcamCapture() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  console.log({ imgSrc });

  // const submitImage = () => {
  //   Axios.post("http://localhost:5000/postImages", {
  //     imagee1: imgSrc,
  //   }).then(() => {});
  // };
  const videoConstraints = {
    facingMode: { exact: "environment" },
  };
  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <button type="submit" onClick={capture}>
        Capture photo
      </button>
      {imgSrc && <img src={imgSrc} alt="cam" />}
      <button type="submit">Save image</button>
    </>
  );
}

// https://www.npmjs.com/package/react-webcam
