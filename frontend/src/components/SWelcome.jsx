import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import TodoContainer from '../components/todolist/App/TodoContainer'


const SWelcome = () => {
  const percentage = 3.32;

  return (
    <div>
      <div className="flex flex-row">
        <div className="basis-3/4">
          <div className="w-[150px] h-[150px] text-center mx-auto">
            <CircularProgressbar
              styles={buildStyles({
                pathColor: "#F1B81F",
                trailColor: "#3B1234",
                textSize: "20px",
                transformOrigin: "center center",
                textColor: "#000",
              })} 
              minValue={0} maxValue={4}
              value={percentage}
              text={`${percentage}`}
            ></CircularProgressbar>
          </div>
          <div className="">
            <div className="flex flex-row mt-5">
              <div class="basis-1/2 px-4">
              <div className="w-full h-[100px] border-red-500 border-2 bg-[#3B1234] rounded-2xl text-white">
                  <div className="">
                    <div className="font-bold text-[20px] pl-2">Level 1 / Semester 1</div>
                  </div>
                  <div className="mt-[35px] ml-[300px]">
                    <div className="text-[20px]">GPA:</div>
                  </div>
                </div>
              </div>
              <div class="basis-1/2 px-4">
              <div className="w-full h-[100px] border-red-500 border-2 bg-[#3B1234] rounded-2xl text-white">
                  <div className="">
                    <div className="font-bold text-[20px] pl-2">Level 1 / Semester 1</div>
                  </div>
                  <div className="mt-[35px] ml-[300px]">
                    <div className="text-[20px]">GPA:</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-5">
            <div class="basis-1/2 px-4">
            <div className="w-full h-[100px] border-red-500 border-2 bg-[#3B1234] rounded-2xl text-white">
                  <div className="">
                    <div className="font-bold text-[20px] pl-2">Level 1 / Semester 1</div>
                  </div>
                  <div className="mt-[35px] ml-[300px]">
                    <div className="text-[20px]">GPA:</div>
                  </div>
                </div>
              </div>
              <div class="basis-1/2 px-4">
              <div className="w-full h-[100px] border-red-500 border-2 bg-[#3B1234] rounded-2xl text-white">
                  <div className="">
                    <div className="font-bold text-[20px] pl-2">Level 1 / Semester 1</div>
                  </div>
                  <div className="mt-[35px] ml-[300px]">
                    <div className="text-[20px]">GPA:</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-5">
            <div class="basis-1/2 px-4">
            <div className="w-full h-[100px] border-red-500 border-2 bg-[#3B1234] rounded-2xl text-white">
                  <div className="">
                    <div className="font-bold text-[20px] pl-2">Level 1 / Semester 1</div>
                  </div>
                  <div className="mt-[35px] ml-[300px]">
                    <div className="text-[20px]">GPA:</div>
                  </div>
                </div>
              </div>
              <div class="basis-1/2 px-4">
              <div className="w-full h-[100px] border-red-500 border-2 bg-[#3B1234] rounded-2xl text-white">
                  <div className="">
                    <div className="font-bold text-[20px] pl-2">Level 1 / Semester 1</div>
                  </div>
                  <div className="mt-[35px] ml-[300px]">
                    <div className="text-[20px]">GPA:</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-5">
            <div class="basis-1/2 px-4">
            <div className="w-full h-[100px] border-red-500 border-2 bg-[#3B1234] rounded-2xl text-white">
                  <div className="">
                    <div className="font-bold text-[20px] pl-2">Level 1 / Semester 1</div>
                  </div>
                  <div className="mt-[35px] ml-[300px]">
                    <div className="text-[20px]">GPA:</div>
                  </div>
                </div>
              </div>
              <div class="basis-1/2 px-4">
              <div className="w-full h-[100px] border-red-500 border-2 bg-[#3B1234] rounded-2xl text-white">
                  <div className="">
                    <div className="font-bold text-[20px] pl-2">Level 1 / Semester 1</div>
                  </div>
                  <div className="mt-[35px] ml-[300px]">
                    <div className="text-[20px]">GPA:</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="basis-1/4 border-2 p-2 border-zinc-900">
        <TodoContainer/>
        </div>
      </div>
    </div>
  );
};

export default SWelcome;
