import React from 'react';

const FAQ = () => {
  return (
    <div className="w-[1161px] h-[566px] mx-auto my-10">
      <div>
        <button className="btn bg-[#FFFFFF]  rounded-full text-xl  font-bold text-[#020043] h-[48px] w-[174px]  border-[#343268]">
          Faq
        </button>
        <h2 className="text-5xl font-bold text-[#343268] my-4">
          Frequntly Asked Question
        </h2>
      </div>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title bg-[#FFFFF5] text-xl font-medium">
            What are your office hours?
          </div>
          <div className="collapse-content">
            <p>
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title bg-[#FFFFF5] text-xl font-medium">
            How can I schedule an appointment?
          </div>
          <div className="collapse-content">
            <p>
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title bg-[#FFFFF5] text-xl font-medium">
            Do you accept insurance?
          </div>
          <div className="collapse-content">
            <p>
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl bg-[#FFFFF5] font-medium">
            What should I bring to my appointment?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title bg-[#FFFFF5] text-xl font-medium">
            Do you offer telemedicine appointments?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
