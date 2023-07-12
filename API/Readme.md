# Project structure 🏗

The API codebase is fairly simple and should be easy enough to understand.

<br>

| File or folder                       | Description                                                                                                                                                                                                                 |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

| `Resume Bulder API Specification.pdf`| Documentation of this API                               |
| `server.js`                          | The entry file. This is where we initialize express.                                                                                                                                                                        |
| `routes/generateRoutes.js`           | This is where we define all routes.                                                                                                                                                                                         |
| `ResumeTemplates`                    | Stores all the Available templates.                                                                                                                                                                                         |
| `generatePDF.js`                     | Makes call to Adobe Generate API to fetch resume.pdf                                                                                                                                                                        |
| `controller/generateController.js`   | Controllers listen to client's requests and work with entities to fetch resume.pdf.                                                                                                                                         |
| `controller/findTemplate.js`         | Searches for the given template from the available templates.                                                                                                                                                               |
| `controller/reorganiseData.js`       | Reorganises input request to pass to Adobe API                                                                                                                                                                              |
| `controller/templateGallery.js`      | Fetches all the PDF templates available in the ResumeTemplates                                                                                                                                                              |
</br>

