import React from 'react';

export default function Services() {
  return (
    <div className=" w-[1156px] h-[928px] bg-[#FFFFF5] mx-auto mb-24">
      <div className="flex   justify-center mx-auto mb-24">
        {/* part 1 */}
        <div className="pl-4">
          <button className="btn bg-[#FFFFFF]  rounded-full text-xl  font-bold text-[#020043] h-[48px] w-[174px]  border-[#343268]">
            Service
          </button>

          <h2 className="text-4xl font-bold text-[#343268] my-4">
            Empowering Health, Enriching Lives
          </h2>
          <p className="  text-[#343268] my-4">
            We are proud to be a trusted healthcare provider in our <br />{' '}
            community, and we look forward to serving you and your <br /> family
            with excellence, integrity, and compassion. Your health <br /> is
            our priority, and we are here for you every step of the way. <br />{' '}
            We believe in treating each patient with dignity, respect, and{' '}
            <br /> empathy, ensuring that they receive the attention and care{' '}
            <br /> they deserve.
          </p>
          <button className="btn  rounded-xl text-xl  font-bold text-[#020043] h-[48px] w-[174px]  btn-warning">
            Learn more
            <img src="https://i.ibb.co/Krg1R2L/Arrow-1.png" />
          </button>
        </div>
        {/* part 2 */}
        <div>
          <div>
            <div className="relative ">
              <img
                className="w-[568px]  h-[415px]"
                src="https://i.ibb.co/tzSCBT1/Rectangle-27-2.png"
                alt=""
              />
            </div>
            <div className="absolute opacity-70 -mt-60  ml-12 bg-[#343268]    w-[395px] h-[210px] mx-auto rounded-3xl text-center">
              <h2 className="text-white text-2xl pt-6">
                Our mission is simple
              </h2>
              <p className="text-white my-6">
                To provide high-quality healthcare services <br />
                that are accessible, personalized, and <br /> patient-centered.
              </p>
              <img
                className="w-[48px] absolute h-[48px] p-2 text-white items-center flex justify-end ml-[420px] rounded-full bg-[#FFC637]"
                src="https://i.ibb.co/SyY0QF0/Arrow-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <div className="relative ">
            <img
              className="w-[568px]  h-[415px]"
              src="https://i.ibb.co/RpN0r6d/Rectangle-27-1.png"
              alt=""
            />
          </div>
          <div className="absolute opacity-70 -mt-60  ml-12  bg-[#343268]    w-[395px] h-[210px] mx-auto rounded-3xl text-center">
            <h2 className="text-white text-2xl pt-6">Our mission is simple</h2>
            <p className="text-white my-6">
              To provide high-quality healthcare services <br />
              that are accessible, personalized, and <br /> patient-centered.
            </p>
            <img
              className="w-[48px] absolute h-[48px] p-2 text-white items-center flex justify-end ml-[420px] rounded-full bg-[#FFC637]"
              src="https://i.ibb.co/SyY0QF0/Arrow-2.png"
              alt=""
            />
          </div>
        </div>
        {/* card-3 */}
        <div>
          <div className="relative ">
            <img
              className="w-[568px]  h-[415px]"
              src="https://i.ibb.co/F4nPPnD/Rectangle-27.png"
              alt=""
            />
          </div>
          <div className="absolute opacity-70 -mt-60  ml-12  bg-[#343268]    w-[395px] h-[210px] mx-auto rounded-3xl text-center">
            <h2 className="text-white text-2xl pt-6">Our mission is simple</h2>
            <p className="text-white my-6">
              To provide high-quality healthcare services <br />
              that are accessible, personalized, and <br /> patient-centered.
            </p>
            <img
              className="w-[48px] absolute h-[48px] p-2 text-white items-center flex justify-end ml-[420px] rounded-full bg-[#FFC637]"
              src="https://i.ibb.co/SyY0QF0/Arrow-2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
