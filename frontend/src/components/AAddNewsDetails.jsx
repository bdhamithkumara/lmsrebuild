import React from "react";

const AAddNewsDetails = () => {
  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            name="News Title"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="password"
            required
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            name="Hash Tags"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="password"
            required
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <textarea
            className="bg-white border shadow-sm border-slate-300 placeholder-slate-400 textarea textarea-bordered mb-2 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block"
            placeholder="Content"
          />

          <button className="rounded-full bg-[#F1B81F] text-black p-2  w-[150px]">
            Save
          </button>
        </form>
      </div>
      <div>123</div>
    </div>
  );
};

export default AAddNewsDetails;
