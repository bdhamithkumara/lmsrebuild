import React, { useEffect } from "react";
import Nimge from "../images/newsimg.png";
import { useState } from "react";

const SNewsDetails = () => {
  const [allnews, setAllnews] = useState([]);

  const MAX_LENGTH = 250;

  useEffect(() => {
    fetch("http://localhost:8080/news/alldata")
      .then((res) => res.json())
      .then((result) => {
        setAllnews(result);
      });
  }, []);

  return (
    <div>
      <div className="mt-8 mx-8">
        {allnews.map((viewallnew) => (
          <div
            className="bg-[#3B1234]  rounded-2xl text-white my-5"
            key={viewallnew.id}
          >
            <div className="flex">
              <div className="p-5">
                <img
                  src={Nimge}
                  alt="newsimage"
                  className="w-[300px] h-[150px] rounded-2xl "
                />
              </div>
              <div className="flex-col mt-4">
                <div className="text-3xl">{viewallnew.newstitle}</div>
                <div className="mt-2 pr-5">
                  

                  <div>
                    {viewallnew.content.length > MAX_LENGTH ? (
                      <div>
                        {`${viewallnew.content.substring(0, MAX_LENGTH)}...`}
                        <a href="#"> Read more </a>
                      </div>
                    ) : (
                      <p>{viewallnew.content}</p>
                    )}
                  </div>
                </div>
                <div className="mt-3">
                  <div>{viewallnew.today}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SNewsDetails;
