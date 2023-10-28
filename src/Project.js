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

  const formAddress = (addressData) => {
    return `plot no : ${addressData.plotNo} , sector : ${addressData.sector}, ${addressData.elevation}`;
  };

  const clickHandler = () => {
    navigate(`/${details.projectId}/inventories`);
  };
  return (
    <div
      onClick={clickHandler}
      className="flex cursor-pointer border border-black rounded-lg"
    >
      <img
        src="https://source.unsplash.com/random/100x100/"
        className="mr-2 rounded-s-lg"
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
