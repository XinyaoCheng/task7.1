import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/header.css";
import "./css/form-div.css";

const JobSelect = ({ handleRadioChange }) => {

  return (
    <div className="d-grid gap-2">
      <div className="header_container">
        <h3>New Job</h3>
      </div>
      <form>
        <div className="row form-div">
          <label className="col-6 col-sm-2 align-self-start">
            Select Job Type
          </label>
          <div className="col-6 col-sm-4 align-self-start">
            <label className="mx-3">
              <input
                type="radio"
                name="jobType"
                value="Freelance"
                onChange={handleRadioChange}
              />
              Freelance
            </label>

            <label className="mx-3">
              <input
                type="radio"
                name="jobType"
                value="Employment"
                onChange={handleRadioChange}
              />
              Employment
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobSelect;
