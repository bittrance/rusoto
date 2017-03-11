initSidebarItems({"enum":[["CancelJobError","Errors returned by CancelJob"],["CreateJobError","Errors returned by CreateJob"],["GetShippingLabelError","Errors returned by GetShippingLabel"],["GetStatusError","Errors returned by GetStatus"],["ListJobsError","Errors returned by ListJobs"],["UpdateJobError","Errors returned by UpdateJob"]],"struct":[["Artifact","A discrete item that contains the description and URL of an artifact (such as a PDF)."],["CancelJobInput","Input structure for the CancelJob operation."],["CancelJobOutput","Output structure for the CancelJob operation."],["CreateJobInput","Input structure for the CreateJob operation."],["CreateJobOutput","Output structure for the CreateJob operation."],["GetShippingLabelInput",""],["GetShippingLabelOutput",""],["GetStatusInput","Input structure for the GetStatus operation."],["GetStatusOutput","Output structure for the GetStatus operation."],["ImportExportClient","A client for the AWS Import/Export API."],["Job","Representation of a job returned by the ListJobs operation."],["ListJobsInput","Input structure for the ListJobs operation."],["ListJobsOutput","Output structure for the ListJobs operation."],["UpdateJobInput","Input structure for the UpateJob operation."],["UpdateJobOutput","Output structure for the UpateJob operation."]],"type":[["APIVersion","Specifies the version of the client tool."],["ArtifactList","A collection of artifacts."],["Carrier","Name of the shipping company. This value is included when the LocationCode is \"Returned\"."],["City","Specifies the name of your city for the return address."],["Company","Specifies the name of the company that will ship this package."],["Country","Specifies the name of your country for the return address."],["CreationDate","Timestamp of the CreateJob request in ISO8601 date format. For example \"2010-03-28T20:27:35Z\"."],["CurrentManifest","The last manifest submitted, which will be used to process the job."],["Description","The associated description for this object."],["ErrorCount","Number of errors. We return this value when the ProgressCode is Success or SuccessWithErrors."],["ErrorMessage","The human-readable description of a particular error."],["GenericString",""],["IsCanceled","Indicates whether the job was canceled."],["IsTruncated","Indicates whether the list of jobs was truncated. If true, then call ListJobs again using the last JobId element as the marker."],["JobId","A unique identifier which refers to a particular job."],["JobIdList",""],["JobType","Specifies whether the job to initiate is an import or export job."],["JobsList","A list container for Jobs returned by the ListJobs operation."],["LocationCode","A token representing the location of the storage device, such as \"AtAWS\"."],["LocationMessage","A more human readable form of the physical location of the storage device."],["LogBucket","Amazon S3 bucket for user logs."],["LogKey","The key where the user logs were stored."],["Manifest","The UTF-8 encoded text of the manifest file."],["ManifestAddendum","For internal use only."],["Marker","Specifies the JOBID to start after when listing the jobs created with your account. AWS Import/Export lists your jobs in reverse chronological order. See MaxJobs."],["MaxJobs","Sets the maximum number of jobs returned in the response. If there are additional jobs that were not returned because MaxJobs was exceeded, the response contains IsTruncatedtrue/IsTruncated. To return the additional jobs, see Marker."],["Name","Specifies the name of the person responsible for shipping this package."],["PhoneNumber","Specifies the phone number of the person responsible for shipping this package."],["PostalCode","Specifies the postal code for the return address."],["ProgressCode","A token representing the state of the job, such as \"Started\"."],["ProgressMessage","A more human readable form of the job status."],["Signature","An encrypted code used to authenticate the request and response, for example, \"DV+TpDfx1/TdSE9ktyK9k/bDTVI=\". Only use this value is you want to create the signature file yourself. Generally you should use the SignatureFileContents value."],["SignatureFileContents","The actual text of the SIGNATURE file to be written to disk."],["StateOrProvince","Specifies the name of your state or your province for the return address."],["Street1","Specifies the first part of the street address for the return address, for example 1234 Main Street."],["Street2","Specifies the optional second part of the street address for the return address, for example Suite 100."],["Street3","Specifies the optional third part of the street address for the return address, for example c/o Jane Doe."],["Success","Specifies whether (true) or not (false) AWS Import/Export updated your job."],["TrackingNumber","The shipping tracking number assigned by AWS Import/Export to the storage device when it's returned to you. We return this value when the LocationCode is \"Returned\"."],["URL","The URL for a given Artifact."],["ValidateOnly","Validate the manifest and parameter values in the request but do not actually create a job."],["WarningMessage","An optional message notifying you of non-fatal issues with the job, such as use of an incompatible Amazon S3 bucket name."]]});