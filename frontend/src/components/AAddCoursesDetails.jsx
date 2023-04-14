import React from "react";

const AAddCoursesDetails = () => {

  

  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            name="Academic Year"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Academic Year"
            required
            // value={newstitle}
            // onChange={(e) => setNewstitle(e.target.value)}
          />
          <input
            type="text"
            name="Subject Code"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Subject Code"
            required
            // value={hashtags}
            // onChange={(e) => setHashtag(e.target.value)}
          />
          <input
            type="text"
            name="Subject Name"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Subject Name"
            required
            // value={hashtags}
            // onChange={(e) => setHashtag(e.target.value)}
          />
          <input
            type="text"
            name="Lecturer ID"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Lecturer ID"
            required
            // value={hashtags}
            // onChange={(e) => setHashtag(e.target.value)}
          />
          <input
            type="text"
            name="Lecturer Name"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Lecturer Name"
            required
            // value={hashtags}
            // onChange={(e) => setHashtag(e.target.value)}
          />

          <button
            className="rounded-full bg-[#F1B81F] text-black p-2  w-[150px]"
            // onClick={handleSubmit}
          >
            Save
          </button>
        </form>
      </div>
      {/* <div>
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
    </div> */}
    </div>
  );
};

export default AAddCoursesDetails;
