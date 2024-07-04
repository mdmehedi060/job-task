import React from 'react';

const Patient = () => {
  return (
    <div className="flex gap-4 w-[1149px] h-[312px ] mx-auto my-8">
      {/* first card */}
      <div className="w-1/4">
        <div className="h-[305px] w-[216px] card bg-[#FBFBFB] shadow-md rounded-lg">
          <h2 className="text-3xl font-bold p-2 text-[#020043]  my-2">90%</h2>
          <p className="p-2 text-[#020043]">
            Patient satisfaction rate, reflecting our commitment.
          </p>
          <img
            className="h-[130px] w-[130px] mx-auto mt-3"
            src="https://i.ibb.co/gt8rshS/Group-12.png"
            alt=""
          />
        </div>
      </div>
      {/*2nd card */}
      <div>
        <div>
          <h1 className="text-5xl font-semibold text-[#020043] my-4 ml-28 mx-auto">
            Comprehensive Care <br /> for Every Patient
          </h1>
        </div>
        <div className="flex gap-6">
          <div className="h-[190px] w-[216px] card bg-[#FFFFF5] shadow-md rounded-lg">
            <h2 className="text-3xl font-bold p-2 text-[#020043]  my-2">
              500+
            </h2>
            <p className="p-2 text-[#020043]">Board-certified doctors</p>
            <img
              className="h-[77px] w-[77px] ml-28 flex items-end"
              src="https://i.ibb.co/NZkRZPH/contract-1-1.png"
              alt=""
            />
          </div>
          <div className="h-[162px] mt-7 w-[216px] card bg-[#FBFBFB] shadow-md rounded-lg">
            <div className="flex ">
              <h2 className="text-3xl font-bold p-2 text-[#020043]  my-2">
                4.8
              </h2>
              <img
                className="h-[30px] w-[30px] p- mt-4"
                src="https://i.ibb.co/bWWH6M3/Vector.png"
                alt=""
              />
            </div>
            <p className="p-2 text-[#020043]">Over 20,000 Patient</p>
            <img
              className="h-[35px] mt-4 w-[103px]"
              src="https://i.ibb.co/4S4FhXf/Group-7.png"
              alt=""
            />
          </div>
          <div className="h-[190px] w-[216px] card bg-[#FFFFF5] shadow-md rounded-lg">
            <h2 className="text-3xl font-bold p-2 text-[#020043]  my-2">
              500+
            </h2>
            <p className="p-2 text-[#020043]">Money spend for poor patient</p>
            <img
              className="h-[77px] w-[77px] ml-24 flex items-end"
              src="https://i.ibb.co/9hGqnFf/Group-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* 3rd card */}
      <div className="w-1/4">
        <div className="h-[305px] w-[216px] card bg-[#FBFBFB] shadow-md rounded-lg">
          <h2 className="text-3xl font-bold p-2 text-[#020043]  my-2">50+</h2>
          <p className="p-2 text-[#020043]">Free lession video for patient</p>
          <img
            className="h-[130px] w-[130px] mx-auto mt-3"
            src="https://i.ibb.co/zhMc75b/Group-2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Patient;
