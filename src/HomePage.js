import { sampleData } from "./data";
import Project from "./Project";
import React from "react";

const HomePage = () => {
  return (
    <div className="">
      {sampleData.map((p, index) => (
        <Project key={index} data={p}></Project>
      ))}
    </div>
  );
};

export default HomePage;