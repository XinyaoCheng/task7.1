import React, { useState } from "react";

const Experience = ({ handleFormChange }) => {
  const [formData, setFormData] = useState({
    experiencedIn: "",
    experienceLeast: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // 将变化的数据传递给父组件的处理函数
    handleFormChange(name, value);
  };

  return (
    <div className="d-grid gap-2">
      <div className="header_container">
        <h3>Experience</h3>
      </div>

      <form>
        <div className="row form-div">
          <label className="col-6 col-sm-2 align-self-start">
            Experienced in
          </label>
          <div className="col-6 col-sm-4 align-self-start">
            <input
              className="mx-3 form-control"
              type="text"
              name="experiencedIn"
              style={{ width: "70%" }}
              value={formData.experiencedIn}
              onChange={handleInputChange}
            />
          </div>

          <label className="col-6 col-sm-2 align-self-start">
            For at least
          </label>
          <div className="col-6 col-sm-4 align-self-start">
            <input
              className="mx-3 form-control"
              type="text"
              name="experienceLeast"
              style={{ width: "70%" }}
              value={formData.experienceLeast}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Experience;
