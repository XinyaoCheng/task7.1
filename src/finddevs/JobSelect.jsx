import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/header.css";
import "./css/form-div.css";
import { useNavigate } from 'react-router-dom';
import { UsersContext } from "../context/users.context";

const JobSelect = ({ handleRadioChange }) => {
  const { user } = useContext(UsersContext);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const navigate = useNavigate();
  const radioButtons = document.getElementsByName("jobType")

  const handleEmploymentSelection = () => {
    if(user === null){
      alert("Please Login in first")
      radioButtons.forEach((radioButton) => {
        if (radioButton.value === "Freelance") {
          radioButton.checked = true; 
        }else{
          radioButton.checked=false;
        }
      });  
    }else if (user.subscripted === 0) {
      // user has no subcription
      console.log("订阅："+user.subscripted)
      setShowSubscriptionModal(true);
      radioButtons.forEach((radioButton) => {
        if (radioButton.value === "Freelance") {
          radioButton.checked = true; 
        }else{
          radioButton.checked=false;
        }
      }); 
    }
  };

  const handleSubscriptionConfirmation = (subscribe) => {
    setShowSubscriptionModal(false); // 关闭模态框
    if (subscribe) {
      navigate('/subscribe');
    } else {
      radioButtons.forEach((radioButton) => {
        if (radioButton.value === "Freelance") {
          radioButton.checked = true; 
        }else{
          radioButton.checked=false;
        }
      });
    }
  };

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
                onChange={handleEmploymentSelection}
              />
              Employment
            </label>
          </div>
        </div>
      </form>
      {showSubscriptionModal && (
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Subscription Required</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => handleSubscriptionConfirmation(false)}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                You need to subscribe to access this feature. Do you want to
                proceed to the subscription page?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleSubscriptionConfirmation(true)}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => handleSubscriptionConfirmation(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default JobSelect;
