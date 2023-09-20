import react,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/header.css";
import "./css/form-div.css";

const JobDescribe = ({handleFormChange}) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    JobDesc: "",
    JobSkills: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });


    // 将变化的数据传递给父组件的处理函数
    handleFormChange(name, value);
  }

  return (
    <div className="d-grid gap-2">
      <div className="header_container">
        <h3>Describe Your Job</h3>
      </div>
      <form>
        <div className="row form-div">
          <label className="col-6 col-sm-2 align-self-start">
            Title/Position
          </label>
          <div className="col-6 col-sm-4 align-self-start">
            <input
              className="mx-3 form-control"
              type="text"
              name="jobTitle"
              style={{ width: "80%" }}
              value={formData.jobTitle}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row form-div">
          <label className="col-6 col-sm-2 align-self-start">
            Job Description
          </label>

          <div className="col-6 col-sm-6 align-self-start">
            <textarea
              className="form-control mx-3"
              rows="3"
              name="jobDesc"
              style={{ width: "80%" }}
              value={formData.jobDesc}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        <div className="row form-div">
          <label className="col-6 col-sm-2 align-self-start">Skills</label>

          <div className="col-6 col-sm-6 align-self-start">
            <input
              className="form-control mx-3"
              name="jobSkills"
              placeholder="Please add skills that your job is required e.g., JAVA"
              style={{ width: "80%" }}
              value={formData.jobSkills}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row form-div">
          <label className="col-6 col-sm-12 align-self-start">
            Developers will find your job based on the skills you added here.
          </label>
        </div>
      </form>
    </div>
  );
};

export default JobDescribe;
