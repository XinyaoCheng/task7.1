import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/submit.css";
import "./css/form-div.css";

const submitButton = ({onSubmit}) => {
  return (
    <div>
      <button 
      type="button" 
      class="btn btn-outline-primary submitButton btn-lg"
      onClick={onSubmit}
      >
        Post
      </button>
    </div>
  );
};

export default submitButton;
