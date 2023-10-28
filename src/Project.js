import { useNavigate } from "react-router-dom";
const Project = (data) => {
  const { data: details } = data;

  const navigate = useNavigate();
  const formAddress = (addressData) => {
    return `plot no : ${addressData.plotNo} , sector : ${addressData.sector}, ${addressData.elevation}`;
  };

  const clickHandler = () => {
    navigate(`/${details.projectId}/inventories`);
  };
  return (
    <div>
      <div onClick={clickHandler} className="m-6 flex flex-wrap cursor-pointer">
        <div className="mr-2">
          <img
            src="https://source.unsplash.com/random/100x100/"
            className=""
          ></img>
        </div>
        <div>
          <h1>{details.projectName}</h1>
          <p>{details.developerName}</p>
          <p>{formAddress(details)}</p>
          <p>Phn no : {details.contact1}</p>
          <p>{`${Math.min(
            ...details.inventories.map((item) => item.price / 100000)
          )} L - ${Math.max(
            ...details.inventories.map((item) => item.price / 100000)
          )} L`}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
