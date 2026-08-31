export const BASE_URL = "http://localhost:8000";

const Auth_body = "/api/auth";
const User_body = "/api/user";
const Job_body = "/api/job";
const Saved_Job_body = "/api/savedJob";
const Application_body = "/api/application";
const Analytics_body = "/api/analytics";
export const API_PATHS = {
  
  AUTH:{
    //--------------------------Auth-------------------------------------

    //1- (POST) Register_User(public - jobseeker + employer)
    REGISTER:`${Auth_body}/register`,

    //2- (POST) Login_User(public - jobseeker + employer)
    LOGIN:`${Auth_body}/login`,

    //4- (GET) Get Users Database record(protected - jobseeker + employer)
    GET_PROFILE: `${Auth_body}/me`,

    //--------------------------User-------------------------------------

    //1- (GET) getPublicProfile(public - jobseeker + employer)
    GET_PUBLIC_PROFILE:(id) => `${User_body}/${id}`,
    
    //2- (PUT) UpdateProfile(protected - jobseeker + employer)
    UPDATE_PROFILE:`${User_body}/profile`,

    //3- (DELETE) DeletResume(protected - jobseeker)
    DELETE_RESUME:`${User_body}/resume`,
  },

  DASHBOARD:{
    //--------------------------Employer Analytics API-------------------------------

    //(GET) getEmployerAnalytics(protected - employer)
    OVERVIEW:`${Analytics_body}/overview`,
  },

  JOBS: {
    //--------------------------Job-------------------------------

    //1- (POST) createJob(protected - employer)
    POST_JOB:`${Job_body}/`,
	
	
    //2- (GET) getJobById(public - jobseeker + employer)
      GET_JOBS_By_ID:(id) => `${Job_body}/${id}`,
    
    //3- (GET) getJobsEmployer(protected - employer)
      GET_JOBS_EMPLOYER:`${Job_body}/get_jobs_employer`,
    
    //4- (GET) getJobs(public - jobseeker + employer)
      GET_ALL_JOBS:`${Job_body}/`,
    
    //5- (PUT) toggleCloseJob(protected - employer)
      TOGGLE_CLOSE:(id) => `${Job_body}/close-job/${id}`,
    
    //6- (DELETE) deleteJob(protected - employer)
      DELETE_JOB:(id) => `${Job_body}/${id}`,

    //7- (PUT) updateJob(protected - employer)
    UPDATE_JOB:(id) => `${Job_body}/${id}`,


    //--------------------------Saved_Job-------------------------------

    //1- (POST) saveJob(protected - jobseeker)
    SAVE_JOB:(jobId) => `${Saved_Job_body}/${jobId}`,
	
    //2- (GET) getMySavedJobs(protected - jobseeker)
      GET_SAVED_JOBS:`${Saved_Job_body}/my`,

    //3- (DELETE) unsaveJob(protected - jobseeker)
    UNSAVE_JOB:(jobId) => `${Saved_Job_body}/${jobId}`,
	
  },

  APPLICATIONS:{

    //--------------------------Application-------------------------------

    //1- (POST) applyToJob(protected - jobseeker)
    APPLY_TO_JOB:(jobId) => `${Application_body}/${jobId}`,

    //2- (GET) getMyApplications(protected - jobseeker)
    GET_MY_APPLICATIONS:`${Application_body}/my_applications`,

    //3- (GET) getApplicationsForJob(protected - employer)
    GET_APPLICATIONS_FOR_JOB:(jobId) => `${Application_body}/job/${jobId}`,

    //4- (GET) getApplicationsById(protected - employer)
    GET_APPLICATIONS_BY_ID:(id) => `${Application_body}/${id}`,

    //5- (PUT) updateStatus(protected - employer)
    UPDATE_STATUS:(id) => `${Application_body}/${id}/status`,

    
  },

  IMAGE:{
    //--------------------------Auth-------------------------------------

    //3- (POST) Upload Avatar(protected-  jobseeker + employer)
    UPLOAD_IMAGE: `${Auth_body}/upload-image`,
  },
};