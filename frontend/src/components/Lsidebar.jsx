import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Lsidebar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className='bg-[#F1B81F] overflow-hidden '>
    <aside className="menu pl-2 has-shadow">
      <ul className="menu-list mt-2 text-center">
        <li>
          <NavLink to={"/LMain"} className="w-[200px] rounded-3xl">
             Main
          </NavLink>
        </li>
        <li>
          <NavLink to={"/LClassWorks"} className="w-[200px] rounded-3xl">
             Class Work
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

export default Lsidebar