import React from "react";

const SCoursedetails = () => {
  return (
    <div className="mt-5">
      <div>
        <div>
          <div className="flex">
            <div className="basis-1/2">
              <div>
                <label className="text-[25px] font-bold pl-5">Level 4 / Semester 1</label>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="ml-[320px]">
                <form method="GET">
                  <div className="relative text-gray-600 focus-within:text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <button
                        type="submit"
                        className="p-1 focus:outline-none focus:shadow-outline"
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </button>
                    </span>
                    <input

                      type="search"
                      name="q"
                      className="py-2 text-sm text-white bg-[#D9D9D9] rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 w-[300px]"
                      placeholder="Search..."
                      autocomplete="off"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-5 mt-5">
        <div className="grid gap-x-8 gap-y-8">
          <div className="flex">
            <div className="basis-1/2 mx-5">
            <div className="w-full h-[100px] bg-[#D2A7CB] rounded-2xl text-[#3B1234] ">
              <div className="text-center pt-2">
                <p className="text-[30px] font-bold">TICT 4112</p>
                <p className="text-[20px] font-bold">Distributed System </p>
              </div>
            </div>
            </div>
            <div className="basis-1/2 mx-5">
            <div className="w-full h-[100px] bg-[#D2A7CB] rounded-2xl text-[#3B1234] ">
            <div className="text-center pt-2">
                <p className="text-[30px] font-bold">TICT 4143</p>
                <p className="text-[20px] font-bold">Intelligent System</p>
              </div>
            </div>
            </div>
          </div>

          <div className="flex">
            <div className="basis-1/2 mx-5">
            <div className="w-full h-[100px] bg-[#D2A7CB] rounded-2xl text-[#3B1234] ">
              <div className="text-center pt-2">
                <p className="text-[30px] font-bold">TICT 4122</p>
                <p className="text-[20px] font-bold">Green Computing  </p>
              </div>
            </div>
            </div>
            <div className="basis-1/2 mx-5">
            <div className="w-full h-[100px] bg-[#D2A7CB] rounded-2xl text-[#3B1234] ">
            <div className="text-center pt-2">
                <p className="text-[30px] font-bold">TICT 4152</p>
                <p className="text-[20px] font-bold">Cloud Application Development </p>
              </div>
            </div>
            </div>
          </div>


          <div className="flex">
            <div className="basis-1/2 mx-5">
            <div className="w-full h-[100px] bg-[#D2A7CB] rounded-2xl text-[#3B1234] ">
              <div className="text-center pt-2">
                <p className="text-[30px] font-bold">TICT 4133</p>
                <p className="text-[20px] font-bold">Mobile Application Development</p>
              </div>
            </div>
            </div>
            <div className="basis-1/2 mx-5">
            <div className="w-full h-[100px] bg-[#D2A7CB] rounded-2xl text-[#3B1234] ">
            <div className="text-center pt-2">
                <p className="text-[30px] font-bold">TICT 4162</p>
                <p className="text-[20px] font-bold">Bio-informatics </p>
              </div>
            </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SCoursedetails;
