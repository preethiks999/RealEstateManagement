import { useParams } from "react-router-dom";
import { sampleData } from "./data";
import Inventory from "./Inventory";
import React, { useState, useEffect } from "react";
const Inventories = () => {
  const { id } = useParams();
  const project = sampleData.filter((x) => x.projectId == id)[0];
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    const allPrices = project.inventories.map((item) => item.price / 100000);
    setMaxPrice(Math.max(...allPrices));
    setMinPrice(Math.min(...allPrices));
  }, []);
  const formAddress = (project) => {
    return `plot no : ${project.plotNo} , sector : ${project.sector}, ${project.elevation}`;
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border m-2 border-b-2 shadow-lg p-4 text-center w-6/12">
        <div className="flex flex-wrap">
          <img
            src="https://housing-images.n7net.in/4f2250e8/d451e2b1846778325148e2af061719b7/v0/large/vandemataram_mahadev_lily-maninagar_ahmedabad-ahmedabad-vyapti_vandemataram_group.jpeg"
            className="w-[300px] items-center"
            alt=""
          ></img>
          <div className="m-2 p-4 text-left">
            <h2 className="font-bold text-lg">{project.projectName}</h2>
            <p>{project.developerName}</p>
            <p>{formAddress(project)}</p>
            <p>{project.contact1}</p>
            <p>{`${minPrice} L - ${maxPrice} L`}</p>
          </div>
        </div>

        <div>
          {project.inventories.map((i) => {
            return <Inventory inventory={i}></Inventory>;
          })}
        </div>
      </div>
    </div>
  );
};
export default Inventories;
