import { assets } from '../assets/assets';
import React from 'react';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen'>
      <div className='shadow py-4'>
        <div className='px-5 flex justify-between items-center'>
          <img onClick={() => navigate('/')} className='max-sm:w-32 cursor-pointer' src={assets.logo} alt="" />
          <div className='flex items-center gap-3'>
            <p className='max-sm:hidden'> Welcome, Pranav</p>
            <div className='relative group'>
              <img className='w-8 border rounded-full' src={assets.company_icon} alt="" />
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                  <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-start'>
        <div className='inline-block min-h-screen border-r-2'>
          <ul className='flex flex-col items-start pt-5 text-gray-800'>
            <NavLink
              to={'/dashboard/add-job'}
              className={({ isActive }) =>
                `flex items-center p-2 sm:p-6 gap-2 w-full hover:bg-gray-100 ${isActive ? 'bg-blue-100 border-r-4 border-blue-500' : ''}`
              }
            >
              <img className='min-w-4'src={assets.add_icon} alt="" />
              <p className='max-sm:hidden'>Add Job</p>
            </NavLink>

            <NavLink
              to={'/dashboard/manage-job'}
              className={({ isActive }) =>
                `flex items-center p-2 sm:p-6 gap-2 w-full hover:bg-gray-100 ${isActive ? 'bg-blue-100 border-r-4 border-blue-500' : ''}`
              }
            >
              <img className='min-w-4'src={assets.home_icon} alt="" />
              <p className='max-sm:hidden'>Manage Jobs</p>
            </NavLink>

            <NavLink
              to={'/dashboard/view-applications'}
              className={({ isActive }) =>
                `flex items-center p-2 sm:p-6 gap-2 w-full hover:bg-gray-100 ${isActive ? 'bg-blue-100 border-r-4 border-blue-500' : ''}`
              }
            >
              <img className='min-w-4'src={assets.person_tick_icon} alt="" />
              <p className='max-sm:hidden'>View Applications</p>
            </NavLink>
          </ul>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

