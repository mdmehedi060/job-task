import React from 'react';

export default function () {
  return (
    <div className="flex gap-24 w-[1161px] h-[456px] justify-center mx-auto mb-24">
      {/* part 1 */}
      <div>
        <button className="btn bg-[#FFFFF5]  rounded-full text-xl  font-bold text-[#020043] h-[48px] w-[174px]  border-[#343268]">
          Who we are
        </button>

        <h2 className="text-5xl font-bold text-[#343268] my-4">
          We Help To Get <br /> Soultions
        </h2>
        <p className="  text-[#343268] my-4">
          We are proud to be a trusted healthcare provider in our <br />{' '}
          community, and we look forward to serving you and your <br /> family
          with excellence, integrity, and compassion. Your health <br /> is our
          priority, and we are here for you every step of the way. <br /> We
          believe in treating each patient with dignity, respect, and <br />{' '}
          empathy, ensuring that they receive the attention and care <br /> they
          deserve.
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
              src="https://i.ibb.co/gvkwVDp/Rectangle-24.png"
              alt=""
            />
          </div>
          <div className="absolute -mt-36  -ml-24  bg-[#343268]    w-[395px] h-[210px] mx-auto rounded-3xl text-center">
            <h2 className="text-white text-2xl pt-6">Our mission is simple</h2>
            <p className="text-white my-6">
              To provide high-quality healthcare services <br />
              that are accessible, personalized, and <br /> patient-centered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
