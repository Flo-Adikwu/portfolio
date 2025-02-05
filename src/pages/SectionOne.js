import React from "react";
import SectionsCard from "../components/Card";
import { Box } from "@mui/material";

const SectionOne = () => {
  return (
    <Box p={3}>
      <SectionsCard
        title="About me"
        content="Seasoned Frontend Engineer with a strong affinity for design and a strategic approach to problem-solving. Proficient in JavaScript and TypeScript, specializing in React, Next.js, Redux, and various web performance optimization techniques. Has a track record of building and maintaining impactful visualization tools, secure transaction solutions, and reusable components. Skilled in Git workflows, Web3, CSS (including Sass), CI/CD, and agile methodologies. Adept at collaborating with backend engineers and other cross-functional teams, to ensure technically sound designs, and enforcing visual and design integrity to deliver high-quality and diverse projects. Eager to contribute expertise, drive innovation, and optimize user experiences to corporate organizations looking to elevate front-end development initiatives."
        img="assets/images/headshot.jpeg"
      />
    </Box>
  );
};

export default SectionOne;
