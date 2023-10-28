import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");  
  return (
    <div className="flex justify-between bg-blue-400 shadow-lg">
      <div className="logo-container">
        <img  src="https://source.unsplash.com/random/100x100/"></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
        
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"> <Link to="/about">  About </Link></li>
          <li className="px-4"> <Link to="/contact"> Contact </Link></li>          
          <li className="px-4">
            <button
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
