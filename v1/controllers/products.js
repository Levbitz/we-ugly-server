

// import Jireh from '../modals/modals.js'
// import ServiceList from '../modals/services.js';
// import  JobList from '../modals/jobs.js';
// import Jireh from "../modals/modals.js";
// jobs
//post single job start

import product from "../modal/products.js";

export const  getAllProductV1 =  async(req ,res)=>{
  try {
    const products = await product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


export const postProductV1 = async (req, res) => {
  console.log(req.body);
  try {
   
    const newProduct = new product(req.body);
    await newProduct.save();
    console.log(newProduct);

    res.status(200).json({ message: newProduct ,
      id: newProduct._id,
      status: "success",
    });
  } catch (error) {
    console.error(error);

    // If there's an error, respond with a JSON error message
    res.status(500).json({ error:error });
  }
};


// //edit Job

// // export const  editJob  = async(req ,res) =>{

// //   if (!req.body.id) {
// //     return res.status(400).json({ error: 'Job ID is required' });
// //   }
// //     try {
      
// //         const updatedJob = await Jireh.findByIdAndUpdate(req.body.id, req.body, { new: true });
// //         res.status(200).json({
// //           status: "success",
// //           message: updatedJob });
// //       } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ error: 'Internal Server Error' });
// //       }
// // }

// export const editJob = async (req, res) => {
//   // Check if the job ID is provided in the request body
//   if (!req.body.id) {
//     return res.status(400).json({ error: 'Job ID is required' });
//   }

//   try {
//     // Extract the job ID from the request body
//     const { id, ...updateFields } = req.body;

//     // Filter out fields that are empty strings or null
//     const validFields = Object.entries(updateFields).reduce((acc, [key, value]) => {
//       if (value !== "" && value !== null && value !== undefined) {
//         acc[key] = value;
//       }
//       return acc;
//     }, {});

//     // Find the job by ID and update it with the valid fields
//     const updatedJob = await Jireh.findByIdAndUpdate(id, validFields, { new: true });

//     // If the job is not found, return a 404 response
//     if (!updatedJob) {
//       return res.status(404).json({ error: 'Job not found' });
//     }

//     // Return the updated job in the response
//     res.status(200).json({
//       status: "success",
//       message: updatedJob
//     });
//   } catch (error) {
//     // Log the error and return a 500 response for internal server errors
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// export const deleteJob = async (req, res) => {
//   try {
//     const deletedJob = await Jireh.findByIdAndDelete(req.params.id);
//     res.status(200).json({
//       status: "success",
//       message: deletedJob });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
// export const deleteService = async (req, res) => {
//   try {
//     const deletedService = await Jireh.findByIdAndDelete(req.params.id);
//     res.status(200).json({ 
//       message: deletedService,

//       status: "success",
//      });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };




// export const getAllJobs = async (req, res) => {
//   try {
//     // Assuming the filter parameters are passed in the query string
//     const { category, state, city, town, type, userId, exprience, workPlaceType, jobType } = req.query;

//     // Build the filter object based on provided parameters
//     console.log(req.query);
//     const filter = {};
// if(category !== undefined) filter.category = category;
//     if (state !== undefined) filter.state = state;
//     if (city !== undefined) filter.city = city;
//     if (town !== undefined) filter.town = town;
//     if (workPlaceType !== undefined) filter.workPlaceType = workPlaceType;
//     if (exprience !== undefined) filter.exprience = exprience;
//     if (jobType !== undefined) filter.jobType = jobType;

//     // Query the database based on the filter condition
//     let filteredResults;

//     if (Object.keys(filter).length === 0) {
//       // If the filter is empty, return all jobs
//       filteredResults = await Jireh.find({ type: "job" });
//     } else {
//       // If the filter is not empty, return queried jobs
//       filteredResults = await Jireh.find({ ...filter, type: "job" });
//     }

//     // Send the filtered results as the API response
//     res.json(filteredResults);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
// //get  all  jobs end

// //get all my jobs
// export  const getMyJobs = async (req, res) => {
//   // console.log(req.params);
//   // res.status(200).json(req.params);
//   try {
//     const jobs = await Jireh.find({ userId: req.params.userId });
//     res.status(200).json(jobs);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ 
//       error: "Internal Server Error",
//       userId: req.params.userId,
//      });
//   }
// }

// // get  single job
// export const getJob = async (req, res) => {
//   try {
//     const job = await Jireh.findById(req.params.id);
//     res.status(200).json(job);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }




// // services


// export const postService = async (req, res) => {
//   // console.log(req.body);
//   // res.status(200).json(req.body);
//   try {
   
//     const newService = new Jireh(req.body);
//     await newService.save();
//    // console.log(newJob);

//     res.status(200).json({ message: newService ,
//       id: newService._id,
//       status: "success",
//     });
//   } catch (error) {
//     console.error(error);

//     // If there's an error, respond with a JSON error message
//     res.status(500).json({ error:error });
//   }
// };




// export const addJob = async (req, res) => {
//   try {
//     const existingJob = await JobList.findOne({ name: req.body.name });

//     if (existingJob) {
//       // If the name already exists, respond with a message
//       res.status(400).json({ message: 'Job with this name already exists', status: 'error' });
//     } else {
//       // If the name doesn't exist, add the new job to the database
//       const newJob = new JobList(req.body);
//       await newJob.save();

//       res.status(200).json({
//         message: newJob,
//         id: newJob._id,
//         status: 'success',
//       });
//     }
//   } catch (error) {
//     console.error(error);

//     // If there's an error, respond with a JSON error message
//     res.status(500).json({ error: error });
//   }
// };





// //sub SubCategories

// // export const getAllJobsSubCategories = async (req, res) => {
// //   try {
// //     const jobs = await JobList.find();
// //     res.status(200).json(jobs);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: "Internal Server Error" });
// //   }
// // }

// export const getAllJobsSubCategories = async (req, res) => {
//   try {
//     const jobs = await JobList.find().sort({ name: 'asc' });

//     res.status(200).json(jobs);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// //services

// export const addService = async (req, res) => {
//   try {
//     const existingService = await ServiceList.findOne({ name: req.body.name });

//     if (existingService) {
//       // If the name already exists, respond with a message
//       res.status(400).json({ message: 'Job with this name already exists', status: 'error' });
//     } else {
//       // If the name doesn't exist, add the new job to the database
//       const newService = new ServiceList(req.body);
//       await newService.save();

//       res.status(200).json({
//         message: newService,
//         id: newService._id,
//         status: 'success',
//       });
//     }
//   } catch (error) {
//     console.error(error);

//     // If there's an error, respond with a JSON error message
//     res.status(500).json({ error: error });
//   }
// };

// export const deleteServiceSubCategory  = async (req, res) => {

//   console.log(req.params);
//   try {
//     const deletedService = await ServiceList.findByIdAndDelete(req.params.id);
//     res.status(200).json({
//       message: deletedService,

//       status: "success",
//      });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };


// export const editServiceSubCategory = async (req, res) => {
//   console.log(req.params);
//   console.log(req.body);
//   const {name} = req.body;
//   const {id} = req.params;
//   try {
//     const updatedService = await ServiceList.findByIdAndUpdate(id,{name},{new:true});
//     res.status(200).json({
//       message: updatedService,

//       status: "success",
//      });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
  
// };






// export const getAllServicesSubCategories = async (req, res) => {
//   try {
//     const services = await ServiceList.find().sort({ name: 'asc' });

//     res.status(200).json(services);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
