
// basics    ----


//  In simple words: index.html is where all your UI is rendered by React and index.js is where all your JS codes exist. So browser, first get index.html and then renders the file. then JS in index.js is responsible for all the logical rendering of UI, which takes element with id root to be its base element for rendering all the UIs.

// Like in vanilla JS, React searches for element with ID 'root' and keeps all the UI to be rendered inside that element using the virtual DOM concept. You can view this concept.

// After you complete the React development, you have to use a build tool to build React App by npm build or yarn build, which merges all your codes to single file. So when a client requests your site, the server sends .html with the JS files. So, at last, JS files manipulates the single .html file.

// About the create-react-app, react-scripts package that comes when you create a react app with npx create-react-app handles all the requirements to serve a development serve using node. All the files of packages are inside node_moudles.

// To render a React element, first pass the DOM element to ReactDOM.createRoot(), then pass the React element to root.render():
// reat make its own Dom  
// App.js : This is the main component of your React application. It contains the structure and logic for your app’s user interface. You can define the layout, components, and functionality within this file.




// if you are creating react app then write a file name with jsx suffix

// capitalize all the file names 

// we need to mind the import and export in each and every file

// all the elements should have a common parent they must be wrapped under a single duv or parent

