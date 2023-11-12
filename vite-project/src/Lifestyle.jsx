import { useEffect, useState } from "react";

function Lifecycle() {


  const [akshit, setAkshit] = useState("infinity");
  //  
  return (
    <div>
      
      <input type="text" value={akshit} onChange={setAkshit("aksh")}></input>
      
    </div>
  );
}

export default Lifecycle;
