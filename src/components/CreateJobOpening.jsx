import React, { useState } from "react";
import axios from "axios";

export default function CreateJobOpening({ onJobCreated }) {
  const [formData, setFormData] = useState({
    title: "",
    company_name: "",
    location: "",
    job_type: "Full Time",
    salary_min: "",
    salary_max: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://13.203.221.63:5000/jobs", formData);
      alert("Job Created Successfully!");
      onJobCreated();  // Refresh Job Cards
      setFormData({
        title: "",
        company_name: "",
        location: "",
        job_type: "Full Time",
        salary_min: "",
        salary_max: "",
        description: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error creating job");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center mb-4">Create Job Opening</h2>

      <div className="row mb-3">
        <div className="col">
          <input type="text" name="title" placeholder="Enter Job Title Here" className="form-control" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="col">
          <input type="text" name="company_name" placeholder="Company Name" className="form-control" value={formData.company_name} onChange={handleChange} required />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <select name="location" className="form-select" value={formData.location} onChange={handleChange} required>
            <option value="">Select Location</option>
            <option>Chennai</option>
            <option>Bangalore</option>
            <option>Hyderabad</option>
          </select>
        </div>
        <div className="col">
          <select name="job_type" className="form-select" value={formData.job_type} onChange={handleChange}>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
            <option>Contract</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <input type="number" name="salary_min" placeholder="₹ 0" className="form-control" value={formData.salary_min} onChange={handleChange} required />
        </div>
        <div className="col">
          <input type="number" name="salary_max" placeholder="₹ 12,00,000" className="form-control" value={formData.salary_max} onChange={handleChange} required />
        </div>
      </div>

      <div className="mb-3">
        <textarea name="description" className="form-control" placeholder="Please share a description..." rows="3" value={formData.description} onChange={handleChange} required></textarea>
      </div>

      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-outline-secondary">Save Draft</button>
        <button type="submit" className="btn btn-primary">Publish</button>
      </div>
    </form>
  );
}
