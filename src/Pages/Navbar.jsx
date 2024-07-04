import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg w-[1160px] h-[48px] mx-auto my-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu text-xl text-[#020043] menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Blog</a>
            </li>

            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
        <img src="https://i.ibb.co/jv9L17D/logo-dark.png" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-xl text-[#020043] menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Service</a>
          </li>
          <li>
            <a>Blog</a>
          </li>

          <li>
            <a>About Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <button className="btn rounded-xl flex text-xl text-[#020043] h-[48px] w-[174px] btn-outline">
          Appointment
          <img src="https://i.ibb.co/Krg1R2L/Arrow-1.png" />
        </button> */}
        <button className="btn  rounded-xl  font-bold text-[#020043] h-[48px] w-[174px] btn-outline">
          Appointment
          <img src="https://i.ibb.co/Krg1R2L/Arrow-1.png" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
