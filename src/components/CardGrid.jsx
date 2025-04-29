import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "../assests/logo.png"

export default function CardGrid({ reload }) {  // <<< Accept reload
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await axios.get('http://13.203.221.63:5000/jobs');
      debugger
      setJobs(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [reload]);  // <<< Fetch whenever reload changes

  return (
    <div className="row">
      {jobs.map((job) => (
        <div className="col-3 mt-4" key={job.id}>
          <div className="card border-0 shadow-sm rounded-4" style={{ width: "15rem" }}>
            <div className="position-relative text-center pt-4">
              <img src={img} alt="Logo" className="rounded-circle" style={{ width: 60, height: 60, objectFit: "cover" }} />
              <span className="badge bg-info position-absolute top-0 end-0 translate-middle-y me-2 mt-2">New</span>
            </div>

            <div className="card-body pt-3">
              <h6 className="card-title fw-bold mb-3">{job.title}</h6>
              <div className="d-flex flex-wrap gap-3 text-muted small mb-3">
                <span>{job.location}</span>
                <span>{job.job_type}</span>
                <span>₹{job.salary_min} - ₹{job.salary_max}</span>
              </div>
              <p className="small">{job.description}</p>

              <button className="btn btn-primary w-100 rounded-3">Apply Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
