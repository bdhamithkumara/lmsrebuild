import React from "react";
import { Unilogo } from "../../images";

const Adminlogin = () => {
  return (
    <div className="container mt-5">
      <div className="mx-auto justify-center">
        <div>
          <img src={Unilogo} alt="unilogo" className="w-auto h-auto mx-auto " />
        </div>
        <div>
            <div>name</div>
            <div>input1</div>
            <div>input2</div>
            <div>remember</div>
            <div>btn</div>
        </div>
      </div>
    </div>
  );
};

export default Adminlogin;
