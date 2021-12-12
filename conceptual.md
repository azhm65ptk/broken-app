### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
> 	asynchronous callbacks.
> 	Promises.
> 	async/await

- What is a Promise?
> one time gurantee of future value.
> an object which can be in one of the three states
> Pending/Resolved/rejected

- What are the differences between an async function and a regular function?
> async function always returns promises
> async function need a await keyword which pauses the exectuion of the async function
> await keywords waits for promises to resolve and extracts its resolved values, 
> await keyword is like a pause button for async function

- What is the difference between Node.js and Express.js?
>  **Node.js**: Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. Most of the people are confused and understand it’s a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Wallmart and so on.

> **Express.js**: Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.

- What is the error-first callback pattern?

- What is middleware?
> code that runs in the middle of the request/response cycle
> In express, middleware are functions that get access to the req and res objects and can also call the next functions
> express.json() is an example of middleware

- What does the `next` function do?
> if we do not include next, we will not make it to the next route
> we are not passing anything to next
> argument that passed to next, Express always treats as an error

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
