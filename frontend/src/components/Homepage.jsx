import React from "react";
import Unilogo from "../images/unilogo.svg";
import Studentimg from "../images/studentimage.svg";
import Adminimg from "../images/adminimage.svg";
import { useNavigate } from 'react-router-dom';


const Homepage = () => {
  const navigate = useNavigate();

  const gotoAdmin = () => {
    navigate("/adminlogin");
  }

  const gotoStudent = () => {
    navigate("/studentlogin");
  }


  return (
    <div className="container mt-5">
      <div className="mx-auto justify-center">
        <div>
          <img src={Unilogo} alt="unilogo" className="w-auto h-auto mx-auto " />
        </div>
        <div className="flex mt-12 mx-auto">
          <div className="flex mx-auto">
            <div className="mx-[120px]">
              <div>
                <img
                  src={Studentimg}
                  alt="studentimg"
                  className="w-auto h-[300px] rounded-3xl"
                />
              </div>
              <div className="relative mt-[-40px]">
                <button class="bg-[#3B1234] hover:bg-[#F1B81F] text-white font-bold py-2 px-4 w-full h-[100px] rounded-3xl text-2xl" onClick={gotoStudent}>
                  Student
                </button>
              </div>
            </div>
            <div className="mx-[120px]">
              <div>
                <img
                  src={Adminimg}
                  alt="studentimg"
                  className="w-auto h-[300px] rounded-3xl"
                />
              </div>
              <div className="relative mt-[-40px]">
                <button class="bg-[#3B1234] hover:bg-[#F1B81F] text-white font-bold py-2 px-4 w-full h-[100px] rounded-3xl text-2xl" onClick={gotoAdmin}>
                  Admin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
