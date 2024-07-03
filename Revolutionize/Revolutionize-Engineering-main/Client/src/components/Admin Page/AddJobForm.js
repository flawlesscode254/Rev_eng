import React, { useState, useEffect } from 'react';

function AddJobForm({ fetchJobs, editingJob, setEditingJob }) {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [postedBy, setPostedBy] = useState('');
  const [jobType, setJobType] = useState('');

  useEffect(() => {
    if (editingJob) {
      setTitle(editingJob.title);
      setLocation(editingJob.location);
      setDescription(editingJob.description);
      setPostedBy(editingJob.posted_by);
      setJobType(editingJob.job_type);
    } else {
      clearForm();
    }
  }, [editingJob]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobData = { title, location, description, posted_by: postedBy, job_type: jobType };

    try {
      const response = editingJob
        ? await fetch(`http://localhost:5000/jobs/${editingJob.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jobData),
          })
        : await fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jobData),
          });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      fetchJobs();
      clearForm();
    } catch (error) {
      console.error('Error saving job:', error);
    }
  };

  const clearForm = () => {
    setTitle('');
    setLocation('');
    setDescription('');
    setPostedBy('');
    setJobType('');
    setEditingJob(null);
  };

  return (
    <form onSubmit={handleSubmit} className="form bg-slate-200 p-5 rounded-lg mb-5">
      <h2>{editingJob ? 'Edit Job' : 'Add Job'}</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Posted By</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={postedBy}
          onChange={(e) => setPostedBy(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Job Type</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          required
        />
      </div>
      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-brown-500 text-white p-2 rounded-md"
        >
          {editingJob ? 'Update Job' : 'Add Job'}
        </button>
        {editingJob && (
          <button
            type="button"
            className="bg-gray-500 text-white p-2 rounded-md"
            onClick={clearForm}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default AddJobForm;
