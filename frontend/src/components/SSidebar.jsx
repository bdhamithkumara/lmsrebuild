import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SSidebar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <ul className="menu-list">
          <li>
            <NavLink to={"/SDashboard"}>
               Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/SProfile"}>
               Profile
            </NavLink>
          </li>
          <li>
            <NavLink to={"/SCourse"}>
               Course
            </NavLink>
          </li>
          <li>
            <NavLink to={"/SResult"}>
               Result
            </NavLink>
          </li>
          <li>
            <NavLink to={"/SGpacal"}>
               GPA Calculator
            </NavLink>
          </li>
          <li>
            <NavLink to={"/SNews"}>
               News
            </NavLink>
          </li>
        </ul>


      </aside>
      <div className="">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  )
}

export default SSidebar
