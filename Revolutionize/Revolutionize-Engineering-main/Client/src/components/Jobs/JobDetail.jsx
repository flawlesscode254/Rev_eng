import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Allpages/Navbar';

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`http://localhost:5000/jobs/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setJob(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job:', error);
        setError('Error fetching job. Please try again later.');
        setLoading(false);
      }
    };
    fetchJob();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen text-red-500">{error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-6 mt-10">
        <h1 className="text-3xl font-semibold mb-2">{job.title}</h1>
        <p className="text-lg text-gray-600 mb-4">
          <strong>Company:</strong> {job.posted_by}
        </p>
        <p className="text-lg text-gray-700 mb-2">
              <strong>Deadline:</strong> {job.closing_date}
            </p>
        <div className="flex flex-wrap items-start mb-4">
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 mb-2">
              <strong>Location:</strong> {job.location}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Type:</strong> {job.job_type}
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 mb-2">
              <strong>Level:</strong> {job.job_level}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Posted Date:</strong> {new Date(job.posted_date).toLocaleDateString()}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Requirements:</strong> {job.requirement}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Salary:</strong> {job.salary}
            </p>
          </div>
        </div>
        <hr className="my-4" />
        <p className="text-lg text-gray-800 mb-6">{job.description}</p>
        <Link
          to="https://forms.gle/Yg1oxhoJju18VXEv5"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-block"
        >
          Apply Now
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default JobDetail;
