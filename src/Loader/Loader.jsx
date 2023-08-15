import React from 'react';
import "./Loader.css";
import frame1 from "../../public/Images/Frame1.svg";
import frame2 from "../../public/Images/Frame2.svg";
import frame3 from "../../public/Images/Frame3.svg";

const Loader = () => {
  return (
    <div className='cont'>

       <div className='small'>
           <img src={frame1} alt="" className='frame1'/>
           <img src={frame2} alt="" className='frame2'/>
           <img src={frame3} alt="" className='frame3'/>
       </div>

    </div>
  )
}

export default Loader