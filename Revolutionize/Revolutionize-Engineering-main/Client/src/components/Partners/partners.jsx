import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineEye, AiOutlinePlus } from 'react-icons/ai';
import './partners.css'; // Make sure to import your CSS file

function Partners() {
  const [jobRequests, setJobRequests] = useState([]);
  const [applications, setApplications] = useState([]);
  const [editingRequest, setEditingRequest] = useState(null);
  const [view, setView] = useState(''); // State to toggle between views
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    requirement: '',
    location: '',
    salary: '',
    posted_by: '',
    posted_date: '',
    closing_date: '',
    status: '',
    job_type: '',
    job_level: '',
    website: '',
  });

  useEffect(() => {
    fetchJobRequests();
    fetchApplications();
  }, []);

  const fetchJobRequests = async () => {
    try {
      const response = await axios.get('http://localhost:5000/partners');
      setJobRequests(response.data);
    } catch (error) {
      console.error('Error fetching job requests:', error);
    }
  };

  const fetchApplications = async () => {
    try {
      const response = await axios.get('http://localhost:5000/partners/${id}');
      setApplications(response.data);
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };

  const handleDeleteRequest = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/partners/${id}`);
      if (response.status === 204) {
        fetchJobRequests();
      }
    } catch (error) {
      console.error('Error deleting job request:', error);
    }
  };

  const handleEditRequest = (request) => {
    setEditingRequest(request);
    setFormData(request);
  };

  const handleViewApplications = (jobId) => {
    setView('applications');
    fetchApplications(jobId);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingRequest) {
        await axios.put(`http://localhost:5000/partners/${editingRequest.id}`, formData);
        setEditingRequest(null);
      } else {
        await axios.post('http://localhost:5000/partners', formData);
      }
      fetchJobRequests();
      setFormData({
        title: '',
        description: '',
        requirement: '',
        location: '',
        salary: '',
        posted_by: '',
        posted_date: '',
        closing_date: '',
        status: '',
        job_type: '',
        job_level: '',
        website: '',
      });
    } catch (error) {
      console.error('Error saving job request:', error);
    }
  };

  return (
    <div className="partners-container">
      <h1>Partners Page</h1>
      <button className="toggle-button" onClick={() => setView(view === 'jobRequests' ? '' : 'jobRequests')}>
        {view === 'jobRequests' ? 'Hide Job Requests' : 'Show Job Requests'}
      </button>
      <button className="toggle-button" onClick={() => setView(view === 'applications' ? '' : 'applications')}>
        {view === 'applications' ? 'Hide Applications' : 'Show Applications'}
      </button>

      {view === 'jobRequests' && (
        <div>
          <h2>Job Requests Section</h2>
          <form onSubmit={handleSubmit} className="jobRequestForm">
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
            <input type="text" name="requirement" value={formData.requirement} onChange={handleChange} placeholder="Requirement" required />
            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
            <input type="text" name="salary" value={formData.salary} onChange={handleChange} placeholder="Salary" required />
            <input type="text" name="posted_by" value={formData.posted_by} onChange={handleChange} placeholder="Posted By" required />
            <input type="date" name="closing_date" value={formData.closing_date} onChange={handleChange} placeholder="Closing Date" required />
            <input type="text" name="status" value={formData.status} onChange={handleChange} placeholder="Status" required />
            <input type="text" name="job_type" value={formData.job_type} onChange={handleChange} placeholder="Job Type" required />
            <input type="text" name="job_level" value={formData.job_level} onChange={handleChange} placeholder="Job Level" required />
            <input type="text" name="website" value={formData.website} onChange={handleChange} placeholder="Website" required />
            <button type="submit">{editingRequest ? 'Update Job Request' : 'Create Job Request'}</button>
          </form>
          <div className="jobContainer flex gap-10 justify-center flex-wrap items-center mb-12 py-10">
            {jobRequests.length > 0 ? (
              jobRequests.map(({ id, title, location, description, posted_by, job_type, salary, status, job_level, requirement, website }) => (
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
                      className="border-[2px] border-black rounded-[10px] p-[10px] text-[14px] font-semibold"
                      onClick={() => handleEditRequest({ id, title, location, description, posted_by, job_level, job_type, salary, status, website, requirement })}
                    >
                      <AiOutlineEdit /> Edit
                    </button>
                    <button
                      className="border-[2px] border-red-500 text-red-500 rounded-[10px] p-[10px] text-[14px] font-semibold"
                      onClick={() => handleDeleteRequest(id)}
                    >
                      <AiOutlineDelete /> Delete
                    </button>
                    <button
                      className="border-[2px] border-blue-500 text-blue-500 rounded-[10px] p-[10px] text-[14px] font-semibold"
                      onClick={() => handleViewApplications(id)}
                    >
                      <AiOutlineEye /> View Applications
                    </button>
                  </div>
                  <div className="status">{status}</div>
                </div>
              ))
            ) : (
              <p>No job requests found.</p>
            )}
          </div>
        </div>
      )}

      {view === 'applications' && (
        <div className="applicationsTableContainer">
          <h2>Applications Section</h2>
          <table>
            <thead>
              <tr>
                <th>Application ID</th>
                <th>Applicant Name</th>
                <th>Applicant Email</th>
                <th>Job ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.length > 0 ? (
                applications.map((application) => (
                  <tr key={application.id}>
                    <td>{application.id}</td>
                    <td>{application.name}</td>
                    <td>{application.email}</td>
                    <td>{application.job_id}</td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No applications found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Partners;
