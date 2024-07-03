import React, { useState, useEffect } from 'react';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import JobCard from './JobCard';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    searchJob: '',
    searchCompany: '',
    searchLocation: '',
    sortBy: '',
    typeBy: '',
    levelBy: '',
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:5000/jobs'); // Adjust the URL to match your actual endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setJobs(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

  const filteredData = jobs.filter((job) => {
    const matchesSearchJob = filters.searchJob 
      ? job.title && job.title.toLowerCase().includes(filters.searchJob.toLowerCase()) 
      : true;
    
    const matchesSearchCompany = filters.searchCompany 
      ? job.posted_by && job.posted_by.toLowerCase().includes(filters.searchCompany.toLowerCase()) 
      : true;
    
    const matchesSearchLocation = filters.searchLocation 
      ? job.location && job.location.toLowerCase().includes(filters.searchLocation.toLowerCase()) 
      : true;
    
    const matchesTypeBy = filters.typeBy 
      ? job.job_type && job.job_type.toLowerCase().includes(filters.typeBy.toLowerCase()) 
      : true;
    
    // Edit this section to filter by levels of job requirement
    const matchesLevelBy = filters.levelBy 
      ? Job.job_level && job.level.toLowerCase() === filters.levelBy.toLowerCase() 
      : true;
  
    return matchesSearchJob && matchesSearchCompany && matchesSearchLocation && matchesTypeBy && matchesLevelBy;
  });
  ;

  const handleSearch = (e) => {
    e.preventDefault();
    setFilters({
      searchJob,
      searchCompany,
      searchLocation,
      sortBy,
      typeBy,
      levelBy,
    });
  };

  const clearFilters = () => {
    setSearchJob('');
    setSearchCompany('');
    setSearchLocation('');
    setSortBy('');
    setTypeBy('');
    setLevelBy('');
    setFilters({
      searchJob: '',
      searchCompany: '',
      searchLocation: '',
      sortBy: '',
      typeBy: '',
      levelBy: '',
    });
  };

  const [searchJob, setSearchJob] = useState('');
  const [searchCompany, setSearchCompany] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [typeBy, setTypeBy] = useState('');
  const [levelBy, setLevelBy] = useState('');

  return (
    <div>
      <div className='searchDiv grid gap-10 bg-slate-200 rounded-[10px] p-[3rem]'>
        <form onSubmit={handleSearch}>
          <div className='firstDiv flex flex-col md:flex-row bg-white justify-between items-center rounded-[8px] gap-[10px] p-5 shadow-lg shadow-greyIsh-700'>
            <div className='flex gap-4 items-center'>
              <AiOutlineSearch className='text-[25px] icon' />
              <input
                type='text'
                className='bg-transparent text-[#27AAE1] focus:outline-none w-full md:w-auto'
                placeholder='Search job Here...'
                value={searchJob}
                onChange={(e) => setSearchJob(e.target.value)}
              />
              <AiOutlineCloseCircle
                className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'
                onClick={() => setSearchJob('')}
              />
            </div>

            <div className='flex gap-4 items-center'>
              <BsHouseDoor className='text-[25px] icon' />
              <input
                type='text'
                className='bg-transparent text-[#27AAE1] focus:outline-none w-full md:w-auto'
                placeholder='Search by Company'
                value={searchCompany}
                onChange={(e) => setSearchCompany(e.target.value)}
              />
              <AiOutlineCloseCircle
                className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'
                onClick={() => setSearchCompany('')}
              />
            </div>

            <div className='flex gap-4 items-center'>
              <CiLocationOn className='text-[25px] icon' />
              <input
                type='text'
                className='bg-transparent text-[#27AAE1] focus:outline-none w-full md:w-auto'
                placeholder='Search by Location'
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              />
              <AiOutlineCloseCircle
                className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'
                onClick={() => setSearchLocation('')}
              />
            </div>

            <button className='bg-[#27AAE1] h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>
              Search
            </button>
          </div>
        </form>

        <div className='secDiv flex flex-col md:flex-row items-center gap-4 md:gap-2 justify-center'>
          <div className='singleSearch flex items-center gap-2'>
            <label htmlFor='relevance' className='text-[#808080] font-semibold'>Sort by: </label>
            <select
              id='relevance'
              className='bg-white rounded-[3px] px-4 py-1'
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value=''>Relevance</option>
              <option value='inclusive'>Inclusive</option>
              <option value='starts_with'>Starts With</option>
              <option value='contains'>Contains</option>
            </select>
          </div>

          <div className='singleSearch flex items-center gap-2'>
            <label htmlFor='type' className='text-[#808080] font-semibold'>Type by: </label>
            <select
              id='type'
              className='bg-white rounded-[3px] px-4 py-1'
              value={typeBy}
              onChange={(e) => setTypeBy(e.target.value)}
            >
              <option value=''>Full-time</option>
              <option value='remote'>Remote</option>
              <option value='contract'>Contract</option>
              <option value='part_time'>Part-time</option>
            </select>
          </div>

          <div className='singleSearch flex items-center gap-2'>
            <label htmlFor='level' className='text-[#808080] font-semibold'>Level by: </label>
            <select
              id='level'
              className='bg-white rounded-[3px] px-4 py-1'
              value={levelBy}
              onChange={(e) => setLevelBy(e.target.value)}
            >
              <option value=''>Senior</option>
              <option value='beginner'>Beginner</option>
              <option value='intermediate'>Intermediate</option>
              <option value='advocate'>Advocate</option>
            </select>
          </div>

          <span
            className='text-[#a1a1a1] cursor-pointer'
            onClick={clearFilters}
          >
            Clear All
          </span>
        </div>
      </div>

      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center mb-12 py-10">
        {filteredData.length > 0 ? (
          filteredData.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <p>No job listings found.</p>
        )}
      </div>
    </div>
  );
}

export default Jobs;
