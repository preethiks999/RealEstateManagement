import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Project = ({ data: details }) => {
  const navigate = useNavigate();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    const allPrices = details.inventories.map((item) => item.price / 100000);
    setMaxPrice(Math.max(...allPrices));
    setMinPrice(Math.min(...allPrices));
  }, []);
  
  const clickHandler = () => {
    navigate(`/${details.projectId}/inventories`);
  };
  return (
    <div
      onClick={clickHandler}
      className="flex shadow-lg cursor-pointer m-2 p-2 w-[300px] bg-gray-200 hover:bg-gray-300 rounded-lg"
    >
      <img 
        src="https://housing-images.n7net.in/4f2250e8/d451e2b1846778325148e2af061719b7/v0/large/vandemataram_mahadev_lily-maninagar_ahmedabad-ahmedabad-vyapti_vandemataram_group.jpeg"
        className="mr-2 rounded-s-lg w-[100px]"
        alt=""
      ></img>
      <div>
        <h2 className="font-bold text-lg">{details.projectName}</h2>
        <p>{details.developerName}</p>
        {/* <p>{formAddress(details)}</p> */}
        <p>{details.contact1}</p>
        <p>{`${minPrice} L - ${maxPrice} L`}</p>
      </div>
    </div>
  );
};

export default Project;
