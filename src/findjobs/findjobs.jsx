import React, { useContext, useState, useEffect } from "react";
import JobCard from "./jobCard";
import { JobsContext } from "../context/jobs.context";
import NavHeader from "../homepage/NavHeader";
import Filter from "./filter";
import "./findjobs.css";

function FindJobs() {
  const { jobs } = useContext(JobsContext);
  const [filteredJobs, setFilteredJobs] = useState(Object.keys(jobs)); 

  useEffect(() => {
    if (Object.keys(jobs).length > 0) {
      handleSearch(""); 
    }
  }, [jobs]);

  const handleSearch = (value) => {
    if(value.trim()===""){
      setFilteredJobs(Object.keys(jobs));
    } else {
      const filtered = Object.keys(jobs).filter((id) =>
      jobs[id].jobTitle.toLowerCase().includes(value.toLowerCase()) ||
        jobs[id].jobSkills.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredJobs(filtered);
    }
    
  };

  return (
    <div>
      <NavHeader />
      <Filter onSearch={handleSearch} />
      {filteredJobs.map((id) => (
        <JobCard
          key={id} 
          imageUrl={jobs[id].imageUrl}
          jobTitle={jobs[id].jobTitle}
          jobDesc={jobs[id].jobDesc}
          jobSkills={jobs[id].jobSkills}
          jobType={jobs[id].jobType}
          projectLength={jobs[id].projectLength}
          maxPay={jobs[id].maxPay}
          minPay={jobs[id].minPay}
          workingHours={jobs[id].workingHours}
        />
      ))}
    </div>
  );
}

export default FindJobs;
