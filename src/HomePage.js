 import { sampleData } from "./data";
import Project from "./Project";
import React, { useState } from "react";
import Search from "./Search";

const HomePage = () => {

  const data = [
    ...sampleData,
    ...sampleData,
    ...sampleData,
    ...sampleData,
    ...sampleData,
    ...sampleData,
  ];

  const [filtered,setFilteredProjects]  = useState(data);
  
  const inventories = data.map(x=>x.inventories);  
  const flats = [].concat(...inventories).map(x=>{return {name:x.inventoryName,id:x.inventoryId}});
  const filteredFlats = [...new Set(flats.map(item => item.name))];
  const result = filteredFlats.map((value, index) => ({
    index: index + 2,
    value,
  }));
  
  searchHandler = (value)=>{
    setFilteredProjects(data.filter(x=>x.projectName.toLowerCase().includes(value.toLowerCase())));
  }

  searchFlatsHandler = (value)=>{
    if(value>1)
    {
      const name = result.filter(x=>x.index == value)[0].value;
      setFilteredProjects(data.filter(x=>x.inventories.filter(i=>i.inventoryName.includes(name)).length>0));
    } 
    else
    {
      setFilteredProjects(data);
    }  
  }

  return (
    <>
      <Search eventHandler={searchHandler} flats = {result} flatsEventHandler = {searchFlatsHandler} ></Search>
      <div className="grid grid-cols-auto-fit gap-x-12 gap-y-4 my-6 mx-3">
        {filtered.map((p, index) => (
          <Project key={index} data={p}></Project> 
        ))}
      </div>
    </>
  );
};

export default HomePage;
