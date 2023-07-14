import { useState } from 'react';

const AdditionalDetails = ({ formData, onChange }) => {
  	const { additionalDetails } = formData;
  	const [details, setDetails] = useState(additionalDetails);

  	const handleDetailsChange = (event) => {
    	const value = event.target.value;
    	setDetails(value);
    	onChange('additionalDetails', value);
  	};

  	return (
    	<div className="flex flex-col text-primary-red">
    		<h2 className="text-4xl font-bold mb-5">Anything else?</h2>
      	<label className="flex flex-col">
        		Additional information:
        		<textarea
          		value={details}
          		onChange={handleDetailsChange}
          		placeholder="Enter additional details"
        		/>
      	</label>
    	</div>
  	);
};

export default AdditionalDetails;
