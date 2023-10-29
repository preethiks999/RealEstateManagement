import { useState } from "react";
import react from "react";
const Search = (props)=>{
    var index = 2;
    const searchHandler = (event)=>{
        setSearchSociety(event.target.value)   
       props.eventHandler(event.target.value)
    }

    const handleFlatChange = (event)=>{        
       setSelectedFlat(event.target.value)
       props.flatsEventHandler(event.target.value)
    }

     console.log(props.flats)
    const [selectedFlat,setSelectedFlat] = useState("");
    const [searchSociety,setSearchSociety] = useState("");
   return (<div className="flex">
   <div className="m-4 p-4">
     {/* <label> Locality </label>
     <input
       type="text"
       className="border border-solid border-black cursor-pointer"
       value={searchLocality}
     ></input> */}
     {/* <label> Society </label> */}
     <input
       type="text"
       className="focus:outline shadow-lg mx-2 h-12 w-96 rounded-lg cursor-pointer px-2 hover:outline outline-blue-300 bg-gray-100"
       value={searchSociety}
       onChange={searchHandler}
       placeholder="Search for Project"
     ></input>
     {/* <label> Flat </label> */}
     <select
       name="flats"
       id="flats"
       className="shadow-lg mx-2 h-12 pl-1 w-48 rounded-lg  hover:border border-blue-300 bg-gray-100"
       value={selectedFlat}
       onChange={handleFlatChange}
     >      
     <option value="1">Select Flat</option>  
     {
        props.flats.map((x,index)=>(           
        <option value={x.index}>{x.value}</option>        
        ))
     }
       
     </select> 
   </div>
 </div>)
}

export default Search;