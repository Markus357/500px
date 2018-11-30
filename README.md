## Demo Overview

This demo is a quick proof-of-concept for a Photo Showcase using the 500px photo API.
The project is built in React using the [Create React App](https://github.com/facebook/create-react-app) tool for bootstrapping. It makes use of React's new Context API for passing the photo data to the PhotoShowcase component via a common higher-order component pattern.

In order to not re-invent the wheel, the demo makes use of a 3rd-party photo grid plugin called [react-grid-gallery](https://benhowell.github.io/react-grid-gallery) and wires-up the photo data to this plugin creating a photo-mosaic gallery with a built-in lightbox for full-screen viewing.

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
