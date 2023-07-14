import { connectToDB } from "@/utils/database";
import Job from "@/models/job";

export const POST = async (request) => {
  	const { formData } = await request.body;

  	try {
    	await connectToDB();
		
    	const newJob = new Job(formData);
    	
		await newJob.save();
		return new Response(JSON.stringify(newJob), { status: 201 });
  	} catch (error) {
    	return new Response("Failed to create job", { status: 500 });
  	}
};