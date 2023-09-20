import "./css/styles.css";
import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import JobSelect from "./JobSelect";
import JobDescribe from "./JobDescribe";
import ProjectCon from "./ProjectCon";
import Experience from "./Experience";
import Submit from "./Submit";
import { JobsContext } from "../context/jobs.context";

export default function FindDevs() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    setFormData({
      ...formData,
      jobType: event.target.value, 
    });
    console.log(selectedOption);
  };

  const [formData, setFormData]=useState({
    id:"",
    jobType:"",
    jobTitle: "",
    jobDesc: "",
    jobSkills: "",
    projectLength: "",
    maxPay: "",
    minPay: "",
    workingHours: "",
    imageUrl: "",
    experiencedIn: "",
    experienceLeast: "",
  })

  const handleFormChange=(name,value)=>{
    setFormData({
        ...formData,
        [name]:value,
    })
    console.log(formData)
  }

  const {addJobToFirebase} = useContext(JobsContext)
  const handleSubmit=()=>{
    console.log('prepare to upload all to firebase:'+formData)
    try{
      addJobToFirebase(formData)
      navigate('/')
    } catch(e){
      alert("please try again!"+e)
    }
    
  }

  return (
    <div className="App">
      <JobSelect handleRadioChange={handleRadioChange} handleFormChange={handleFormChange} />
      <JobDescribe handleFormChange={handleFormChange}/>
      <ProjectCon handleFormChange={handleFormChange}/>
      {selectedOption === "Employment" && <Experience handleFormChange={handleFormChange}/>}
      <Submit onSubmit={handleSubmit}/>
    </div>
  );
}