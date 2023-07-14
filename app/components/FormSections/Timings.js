import React from 'react';

const Timings = ({ formData, onChange }) => {
  	const { draftDueDate, dueDate, flexibleDate, } = formData;

  	const handleFieldChange = (field, value) => {
    	onChange(field, value);
  	};

  	return (
    	<div className="flex flex-col text-primary-red">
    		<h2 className="text-4xl font-bold mb-5">When would you like it by?</h2>
      	<div className="flex flex-row items center">
      		<label className="flex flex-col pr-12">
          		Draft due date:
         		<input
         		   type="date"
            		className="w-[180px]"
            		value={draftDueDate}
            		onChange={(e) => handleFieldChange('draftDueDate', e.target.value)}
          		/>
        		</label>

        		<label className="flex flex-col">
          		Due date:
          		<input
            		type="date"
            		className="w-[180px]"
            		value={dueDate}
            		onChange={(e) => handleFieldChange('dueDate', e.target.value)}
          		/>
        		</label>

	        	<label className="flex flex-row items-center ml-4 mt-7">
   		   	<input
            		type="checkbox"
            		checked={flexibleDate}
            		onChange={(e) => handleFieldChange('flexibleDate', e.target.checked)}
          		/>
          		Flexible date?
        		</label>     
        	</div>
    	</div>
  	);
};

export default Timings;
