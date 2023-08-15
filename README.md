# hospital-api
Hospital or Covid-19 API API for Doctors of a Hospital which has been allocated by the govt. for testing, quarantine as well as well being of COVID-19 patients.  

# Setup the Project
Clone or Download the Repo.
Run npm start to ignite the project.
Use Postman to test the api.

# Routes
Register a Doctor: [POST]: /api/v1/doctor/register

Login for Doctor: [POST]: /api/v1/doctor/login

Register a patient: [POST]: /api/v1/patient/register

Create Patient report: [POST]: /api/v1/patient/:id/create_report

Fetch All Reports of a Patient [GET]: /api/v1/patient/:id/all_reports

Fetch All Reports Based on a Status: [GET]: /api/v1/report/:status

# tools Used:
Node.js
Express js
MongoDB Atlas
