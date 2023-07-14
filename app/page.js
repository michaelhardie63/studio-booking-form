"use client";
import Image from 'next/image';
import { useState } from 'react';

import { useRouter } from 'next/navigation';
import FormSections from './components/FormSections';
import Header from './components/Header';
import { Alert } from "@mui/material";

import FormSectionTabs from './components/FormSectionTabs';

const IndexPage = () => {
  	const router = useRouter();
  	const [currentSection, setCurrentSection] = useState(0);
  	const [formData, setFormData] = useState({
    	// JobOverview
    	projectTitle: '', author: '', keyStakeholders: '', date: '', briefSummary: '',
    	// Timings
    	draftDueDate: '', dueDate: '', flexibleDate: false,
    	// Deliverables print
    	DM: false, Broucher: false, Flyer: false, Poster: false, PrintAd: false, BannerSignage: false, CreativeConcepts: false, RetouchResize: false, Other: false,
    	// Deliverables digital
		aemAsset: false, socialAnimated: false, socialStatic: false, digitalDisplayBanners: false, digitalPOS: false, webpageDesign: false,
		// Specifications
    	deliverableName: '', dimensions: '', bleed: '', fileSize: '', format: '', mandatoryInclusions: '',
    	// Copy & Text
    	headline: '', subHeading: '', bodyCopy: '', cta: '', terms: '',
    	// BrandDrivers
    	brandDrivers: [],
    	// Form Section 6
    	additionalDetails: '',
	});
  
  	const [submitting, setIsSubmitting] = useState(false);

	const [showAlert, setShowAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState('');

  	const handleFormChange = (field, value) => {
    	setFormData((prevData) => ({
      	...prevData,
      	[field]: value,
    	}));
  	};

  	const handleNext = () => {
		const requiredFields = ['projectTitle', 'author', 'keyStakeholders', 'date', 'briefSummary'];
		const missingFields = requiredFields.filter(field => formData[field].trim() === '');

        if (missingFields.length > 0) {
            setShowAlert(true);
            setAlertMessage(`Please fill in the following fields: ${missingFields.join(', ')}`);
        } else {
            setShowAlert(false);
            // Proceed to the next component
        }
		// Check if all required fields are filled
		const isFilled = requiredFields.every(field => formData[field].trim() !== '');
	
		if (currentSection < FormSections.length - 1 && isFilled) {
			setCurrentSection(currentSection + 1);
		} else if (currentSection === FormSections.length - 1 && isFilled) {
			submitJob();
		}
	};

  	const handlePrevious = () => {
    	if (currentSection > 0) {
      	setCurrentSection(currentSection - 1);
    	}
  	};

  	const submitJob = async () => {
    	setIsSubmitting(true);
  
    	try {
      	const response = await fetch("/api/job/new", {
        		method: "POST",
        		body: JSON.stringify(formData),
        		headers: {
          		"Content-Type": "application/json",
        		},
      	});
  
      	if (response.ok) {
        		router.push('/success');
      	} else {
        		console.error("Failed to create job");
        		setIsSubmitting(false);
      	}
    	} catch (error) {
      	console.error("Failed to create job", error);
      	setIsSubmitting(false);
    	}
  	};

  	const SectionComponent = FormSections[currentSection];

  	return (
		<>
			<Header />
    			<div className="flex items-start justify-between h-screen">
		      		<div className="flex flex-col-reverse items-start justify-between sm:flex-row">
					  	<FormSectionTabs 
		  					currentSection={currentSection} 
							setCurrentSection={setCurrentSection} 
						/>
		  			<div className="sm:w-[800px] flex flex-col w-[400px] pl-12">
						{showAlert && (
                			<Alert severity="error" onClose={() => setShowAlert(false)}>
                    			{alertMessage}
                			</Alert>
            			)}
        				<SectionComponent 
							formData={formData} 
							onChange={handleFormChange} 
							className="flex flex-col w-[800px]"
						/>
        				<div className="w-full flex justify-between my-4">
          					<button
            					className="px-4 py-2 bg-transparent cursor-pointer text-primary-red border-primary-red border-2" 
        						onClick={handlePrevious}
        						disabled={currentSection === 0}
          					>
        						Previous
          					</button>
          					<button
            					className="px-4 py-2 bg-primary-red text-white"
            					onClick={currentSection === FormSections.length - 1 ? submitJob : handleNext}
          					>
            					{currentSection === FormSections.length - 1 ? 'Submit' : 'Next'}
          					</button>
						</div>
        			</div>
      			</div>
				<div className="hidden sm:flex justify-end overflow-hidden">
					<Image 
						src="/fun-biology.svg"
						alt="fun biology"
						className="object-contain"
						width={427}
						height={891}
					/>
				</div>
    		</div>
		</>
  	);
};

export default IndexPage;
