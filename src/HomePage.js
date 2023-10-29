import { sampleData } from "./data";
import Project from "./Project";
import React, { useState, useEffect } from "react";
import Search from "./Search";

const HomePage = () => {
  // const [minPrice, setMinPrice] = useState(0);
  // const [maxPrice, setMaxPrice] = useState(0);

  
  const data = [
    ...sampleData,
    ...sampleData,
    ...sampleData,
    ...sampleData,
    ...sampleData,
    ...sampleData,
  ];
  const inventories = data.map((x) => x.inventories);
  const listOfInventories = [].concat(...inventories);

  const allPrices = listOfInventories.map((item) => item.price / 100000);
  const minPrice =  Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);

  // useEffect(() => {
  //   console.log(data.map((x) => x.inventories));
  //   const allPrices = listOfInventories.map((item) => item.price / 100000);
  //   setMaxPrice(Math.max(...allPrices));
  //   setMinPrice(Math.min(...allPrices));
  // }, []);

  const [filtered, setFilteredProjects] = useState(data);

  const flats = listOfInventories.map((x) => {
    return { name: x.inventoryName, id: x.inventoryId };
  });
  const filteredFlats = [...new Set(flats.map((item) => item.name))];
  const filteredFlatsDropdownArray = filteredFlats.map((value, index) => ({
    index: index + 2,
    value,
  }));

  searchHandler = (value) => {
    setFilteredProjects(
      data.filter((x) =>
        x.projectName.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  searchFlatsHandler = (value) => {
    if (value > 1) {
      const name = result.filter((x) => x.index == value)[0].value;
      setFilteredProjects(
        data.filter(
          (x) =>
            x.inventories.filter((i) => i.inventoryName.includes(name)).length >
            0
        )
      );
    } else {
      setFilteredProjects(data);
    }
  };

  searchPriceHandler = (event)=>{
     console.log(event)
     const min = event[0];
     const max = event[1];
     setFilteredProjects(data.filter(x=>x.inventories.filter(i=>i.price/100000 >= min && i.price/100000 <= max).length > 0))
  }

  return (
    <>
      <Search
        minMaxRange = {[minPrice, maxPrice]}
        eventHandler={searchHandler}
        flats={filteredFlatsDropdownArray}
        flatsEventHandler={searchFlatsHandler}
        filterPriceHandler = {searchPriceHandler}
      ></Search>
      <div className="grid grid-cols-auto-fit gap-x-12 gap-y-4 my-6 mx-3">
        {filtered.map((p, index) => (
          <Project key={index} data={p}></Project>
        ))}
      </div>
    </>
  );
};

export default HomePage;
