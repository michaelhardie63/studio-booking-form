import { Schema, model } from "mongoose";

const JobSchema = new Schema({
  	projectTitle: String,
  	date: String,
  	author: String,
  	keyStakeholders: String,
  	dueDate: String,
  	flexibleDate: Boolean,
  	campaignLiveDate: String,
  	draftDueDate: String,
  	briefSummary: String,
  	DM: Boolean,
  	Brochure: Boolean,
  	Flyer: Boolean,
  	Poster: Boolean,
  	PrintAd: Boolean,
  	BannerSignage: Boolean,
  	CreativeConcepts: Boolean,
  	RetouchResize: Boolean,
  	Other: Boolean,
	aemAsset: Boolean,
	socialAnimated: Boolean,
	socialStatic: Boolean,
	digitalDisplayBanners: Boolean,
	digitalPOS: Boolean,
	webpageDesign: Boolean,
  	brandDrivers: [String],
  	deliverableName: String,
  	dimensions: String,
  	bleed: String,
  	fileSize: String,
  	format: String,
  	mandatoryInclusions: String,
  	copyText: String,
  	termsAndConditions: String,
});

const Job = model("Job", JobSchema);

export default Job;