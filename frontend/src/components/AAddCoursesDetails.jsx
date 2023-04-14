import React, { useEffect, useState } from "react";
import { Paper } from '@mui/material';

const AAddCoursesDetails = () => {
  const [academicYear, setAcademicYear] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [lectureId, setLectureId] = useState("");
  const [lectureName, setLectureName] = useState("");
  const [AllCourse,setAllCourse] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const getalldata = {academicYear,subjectCode,subjectName,lectureId,lectureName};
    console.log(getalldata);

    fetch("http://localhost:8080/course/add", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(getalldata),
    }).then(() => {
      console.log("data added");
    });
    setAcademicYear("");
    setSubjectCode("");
    setSubjectName("");
    setLectureId("");
    setLectureName("");

  }

  useEffect(() => {
    fetch("http://localhost:8080/course/getall")
      .then((res) => res.json())
      .then((result) => {
        setAllCourse(result);
      });
  }, []);

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
            value={academicYear}
            onChange={(e) => setAcademicYear(e.target.value)}
          />
          <input
            type="text"
            name="Subject Code"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Subject Code"
            required
            value={subjectCode}
            onChange={(e) => setSubjectCode(e.target.value)}
          />
          <input
            type="text"
            name="Subject Name"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Subject Name"
            required
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
          />
          <input
            type="text"
            name="Lecturer ID"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Lecturer ID"
            required
            value={lectureId}
            onChange={(e) => setLectureId(e.target.value)}
          />
          <input
            type="text"
            name="Lecturer Name"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#F1B81F] focus:ring-[#F1B81F] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Lecturer Name"
            required
            value={lectureName}
            onChange={(e) => setLectureName(e.target.value)}
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
      {AllCourse.map((allCourse) => (
        <Paper
          elevation={6}
          style={{ margin: "10px", padding: "15px", textAlign: "left" }}
          key={allCourse.id}
        >
          Subject Code : {allCourse.subjectCode} <br />
          Subject Name : {allCourse.subjectName} <br />
          Lecture ID : {allCourse.lectureId} <br />
          Lecture Name : {allCourse.lectureName} <br />
        </Paper>
      ))}
    </div>
    </div>
  );
};

export default AAddCoursesDetails;
