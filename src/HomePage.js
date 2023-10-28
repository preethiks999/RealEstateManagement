import { sampleData } from "./data";
import Project from "./Project";
import React from "react";

const HomePage = () => {
  const data = [
    ...sampleData,
    ...sampleData,
    ...sampleData,
    ...sampleData,
    ...sampleData,
    ...sampleData,
  ];
  return (
    <div className="grid grid-cols-auto-fit gap-x-3 gap-y-2 my-6 mx-3">
      {data.map((p, index) => (
        <Project key={index} data={p}></Project>
      ))}
    </div>
  );
};

export default HomePage;
