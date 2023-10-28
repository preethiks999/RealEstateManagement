import Project from "./Project";
import { sampleData } from "./data";

const Body = () => {
  return (
    <div className="text-sm flex flex wrap">
      {sampleData.map((p) => (
        <Project data={p}></Project>
      ))}
    </div>
  );
};
export default Body;
