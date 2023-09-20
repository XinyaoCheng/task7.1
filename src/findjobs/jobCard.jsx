import React,{useState} from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './findjobs.css';

const JobCard = (job)=>{
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

  const toggleExpand = () => {
    console.log("isexpand?:"+isExpanded)
    setIsExpanded(!isExpanded);
  };
  const handleDelete = () => {
    setIsVisible(false);
  };
  if (!isVisible) {
    return null; 
  }

  return (
    <div className={`card mb-3 job-card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
      
      <div className="row g-0">
        <div className="col-md-2">
          <img src={job.imageUrl} className="img-fluid rounded-start job-image" alt="job image" />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{job.jobTitle}</h5>
            <p className="card-text">Description:{job.jobDesc}</p>
            <p className="card-text"><b>Required Skills:{job.jobSkills}</b></p>
          </div>
          
          
        </div>
        <div className="col-md-1 delete-button" onClick={handleDelete}>
          <i className="bi bi-trash float-end"></i>
          </div>
        {/* expand part */}
        {isExpanded && (
          <div className={`card-flap flap1`}>
            <div className="card-desc">
            <p className="card-test"><b>Job Type:</b>{job.jobType}</p>
              <p className="card-test"><b>Project length:</b>{job.projectLength}</p>
              <p className="card-test"><b>Payment:</b>{job.minPay}~{job.maxPay}</p>
              <p className="card-test"><b>Working Hours:</b>{job.workingHours}</p>

              
            </div>
            <div className="card-flap flap2">
              <div className="card-close">
                <button className="close-button" onClick={toggleExpand}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobCard;