import React, { createContext, useState, useEffect } from "react";
import { addCollectionAndDocument, fetchJobsAndDocuments } from "../utils/firebase";

export const JobsContext = createContext({
  jobs:{}
});

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState(null); 

  useEffect(() => {
    // 使用 fetchStaffAndDocuments 函数从 Firebase 获取数据并设置到 jobs 状态中
    const fetchData = async () => {
      const data = await fetchJobsAndDocuments();
      setJobs(data);
    };

    fetchData();
  }, []);

  const addJobToFirebase = async (newJob) => {
    // 使用 addCollectionAndDocument 函数将新的工作数据上传到 Firebase
    await addCollectionAndDocument('jobs', newJob);
    // 更新本地状态以反映更改
  };
  const value={
    jobs,
    addJobToFirebase:addJobToFirebase}

  return (
    <JobsContext.Provider value={value}>
      {children}
    </JobsContext.Provider>
  );
};
