import React from "react";

import i1 from "./img/img1.png";
import i2 from "./img/img2.jpg";
import i3 from "./img/img3.jpg";
import Img from "./Img";
import data from "./frontendData";


const Sildeing = () => {
  const arr = [i1, i2, i3];
    
    return (

        arr.map(nextImg)
        
        )
  // setTimeout(sildeing(),3000);
};

const nextImg = (ele)=>{
    
    return <Img url={ele}/>
}

export default Sildeing ;