import React from 'react';
import hero from '../../assets/Group 1.png';
import { Link } from'react-router-dom';

function Home() {
  return (
    <div className="flex justify-center items-center py-14 lg:ml-36 sm:mt-2">
      <div className="md:flex items-center">
        <div className="items-center">
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold text-center">
            Revolutionize Engineering-<br/>  Building Practical Skills <br/>  for the IT Sector
          </div>
          <div className="flex justify-center text-center mt-2">
          <p className="text-md  text-gray max-w-sm text-center">
          Top Talent Acquisition Pipeline and Student Community in Africa.
          </p>
          </div>
          <div className="flex justify-center items-center mt-5">
          <Link to="/pages" className="py-4 px-6 text-sm bg-black border border-solid border-black rounded-lg font-bold hover:scale-105 text-white">
              Get Started
            </Link>
          </div>
        </div>
        <div className="md:w-[45%]  ml-8">
          <img
            src={hero}
            alt=""
            className="max-w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
