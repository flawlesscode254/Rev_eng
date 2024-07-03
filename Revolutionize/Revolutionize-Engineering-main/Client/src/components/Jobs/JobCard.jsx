import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiTimeFive } from 'react-icons/bi';
import Logo1 from '../../assets/logos.png';

function JobCard({ job }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/job/${job.id}`);
  };

  return (
    <div
      className="group group/item singleJob w-[270px] p-[20px] rounded-[10px] hover:bg-[#27AAE1] shadow-lg shadow-slate-400/700 hover:shadow-lg cursor-pointer"
      onClick={handleCardClick}
    >
      <span className="flex justify-between items-center gap-4">
        <h1 className="text-[16px] font-semibold text-black group-hover:text-white">
          {job.title}
        </h1>
        <span className="flex items-center text-[#ccc] gap-1">
          <BiTimeFive /> {job.posted_date}
        </span>
      </span>
      <h6 className="text-[#ccc] mt-[-40px]">{job.location}</h6>
      <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
        {job.description}
      </p>
      <div className="company flex items-center gap-2">
        <img src={Logo1} alt="Company Logo" className="w-[20px]" />
        <span className="text-[14px] py-[1rem] block group-hover:text-white">
          {job.posted_by} {job.job_type}
        </span>
      </div>
      <button className="border-[2px] border-black rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-black hover:bg-white group-hover/item:text-white group-hover:text-black">
        Apply Now
      </button>
    </div>
  );
}

export default JobCard;
