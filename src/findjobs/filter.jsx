import React, { useState } from "react";

function Filter({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <div className="row form-div justify-content-end align-items-center">
      <label className="col-auto">Enter a job title or:</label>
      <div className="col-auto">
        <input
          className="form-control"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-auto">
        <button className="btn btn-primary" onClick={handleSearchClick}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Filter;
