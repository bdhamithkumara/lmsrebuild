import React, { useEffect, useState } from "react";
import { Paper } from "@mui/material";

const AAddResultDetail = () => {
  const [acedemicYear, setAcedemic_year] = useState("");
  const [level, setLevel] = useState("");
  const [semester, setSemester] = useState("");
  const [studentIndexNumber, setStudent_index_number] = useState("");
  const [subjectCode, setSubject_code] = useState("");
  const [result, setResult] = useState("");
  const [allresult, setAllResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const allData = {
      acedemicYear,
      level,
      semester,
      studentIndexNumber,
      subjectCode,
      result,
    };
    console.log(allData);

    fetch("http://localhost:8080/result/add", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(allData),
    }).then(() => {
      console.log("data added");
    });
    setAcedemic_year();
    setLevel();
    setSemester();
    setStudent_index_number();
    setSubject_code();
    setResult();
  };

  useEffect(() => {
    fetch("http://localhost:8080/result/getAll")
      .then((res) => res.json())
      .then((result) => {
        setAllResult(result);
      });
  }, []);

  return (
    <div>
      <div>
        <div>
          <form>
            <label className="block">
              <div className="relative w-full ">
                <select
                  className="w-full px-3 py-2 text-slate-400  bg-white border rounded-md shadow-sm outline-none  focus:border-[#F1B81F] mb-4"
                  // defaultValue={studentIndexNumber[0]}
                  onChange={(e) => setStudent_index_number(e.target.value)}
                >
                  <option className="text-gray-500">
                    Select the Student Index Number
                  </option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                </select>
              </div>

              <div className="relative w-full ">
                <select
                  className="w-full px-3 py-2 text-slate-400  bg-white border rounded-md shadow-sm outline-none  focus:border-[#F1B81F] mb-4"
                  // defaultValue={acedemicYear[0]}
                  onChange={(e) => setAcedemic_year(e.target.value)}
                >
                  <option className="text-gray-500">
                    Select the Academic Year
                  </option>
                  <option value="2017/2018">2017/2018</option>
                  <option value="2018/2019">2018/2019</option>
                  <option value="2019/2020">2019/2020</option>
                  <option value="2020/2021">2020/2021</option>
                </select>
              </div>

              <div className="relative w-full ">
                <select
                  className="w-full px-3 py-2 text-slate-400  bg-white border rounded-md shadow-sm outline-none  focus:border-[#F1B81F] mb-4"
                  // defaultValue={level[0]}
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option className="text-gray-500">Select the Level</option>
                  <option value="Level 1">Level 1</option>
                  <option value="Level 2">Level 2</option>
                  <option value="Level 3">Level 3</option>
                  <option value="Level 4">Level 4</option>
                </select>
              </div>

              <div className="relative w-full ">
                <select
                  className="w-full px-3 py-2 text-slate-400  bg-white border rounded-md shadow-sm outline-none  focus:border-[#F1B81F] mb-4"
                  // defaultValue={semester[0]}
                  onChange={(e) => setSemester(e.target.value)}
                >
                  <option className="text-gray-500">Select the Semester</option>
                  <option value="Semester 1">Semester 1</option>
                  <option value="Semester 2">Semester 2</option>
                </select>
              </div>

              <div className="relative w-full ">
                <select
                  className="w-full px-3 py-2 text-slate-400  bg-white border rounded-md shadow-sm outline-none  focus:border-[#F1B81F] mb-4"
                  // defaultValue={subjectCode[0]}
                  onChange={(e) => setSubject_code(e.target.value)}
                >
                  <option className="text-gray-500">
                    Select the Subject Code
                  </option>
                  <option value="TICT4112">TICT4112</option>
                  <option value="TICT4122">TICT4122</option>
                  <option value="TICT4133">TICT4133</option>
                  <option value="TICT4143">TICT4143</option>
                  <option value="TICT4152">TICT4152</option>
                  <option value="TICT4162">TICT4162</option>
                </select>
              </div>

              <div className="relative w-full ">
                <select
                  className="w-full px-3 py-2 text-slate-400  bg-white border rounded-md shadow-sm outline-none  focus:border-[#F1B81F] mb-4"
                  // defaultValue={result[0]}
                  onChange={(e) => setResult(e.target.value)}
                >
                  <option className="text-gray-500">Select the Result</option>
                  <option value="A+">A+</option>
                  <option value="A">A</option>
                  <option value="A-">A-</option>
                  <option value="Admin">B+</option>
                  <option value="Lecture">B</option>
                  <option value="Student">B-</option>
                  <option value="Admin">C+</option>
                  <option value="Lecture">C</option>
                  <option value="Student">C-</option>
                  <option value="Admin">D+</option>
                  <option value="Lecture">D</option>
                  <option value="Student">E</option>
                </select>
              </div>

              <button
                className="rounded-full bg-[#F1B81F] text-black p-2  w-[150px]"
                onClick={handleSubmit}
              >
                Save
              </button>
            </label>
          </form>
        </div>
      </div>
      <div>
      {allresult.map((mapallresult) => (
          <Paper
            elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={mapallresult.id}
          >
            Index Number : {mapallresult.studentIndexNumber} <span className="text-red-700">|| </span> 

            Academic Year : {mapallresult.acedemicYear} <span className="text-red-700">|| </span> 

            Level : {mapallresult.level} <span className="text-red-700">|| </span> 

            Semester : {mapallresult.semester} <span className="text-red-700">|| </span> 

            Subject Code : {mapallresult.subjectCode} <span className="text-red-700">|| </span> 

            Result : {mapallresult.result} 
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default AAddResultDetail;
