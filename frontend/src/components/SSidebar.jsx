import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SSidebar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className='bg-[#F1B81F] overflow-hidden '>
      <aside className="menu pl-2 has-shadow">
        <ul className="menu-list mt-2 text-center">
          <li>
            <NavLink to={"/SDashboard"} className="w-[200px] rounded-3xl">
               Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/SProfile"} className="w-[200px] rounded-3xl">
               Profile
            </NavLink>
          </li>
          <li>
            <NavLink to={"/SCourse"} className="w-[200px] rounded-3xl">
               Course
            </NavLink>
          </li>
          <li>
            <NavLink to={"/SResult"} className="w-[200px] rounded-3xl">
               Result
            </NavLink>
          </li>
          <li>
            <NavLink to={"/SGpacal"} className="w-[200px] rounded-3xl">
               GPA Calculator
            </NavLink>
          </li>
          <li>
            <NavLink to={"/SNews"} className="w-[200px] rounded-3xl">
               News
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

export default SSidebar
