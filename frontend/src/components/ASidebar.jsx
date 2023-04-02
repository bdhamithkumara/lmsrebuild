import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ASidebar = () => {
    const [value, onChange] = useState(new Date());
  return (
    <div className='bg-[#F1B81F] overflow-hidden '>
      <aside className="menu pl-2 has-shadow">
        <ul className="menu-list mt-2 text-center">
          <li>
            <NavLink to={"/AddResult"} className="w-[200px] rounded-3xl">
               Add Result
            </NavLink>
          </li>
          <li>
            <NavLink to={"/AddCourses"} className="w-[200px] rounded-3xl">
               Add Courses
            </NavLink>
          </li>
          <li>
            <NavLink to={"/AddNews"} className="w-[200px] rounded-3xl">
               Add News
            </NavLink>
          </li>
          <li>
            <NavLink to={"/ACreateUserAcc"} className="w-[200px] rounded-3xl">
               Create Account
            </NavLink>
          </li>

        </ul>


      </aside>
      <div className=" mt-[175px]">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  )
}

export default ASidebar