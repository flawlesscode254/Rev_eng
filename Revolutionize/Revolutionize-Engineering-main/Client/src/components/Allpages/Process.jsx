import React from "react";
import { useInView } from "react-intersection-observer";
import about from "../../assets/Why-choose-us.jpeg";
import { Link } from "react-router-dom";


const Process = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className={`section mt-24" id="about ${
        inView ? "opacity-100" : "opacity-0"}`}>
      <div className="mx-auto max-w-screen-xl ">
        <div className="flex flex-col md:flex-row items-center py-10">
          <div className="md:w-full md:order-2 mb-4 md:mb-0">
            <div className="border-[2px] border-solid w-full md:w-[500px] border-Teal rounded-lg md:ml-4">
              <img
                src={about}
                alt=""
                className="p-4 w-full max-h-40 md:max-h-full object-contain"
              />
            </div>
          </div>
          <div className="md:w-full text-center md:text-left md:order-1 md:ml-0" style={{ padding: '20px 10px 20px 90px' }}>
            <div className="font-bold text-lg md:text-4xl mb-4 md:mb-0">
              We provide the <br /> best{" "}
              <span className="text-Teal">online training</span>
            </div>
            <p className="text-md text-gray leading-7 py-5 mb-5 " >
              To address this skills shortage and fortify the local IT sector, my
              project seeks collaboration with the Frontiers community of
              experts. The initiative aims to establish and execute a program
              called "Revolutionize Engineering" enabling Technical and
              Vocational Education and Training (TVET) as well as university
              students in Kenya to acquire expertise in 4IR technologies through
              a series of hackathons and makerthons.
            </p>
            <Link to="/pages" className="py-4 px-6 text-sm bg-black border border-solid border-black rounded-lg font-bold hover:scale-105 text-white">Know More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
