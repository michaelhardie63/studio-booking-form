import React from 'react';

const ReviewJob = ({ formData }) => {
  	return (
    	<div className="text-primary-red">
      	<h2 className="text-4xl font-bold mb-2">Review job brief</h2>
      	<h3 className="text-1xl font-semibold">Overview:</h3>
      	<ul className="mb-4">
        		{formData.projectTitle && <li><span className="text-black">Project title:</span> {formData.projectTitle}</li>}
        		{formData.author && <li><span className="text-black">Brief author:</span> {formData.author}</li>}
        		{formData.keyStakeholders && <li><span className="text-black">Key stakeholders:</span> {formData.keyStakeholders}</li>}
        		{formData.date && <li><span className="text-black">Date:</span> {formData.date}</li>}
        		{formData.briefSummary && <li><span className="text-black">Job summary:</span> {formData.briefSummary}</li>}
      	</ul>

      	<h3 className="text-1xl font-semibold">Timings:</h3>
      	<ul className="mb-4">
        		{formData.draftDueDate && <li><span className="text-black">Draft due date:</span> {formData.draftDueDate}</li>}
        		{formData.dueDate && <li><span className="text-black">Due date:</span> {formData.dueDate}</li>}
        		{formData.flexibleDate && <li><span className="text-black">Flexible date:</span> {formData.flexibleDate}</li>}
      	</ul>

      	<h3 className="text-1xl font-semibold">Deliverables:</h3>
      	<p className="font-semibold">Print:</p>
      	<ul className="mb-4">
        		{formData.DM && <li><span className="text-black">DM:</span> {formData.DM}</li>}
        		{formData.Brouchure && <li><span className="text-black">Broucher:</span> {formData.Brouchure}</li>}
        		{formData.Flyer && <li><span className="text-black">Flyer:</span> {formData.Flyer}</li>}
        		{formData.Poster && <li><span className="text-black">Poster:</span> {formData.Poster}</li>}
        		{formData.PrintAd && <li><span className="text-black">Print ad:</span> {formData.PrintAd}</li>}
        		{formData.BannerSignage && <li><span className="text-black">Banner / signage:</span> {formData.BannerSignage}</li>}
        		{formData.CreativeConcepts && <li><span className="text-black">Creative concepts:</span> {formData.CreativeConcepts}</li>}
        		{formData.RetouchResize && <li><span className="text-black">Retouch / Resizing:</span> {formData.RetouchResize}</li>}
        		{formData.Other && <li><span className="text-black">Other:</span> {formData.Other}</li>}
      	</ul>
      	<p className="text-1xl font-semibold">Digital:</p>
      	<ul className="mb-4">
        		{formData.aemAsset && <li><span className="text-black">AEM asset:</span> {formData.aemAsset}</li>}
        		{formData.socialAnimated && <li><span className="text-black">Social animated:</span> {formData.socialAnimated}</li>}
        		{formData.socialStatic && <li><span className="text-black">Social static:</span> {formData.socialStatic}</li>}
        		{formData.digitalDisplayBanner && <li><span className="text-black">Digital display banners:</span> {formData.digitalDisplayBanner}</li>}
        		{formData.digitalPOS && <li><span className="text-black">Digital POS:</span> {formData.digitalPOS}</li>}
        		{formData.webpageDesign && <li><span className="text-black">Webpage design:</span> {formData.webpageDesign}</li>}
      	</ul>
      
     		<h3 className="text-1xl font-semibold">Copy / Text:</h3>
      	<ul className="mb-4">
        		{formData.headline && <li><span className="text-black">Headline:</span> {formData.headline}</li>}
        		{formData.subHeading && <li><span className="text-black">Sub heading:</span> {formData.subHeading}</li>}
        		{formData.bodyCopy && <li><span className="text-black">Body copy:</span> {formData.bodyCopy}</li>}
        		{formData.cta && <li><span className="text-black">Call To Action:</span> {formData.cta}</li>}
        		{formData.terms && <li><span className="text-black">Terms & conditions:</span> {formData.terms}</li>}
      	</ul>

      	<h3 className="text-1xl font-semibold">Brand Drivers:</h3>
      	<ul className="flex flex-col mb-4">
        		{formData.brandDrivers && <li><span className="text-black">{formData.brandDrivers}</span> </li>}
      	</ul>

      	<h3 className="text-1xl font-semibold">Additional information:</h3>
      	<ul className="mb-4">
        		{formData.additionalDetails && <li><span className="text-black">Anything more:</span> {formData.additionalDetails}</li>}
      	</ul>
    	</div>
  	);
};

export default ReviewJob;
