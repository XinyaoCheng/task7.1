import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/header.css";
import "./css/form-div.css";
import { uploadImage } from "../utils/firebase";


const ProjectCon = ({ handleFormChange }) => {
  const [imageAsFile, setImageAsFile] = useState('')
  const [formData, setFormData] = useState({
    projectLength: "",
    maxPay: "",
    minPay: "",
    workingHours: "",
    imageUrl: ""
  });
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    console.log("Input name:", name);
    setFormData({
      ...formData,
      [name]: value,
    });
    handleFormChange(name, value);
  };

  const handleImageAsFile = async (e) => {
    const file = e.target.files[0];
    setImageAsFile(imageFile => (file))
  };
  const handleFirebaseUpload = async (e) => {
    e.preventDefault();
    console.log('start to upload');
    if (imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof (imageAsFile)}`);
    }
    try {
      const imageUrl = await uploadImage(imageAsFile, (progress) => {
        setUploadProgress(progress);
      });

      console.log('Image uploaded successfully!', imageUrl);

      setFormData((prevFormData) => ({
        ...formData,
        imageUrl: imageUrl,
      }));
      handleFormChange('imageUrl', imageUrl);
    } catch (error) {
      alert('Error uploading image:', error);
    }
  };


  return (
    <div className="d-grid gap-2">
      <div className="header_container">
        <h3>Project Condition</h3>
      </div>

      <form>
        <div className="row form-div">
          <label className="col-6 col-sm-2 align-self-start">
            Project length
          </label>
          <div className="col-6 col-sm-4 align-self-start">
            <input
              className="mx-3 form-control"
              type="text"
              name="projectLength"
              style={{ width: "50%" }}
              value={formData.projectLength}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row form-div row-cols-auto">
          <label className="col-6 col-sm-2 align-self-start">Payment</label>
          <div className="col-6 col-sm-6 row">
            <label className="col-6 col-sm-1">Max</label>
            <input
              className="mx-3 col-6 col-sm-1 form-control"
              type="text"
              name="maxPay"
              style={{ width: "30%" }}
              value={formData.maxPay}
              onChange={handleInputChange}
            />
            <label className="col-6 col-sm-1">Min</label>
            <input
              className="mx-3 col-6 col-sm-1 form-control"
              type="text"
              name="minPay"
              style={{ width: "30%" }}
              value={formData.minPay}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row form-div">
          <label
            className="col-6 col-sm-3 align-self-start"
            style={{ width: "19%" }}
          >
            Working Hours
          </label>
          <div
            className="col-6 col-sm-4 row input-group align-self-center"
            style={{ width: "19%" }}
          >
            <input
              className="form-control col-2 col-sm-4"
              type="text"
              name="workingHours"
              aria-describedby="basic-addon2"
              value={formData.workingHours}
              onChange={handleInputChange}
            />
            <span class="input-group-text col-6 col-sm-1 " id="basic-addon2">
              h
            </span>
          </div>
        </div>
        <div className="row form-div">
          <label
            className="col-6 col-sm-3 align-self-start"
            style={{ width: "19%" }}
          >
            Add an image:
          </label>
          <div
            className="col-6 col-sm-4 row input-group align-self-center"
            style={{ width: "30%" }}>

            <label for="formFile" class="form-label" />
            <input
              class="form-control col-2 col-sm-4"
              type="file"
              id="formFile"
              onChange={handleImageAsFile}
            />
          </div>
          <button
            type="button"
            class="btn btn-outline-primary uploadButton btn-lg"
            onClick={handleFirebaseUpload}
          >Upload</button>


        </div>
        <div className="row form-div">
          <div
            className="progress"
            role="progressbar"
            aria-label="Segment one"
            aria-valuenow={uploadProgress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              width: `${uploadProgress === 100 ? 10 : uploadProgress}%`,
            }}
          >
            <div
              className={`progress-bar ${uploadProgress === 100 ? 'bg-success' : ''}`}
              style={{
                width: `${uploadProgress}%`,
              }}
            >
              {uploadProgress === 100 && (
                <span className="progress-text">Upload Finished</span>
              )}
            </div>
          </div>
        </div>
      </form >
    </div >
  );
};

export default ProjectCon;
