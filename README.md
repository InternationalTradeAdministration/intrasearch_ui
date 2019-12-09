# Intrasearch UI

This is a [React](https://facebook.github.io/react/)+[Redux](http://redux.js.org/) front-end JS app which provides a search interface and results page for the Drupal Intrasearch project.

## Setup
Install Node.js (this app was developed with v12.2.0).
Then, install dependencies with `npm install`.

Then, `npm run start` runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Running tests
In one terminal tab, launch server with `npm run start`.  
In another terminal tab, launch tests with `npm run test`.  

## Adding it to a page as a plug-in
1. Host the JS and CSS files
2. Add the following lines to the `<head>` of the html doc:

    ```html
    <link rel="stylesheet" type="text/css" href="intrasearch_ui.css">
    <script type="text/javascript" src="intrasearch_ui.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        var divID = 'searchContainer';
        window.Explorer.renderIntrasearchUI(divID);
      });
    </script>
    ```

3. Input the appropriate div ID into the script (or leave `var divID = 'searchContainer';` as-is).
4. Place the element `<div id="searchContainer"></div>` where the taxonomy container should appear in the `<body>`.

## Build and Deploy to GitHub Pages
`npm run build && npm run deploy`


## Additional Info
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and then ejected to enable customization of webpack.

---------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and was `npm eject`ed.