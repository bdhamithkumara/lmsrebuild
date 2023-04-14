import React, { useEffect } from "react";
import { useState } from "react";
import { Paper } from "@mui/material";

const AAddNewsDetails = () => {
  const [newstitle, setNewstitle] = useState("");
  const [hashtags, setHashtag] = useState("");
  const [content, setContent] = useState("");
  const [allnews, setAllnews] = useState([]);
  const MAX_LENGTH = 250;

  const handleSubmit = (e) => {
    e.preventDefault();

    const getAllData = { newstitle, hashtags, content };
    console.log(getAllData);

    fetch("http://localhost:8080/news/add", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(getAllData),
    }).then(() => {
      console.log("data added");
    });
    setNewstitle("");
    setHashtag("");
    setContent("");
  };

  useEffect(() => {
    fetch("http://localhost:8080/news/alldata")
      .then((res) => res.json())
      .then((result) => {
        setAllnews(result);
      });
  }, []);

  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            name="News Title"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="News Title"
            required
            value={newstitle}
            onChange={(e) => setNewstitle(e.target.value)}
          />
          <input
            type="text"
            name="Hash Tags"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Hash Tags"
            required
            value={hashtags}
            onChange={(e) => setHashtag(e.target.value)}
          />
          <textarea
            className="bg-white border shadow-sm border-slate-300 placeholder-slate-400 textarea textarea-bordered mb-2 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block"
            placeholder="Content"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button
            className="rounded-full bg-[#F1B81F] text-black p-2  w-[150px]"
            onClick={handleSubmit}
          >
            Save
          </button>
        </form>
      </div>
      <div>
        {allnews.map((mapgetall) => (
          <Paper
            elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={mapgetall.id}
          >
            Id : {mapgetall.id} <br />
            News Title : {mapgetall.newstitle} <br />
            Hash Tags : {mapgetall.hashtags} <br />
            <div>
            Content : {mapgetall.content.length > MAX_LENGTH ? (
                <div>
                  {`${mapgetall.content.substring(0, MAX_LENGTH)}...`}
                  <a href="#"> Read more </a>
                </div>
              ) : (
                <p>{mapgetall.content}</p>
              )}
            </div>
             
            Date : {mapgetall.today} <br />
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default AAddNewsDetails;
