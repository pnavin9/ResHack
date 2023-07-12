## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# Project structure 🏗

I've used this architecture on multiple larger projects in the past and it performed really well.

There are two special root folders in `src`: `App` and `shared` (described below). All other root folders in `src` (in our case only two: `Auth` and `Project`) should follow the structure of the routes. We can call these folders modules.

The main rule to follow: **Files from one module can only import from ancestor folders within the same module or from `src/shared`.** This makes the codebase easier to understand, and if you're fiddling with code in one module, you will never introduce a bug in another module.

<br>

| File or folder   | Description                                                                                                                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/index.jsx`  | The entry file. This is where we import React render the App into the root DOM node.                                                                                                                 |
| `src/index.html` | The only HTML file in our App. All scripts and styles will be injected here by Webpack.                                                                                                              |
| `src/App.js`        | Main application routes, components that need to be mounted at all times regardless of current route, global css styles, fonts, etc. Basically anything considered global / ancestor of all modules. |
| `src/Components`       | Responsible for Creating all of the User Interface                                                                                                                                             |
| `src/Components/Resume`    | Form modules to render the input form                                                                                                                                                      |
| `src/Components/PDFViewer`     | Consists of Two designs of PDF Viewers. One is a card used in template Gallery and the other is used for viewing the resume along with the input form.                            |
