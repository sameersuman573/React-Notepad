// basics----



// link- https://github.com/acdlite/react-fiber-architecture?tab=readme-ov-file#what-is-reconciliation 
// when our javascript injects it is called hydration

// The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.



// What is reconciliation?
// reconciliation
// The algorithm React uses to diff one tree with another to determine which parts need to be changed.
// update
// A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

// Actually re-rendering the entire app on each change only works for the most trivial apps; in a real-world app, it's prohibitively costly in terms of performance. React has optimizations which create the appearance of whole app re-rendering while maintaining great performance. The bulk of these optimizations are part of a process called reconciliation.



// Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.



// React Fiber is a new reconciliation algorithm that was introduced in React 16. It is designed to improve the performance and responsiveness of React applications.
// Fiber works by breaking down the rendering process into smaller chunks, which can be paused and resumed as needed. This allows React to prioritize rendering the most important parts of the UI first, and to avoid blocking the main thread.
 


// When React needs to render a component, it creates a fiber node for the component and its children. React then traverses the fiber tree, updating each fiber node as needed.
// If a fiber node needs to be updated, React will call the component's render() method. The render() method will return a new virtual DOM tree. React will then compare the new virtual DOM tree to the existing virtual DOM tree, and update the real DOM as needed.
// Fiber also introduces a new concept called incremental rendering. Incremental rendering allows React to split the rendering process into smaller chunks, which can be paused and resumed as needed. This allows React to prioritize rendering the most important parts of the UI first, and to avoid blocking the main thread.
//  to improve perfomenace fiber includes keys -- Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."


// keypoints
// In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
// Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
// A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you



