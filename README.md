<h1 align="center">An easy-to-use user friendly resume generator</h1>


<h3 align="center">
  <a href="https://github.com/pnavin9/ResHack/tree/master/client">View client</a> |
  <a href="https://github.com/pnavin9/ResHack/tree/master/API">View API</a>
</h3>

![Tech logos](https://i.ibb.co/DVFj8PL/tech-icons.jpg)

![App screenshot](https://i.ibb.co/W3qVvCn/jira-optimized.jpg)

## What is this and who is it for 🤷‍♀️

This resume builder utilizes the robust Adobe Generate API to create a user-friendly interface for individuals to construct resumes. 

By leveraging the power of the Adobe API, users can quickly build professional resumes with ease and efficiency.

## Features

- Scalable, and easy-to-understand project structure
- Written in modern React, only functional components with hooks
- Client and API are written in JavaScipt
- User-friendly interface
- Adding newer templates is as simple as copy-pasting 

## Prerequisites

Before running this application, you must obtain the Adobe Generate API. You can access a free trial of the API from the following website: [Adobe Document Services API](https://developer.adobe.com/document-services/apis/doc-generation/).

## Installation

To run the Reshack web application, please follow these steps:

1. Install the package-JSON for the API and client components. You can do this by executing the following command in your terminal:

   ```bash
   npm install
   ```

2. After installing the package-JSON, open two separate terminals.

3. In the first terminal, navigate to the client directory and start the client application:

   ```bash
   cd client
   npm start
   ```

4. In the second terminal, navigate to the API directory and start the API server:

   ```bash
   cd API
   npm start dev
   ```

5. Once both the client and API servers are running, you can access the Reshack application through your web browser at ```localhost:3000/```

You can refer to the provided curl request samples if you only want to run the API without the client application. The `template_id` parameter represents the name of the template you wish to use.

## Adding New Templates

If you would like to add a new resume template to Reshack, follow these steps:

1. Create a new template folder with the desired template's name inside the `API/resumetemplate` directory.

2. Ensure that the new template follows the same pattern as the provided sample templates.

3. Once you have added the new template folder, the API will automatically detect and fetch it. You will then be able to use the new template when creating resumes.
## What's missing?

There are features missing from this showcase product that should exist in a real product:

- Storing user data and providing user authentication ( This can be done using JWT)
- Template gallery can be stored and fetched from a cloud service provided instead of storing locally.
- Responsiveness of the front end can be improved

## License

[MIT](https://opensource.org/licenses/MIT)

## Contact

If you have any questions or need assistance with Reshack, please feel free to contact Navin Patwari at patwarinavin9@gmail.com.

This project was developed as part of the Adobe Papyrus Nebule Hackathon by Navin Patwari.

<hr>

<h3>
  <a href="https://github.com/pnavin9/ResHack/tree/master/client">View client</a> |
  <a href="https://github.com/pnavin9/ResHack/tree/master/API">View API</a>
</h3>
