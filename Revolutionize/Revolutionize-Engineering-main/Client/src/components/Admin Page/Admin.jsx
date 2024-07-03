import React, { useState, useEffect } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import AddJobForm from './AddJobForm';
import axios from 'axios';
import './Admin.css';

function AdminJobs() {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [subscribers, setSubscribers] = useState([]);
  const [view, setView] = useState('');

  useEffect(() => {
    fetchJobs();
    fetchSubscribers();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:5000/jobs');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const fetchSubscribers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/subscribers');
      setSubscribers(response.data);
    } catch (error) {
      console.error('Error fetching subscribers:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/jobs/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      fetchJobs();
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const handleEdit = (job) => {
    setEditingJob(job);
  };

  return (
    <div className="admin-container">
      <h1><b>Admin Page</b></h1>
      <button className="toggle-button" onClick={() => setView(view === 'jobs' ? '' : 'jobs')}>
        {view === 'jobs' ? 'Hide Jobs' : 'Show Jobs'}
      </button>
      <button className="toggle-button" onClick={() => setView(view === 'subscribers' ? '' : 'subscribers')}>
        {view === 'subscribers' ? 'Hide Subscribers' : 'Show Subscribers'}
      </button>

      {view === 'jobs' && (
        <div>
          <h2>Jobs Section</h2>
          <AddJobForm fetchJobs={fetchJobs} editingJob={editingJob} setEditingJob={setEditingJob} />
          <div className="jobContainer flex gap-10 justify-center flex-wrap items-center mb-12 py-10">
            {jobs.length > 0 ? (
              jobs.map(({ id, title, location, description, posted_by, job_type }) => (
                <div key={id} className="singleJob w-[270px] p-[20px] rounded-[10px] shadow-lg shadow-slate-400/700">
                  <h1 className="text-[16px] font-semibold">{title}</h1>
                  <h6 className="text-[#ccc]">{location}</h6>
                  <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]">
                    {description}
                  </p>
                  <div className="company flex items-center gap-2">
                    <span className="text-[14px] py-[1rem]">{posted_by} {job_type}</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="edit-button"
                      onClick={() => handleEdit({ id, title, location, description, posted_by, job_type })}
                    >
                      <AiOutlineEdit /> Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(id)}
                    >
                      <AiOutlineDelete /> Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No job listings found.</p>
            )}
          </div>
        </div>
      )}

      {view === 'subscribers' && (
        <div className="subscribersTableContainer">
          <h2>Subscribers Section</h2>
          <table>
            <thead>
              <tr>
                <th>Subscription Number</th>
                <th>Subscriber's Email</th>
                <th>Subscription Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.length > 0 ? (
                subscribers.map((subscriber) => (
                  <tr key={subscriber.id}>
                    <td>{subscriber.id}</td>
                    <td>{subscriber.subscriber_email}</td>
                    <td>{subscriber.subscription_date}</td>
                    <td>
                      <button className="delete-button" onClick={() => handleDelete(subscriber.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No subscribers found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminJobs;