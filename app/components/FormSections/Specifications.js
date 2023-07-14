import { useState } from 'react';

const Specifications = ({ formData, onChange }) => {
  	const { specs } = formData;
  	const [deliverableName, setDeliverableName] = useState(specs?.deliverableName || '');
  	const [dimensions, setDimensions] = useState(specs?.dimensions || '');
  	const [units, setUnits] = useState(specs?.units || '');
  	const [bleed, setBleed] = useState(specs?.bleed || '');
  	const [fileSize, setFileSize] = useState(specs?.fileSize || '');
  	const [format, setFormat] = useState(specs?.format || '');
  	const [mandatoryInclusions, setMandatoryInclusions] = useState(specs?.mandatoryInclusions || '');
  	const [copyText, setCopyText] = useState(specs?.copyText || '');
  	const [termsAndConditions, setTermsAndConditions] = useState(specs?.termsAndConditions || '');

	const unitOptions = ["px", "mm"];
  	const formats = ["jpg", "png", "gif", "pdf", "svg", "mp4", "mov"];
  	const bleeds = ["3mm", "5mm"];

  	const handleFieldChange = (field, value) => {
    	switch (field) {
      	case 'deliverableName':
        		setDeliverableName(value);
        		break;
      	case 'dimensions':
        		setDimensions(value);
        		break;
      	case 'units':
        		setUnits(value);
        		break;
      	case 'bleed':
        		setBleed(value);
        		break;
      	case 'fileSize':
        		setFileSize(value);
        		break;
      	case 'format':
        		setFormat(value);
        		break;
      	case 'mandatoryInclusions':
        		setMandatoryInclusions(value);
        		break;
      	case 'copyText':
        		setCopyText(value);
        		break;
      	case 'termsAndConditions':
        		setTermsAndConditions(value);
        		break;
      	default:
        	break;
    	}
  	};

  	const handleSubmit = (e) => {
    	e.preventDefault();

	   const specsData = {
      	deliverableName,
      	dimensions,
      	bleed,
      	fileSize,
      	format,
      	mandatoryInclusions,
      	copyText,
      	termsAndConditions,
    	};

    	onChange('specs', specsData);
  	};

  	return (
		<div className="flex flex-col text-primary-red">
			<h2 className="text-4xl font-bold mb-5">What are the specs?</h2>
			<div className="flex flex-col">
				<label className="flex flex-col mb-4">
					Deliverable Name:
					<input
						type="text"
						placeholder="Enter deliverable name..."
						value={deliverableName}
						onChange={(e) => handleFieldChange('deliverableName', e.target.value)}
					/>
				</label>
				<div className="flex flex-row mb-4">
					<label className="flex flex-col">
						Dimensions:
						<input
							type="text"
							placeholder="Enter dimensions..."
							value={dimensions}
							onChange={(e) => handleFieldChange('dimensions', e.target.value)}
						/>
					</label>
					<label className="flex flex-col pl-5">
						Units:
						<select
							value={units} // Assuming units is stored in a state variable named 'units'
							onChange={(e) => handleFieldChange('units', e.target.value)}
							className="w-[70px]"
						>
							{unitOptions.map((unit) => (
								<option key={unit} value={unit}>{unit}</option>
							))}
						</select>
					</label>
				</div>
				<div className="flex flex-row mb-4">
					<label className="flex flex-col">
						Bleed:
						<select
							value={bleed}
							onChange={(e) => handleFieldChange('bleed', e.target.value)}
							className="w-[100px]"
						>
							{bleeds.map((bleed) => (
								<option key={bleed} value={bleed}>{bleed}</option>
							))}
						</select>
					</label>
					<label className="flex flex-col mx-5">
						File Size:
						<input
							type="text"
							className="w-[120px]"
							placeholder=">100kb"
							value={fileSize}
							onChange={(e) => handleFieldChange('fileSize', e.target.value)}
						/>
					</label>
					<label className="flex flex-col">
						Format:
						<select
							value={format}
							onChange={(e) => handleFieldChange('format', e.target.value)}
							className="w-[80px]"
						>
							{formats.map((format) => (
								<option key={format} value={format}>{format}</option>
							))}
						</select>
					</label>
				</div>
				<label className="flex flex-col mb-4 ">
					Mandatory Inclusions:
					<input
						type="text"
						placeholder="Enter mandatory inclusions..."
						value={mandatoryInclusions}
						onChange={(e) => handleFieldChange('mandatoryInclusions', e.target.value)}
					/>
				</label>
			</div>
		</div>
	);
};

export default Specifications;
