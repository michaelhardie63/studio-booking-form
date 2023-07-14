import React from "react";

const SubmitButton = ({ handleNext, handlePrevious, submitJob }) => {
    return (
      <div className="w-full flex text-black">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={submitJob}>Submit</button>
      </div>
    );
  };
  
  export default SubmitButton;