## Demo Overview

This demo is a quick proof-of-concept for a Photo Showcase using the 500px photo API.
The project is built in React using the [Create React App](https://github.com/facebook/create-react-app) tool for bootstrapping. It makes use of React's new Context API for passing the photo data to the PhotoShowcase component via a common higher-order component pattern.

In order to not re-invent the wheel, the demo makes use of a 3rd-party photo grid plugin called [react-grid-gallery](https://benhowell.github.io/react-grid-gallery) and wires-up the photo data to this plugin creating a photo-mosaic gallery with a built-in lightbox for full-screen viewing. (Note: opening a photo in the lightbox is currently throwing a console warning due to an implementation issue with the lightbox plugin. See [here](https://github.com/jossmac/react-images/pull/172#issuecomment-442886374) for more info.)

For paginating the photo results, the demo also makes use of the [react-paginate](https://github.com/AdeleD/react-paginate) plugin which connects to the ImagesProvider context for updating the app's state.

Some testing examples have also been set up in /tests to demonstrate the use of unit-tests, snapshots and data / module mocking. (The coverage is in no way meant to be comprehensive)

### Environment Setup

#### `npm install`

To run the project, first download or clone the repository and run the command `npm install` to fetch the dependencies. (Assumes you have node package manager installed locally)

#### `.env`

Connecting the app to the 500px API requires renaming the `sample.env` file in the root directory to `.env` and adding an API key.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Credits

Mark Davidson

[mdavidson357@gmail.com](mailto:mdavidson357@gmail.com)

[Find me on LinkedIn](https://www.linkedin.com/in/mark-davidson-50202116/)