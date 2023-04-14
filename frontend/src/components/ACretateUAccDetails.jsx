import React, { useEffect, useState } from "react";
import { Paper } from '@mui/material';

const ACretateUAccDetails = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [alluserlogindata,setAlluserlogindata] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const alluserlogin = {username,password,type};
    console.log(alluserlogin);
    fetch("http://localhost:8080/logindata/add",{
      method:"POST",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify(alluserlogin)
    }).then(()=>{
      console.log("data added");
    })
    setUsername("");
    setPassword("");
    setType();
  }

  useEffect(() => {
    fetch("http://localhost:8080/logindata/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setAlluserlogindata(result);
    })
  },[]);

  return (
    <div>
      <div className="flex">
        <div className="basis-3/4">
          <form>
            <label className="block">
              <input
                type="email"
                name="email"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                name="password"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="password"
                required
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

              <button className="rounded-full bg-[#F1B81F] text-black p-2 mt-5" onClick={handleSubmit}>
                Save 
              </button>
            </label>
          </form>
        </div>
        <div className="basis-1/4">
          <div className="px-2">
            {alluserlogindata.map(Alluserlogindata=>(
                              <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={Alluserlogindata.id}>

                              ID : {Alluserlogindata.id} &nbsp; &nbsp; 
                              USERNAME : {Alluserlogindata.username}
                          </Paper>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACretateUAccDetails;
