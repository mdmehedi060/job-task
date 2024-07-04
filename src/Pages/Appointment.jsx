import React from 'react';

export default function Appointment() {
  return (
    <div
      className="hero w-[1160px] h-[477px] mx-auto "
      style={{
        backgroundImage: 'url(https://i.ibb.co/WcLGys0/Rectangle-32.png)',
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Get Your First Appointment at 50% Off!
          </h1>
          <div className="gap-4">
            <button className="btn  rounded-xl text-black   font-bold text-[#020043] h-[48px] w-[174px]  btn-warning">
              Appointment
              <img src="https://i.ibb.co/Krg1R2L/Arrow-1.png" />
            </button>

            <button className="btn text-white rounded-xl  font-bold  h-[48px] w-[174px] btn-outline">
              Learn more
              <img src="https://i.ibb.co/SyY0QF0/Arrow-2.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
