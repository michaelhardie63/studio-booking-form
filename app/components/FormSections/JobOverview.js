import "@/styles/styles.css";

const JobOverview = ({ formData, onChange }) => {
  	const { projectTitle, date, author, keyStakeholders, briefSummary, } = formData;

  	const handleFieldChange = (field, value) => {
    	onChange(field, value);
  	};

  	return (
    	<div className="flex flex-col text-primary-red">
    		<h2 className="text-4xl font-bold mb-5">Job overview</h2>
      		<div className="flex flex-col">
        		<label className="flex flex-col mb-4">
          		Project name*:
          		<input
            		type="text"
            		value={projectTitle}
					placeholder="Enter a name for the job..."
            		required
            		onChange={(e) => handleFieldChange('projectTitle', e.target.value)}
          		/>
        		</label>

        		<label className="flex flex-col mb-4">
          		Your name*:
          		<input
            		type="text"
            		value={author}
					placeholder="Please enter your name..."
					required
            		onChange={(e) => handleFieldChange('author', e.target.value)}
          		/>
        		</label>

        		<label className="flex flex-col mb-4">
          		Key stakeholders:
          		<input
            		type="text"
            		value={keyStakeholders}
					placeholder="Add any additional stakeholders..."
            		onChange={(e) => handleFieldChange('keyStakeholders', e.target.value)}
          		/>
        		</label>

        		<label className="flex flex-col mb-4">
          		Date*:
          		<input
            		type="date"
            		className="w-[180px]"
            		value={date}
            		onChange={(e) => handleFieldChange('date', e.target.value)}
          		/>
        		</label>

        		<label className="flex flex-col mb-4">
          		Brief summary*:
          		<textarea
            		value={briefSummary}
					required
            		onChange={(e) => handleFieldChange('briefSummary', e.target.value)}
            		className="w-full h-full p-2"
            		placeholder="Write a brief overview on the project..."
          		/>
        		</label>

    		</div>
    	</div>
  	);
}

export default JobOverview;
