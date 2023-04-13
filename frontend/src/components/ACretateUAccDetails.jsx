import React, { useState } from "react";

const ACretateUAccDetails = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    
  }

  return (
    <div>
      <div className="flex">
        <div className="basis-3/4">
          <form>
            <label class="block">
              <input
                type="email"
                name="email"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="relative w-full ">
                <select
                  className="w-full px-3 py-2 text-slate-400  bg-white border rounded-md shadow-sm outline-none  focus:border-[#F1B81F]"
                  defaultValue={type[0]}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option className="text-gray-500">select the type</option>
                  <option value="Admin">Admin</option>
                  <option value="Lecture">Lecture</option>
                  <option value="Student">Student</option>
                </select>
              </div>

              <button class="rounded-full bg-[#F1B81F] text-black p-2 mt-5" onClick={handleSubmit}>
                Save Changes
              </button>
            </label>
          </form>
        </div>
        <div className="basis-1/4">
          <div className="px-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ACretateUAccDetails;
