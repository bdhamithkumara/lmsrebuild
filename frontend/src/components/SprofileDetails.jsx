import React from 'react'
import Avatr from '../images/avatar.jpg';

const SprofileDetails = () => {
  return (
    <div>

        <div className='flex flex-row mt-5'>
          {/* for image preview */}
          <div className='basis-1/4'>
            <div>
            <div className='flex '>
            <img className="w-[250px] h-[250px] rounded-full mx-auto" src={Avatr} alt="Rounded avatar"/>
            </div>
            <div className='flex mt-5'>
              <div className='mx-auto'> 
                <div className='w-[200px] p-2 text-[25px] font-bold  bg-[#3B1234] rounded-2xl text-white text-center'>
                  <label className='mb-[50px]' >2017/ICTS/07</label>
                </div>
              </div>
            </div>
            </div>
          </div>
          {/* for input field */}
          <div className='basis-3/4'>
            <div>
              <div className='mb-3 pr-5'>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " id="name" type="text" placeholder="Name"/>
              </div>
              <div className='mb-3 pr-5'>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="regno" type="text" placeholder="Reg No"/>
              </div>
              <div className='mb-3 pr-5'>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="indexno" type="text" placeholder="Index No"/>
              </div>
              <div className='mb-3 pr-5'>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Address"/>
              </div>
              <div className='mb-3 pr-5'>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="faculty" type="text" placeholder="Faculty"/>
              </div>
              <div className='mb-3 pr-5'>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="course" type="text" placeholder="Course"/>
              </div>
              <div className='mb-3 pr-5'>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="currentsemester" type="text" placeholder="Current Semester"/>
              </div>
            </div>
          </div>
        </div>
        {/* for reset password */}
        <div className='mt-5'>
          <div className='flex'>
            <div className='basis-1/3'>
                <div className='px-5'>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="password" placeholder="Current Password"/>
                </div>
            </div>
            <div className='basis-1/3'>
            <div className='px-5'>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="password" placeholder="New Password"/>
                </div>
            </div>
            <div className='basis-1/3'>
            <div className='px-5'>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="password" placeholder="Confirm Password"/>
                </div>
            </div>
          </div>
          <div className='flex mt-5'>
              <div className='mx-auto'> 
                <div className='w-auto py-2 px-16 text-[25px] font-bold  bg-[#3B1234] rounded-2xl text-white text-center'>
                  <label className='mb-[50px]' >Reset Your Password</label>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SprofileDetails
