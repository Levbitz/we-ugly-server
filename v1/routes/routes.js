import express from 'express';
import {getAllProductV1, postProductV1} from '../controllers/products.js'


const ProductRoutesV1 = express.Router();





// // jobs

ProductRoutesV1.route('/post_product').post(postProductV1)
ProductRoutesV1.route('/all_product').get(getAllProductV1)

// // services
// ServiceRoutesV2.route('/post_service').post(postService)
// ServiceRoutesV2.route('/edit_service').put(editService)
// ServiceRoutesV2.route('/delete_service/:id').delete(deleteService)
// ServiceRoutesV2.route('/services').get(getAllServices)
// ServiceRoutesV2.route('/services/:id').get(getSingleService)
// ServiceRoutesV2.route('/current_user_services/:userId').get(getCurrentUserServices)
// ServiceRoutesV2.route('/service_search').post(newServiceSearch)
// ServiceRoutesV2.route('/service_filter').post(serviceFilter)

// JobsRoutesV2.route('/recommended_jobs').get(recommendedJobs)
// JobsRoutesV2.route('/all_jobs').get(getAllJobsV2)
// //JobsRoutesV2.route('/jobs_filter').get(jobFilter)
// JobsRoutesV2.route('/my_job/:id').get(getSingleJob)
// JobsRoutesV2.route('/current_user_jobs/:userId').get(getCurrentUserJobs)
// JobsRoutesV2.route('/job_search_v2').post(newJobSearch)
// JobsRoutesV2.route('/service_search_v2').post(newServiceSearch)



export default ProductRoutesV1
