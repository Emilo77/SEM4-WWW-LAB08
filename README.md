# Laboratorium 8 - Promises i async
## Promises and asynchronous computations

On this lab you are going to learn and practice execution of asynchronous tasks and promises. Asynchronous tasks do not block the flow of a program and finish their execution eventually in the future (a promise). Once an asynchronous task is finished, we could proceed to call a callback function in order execute the next part of a program that requires the execution of such an asynchronous task. An instance of this could happen in an application where we would like to send an automatic email to user johndoe. Such case could have the following flow:

1) Make a query in the `database` to get the email of user johndoe. 
2) Wait for the result of the query in order to get the desired email. 
3) Call a function that sends an email with a given message. 
4) Wait for confirmation that email has been sent.

In items *1.* and *4.* we are waiting for a promised value/execution.
### Task 0

Download the zip file an execute `npm install` while being in `Promises` folder. Once it is completed, run `npm start` and check the result of calling `function f0()` from file `/myLib/myModule.js` on the console. Understand the function and explain its result with help of literature from the internet about `Promises`. For instance, [Understanding Javascript Promises](https://nodejs.dev/learn/understanding-javascript-promises) or[ Using Promises](https://nodejs.dev/learn/understanding-javascript-promises).

For the next tasks we are gonna use the provided Express application and you can check the results by running `npm start` and then going to `localhost:3000` on a browser. Changes made on the app are automatically applied because of using nodemon.
### Task 1

If you click on *Check Part 1* on the main page at `localhost:3000`, you should get a message like `Result: [object Promise]`. Fix part `router.get('/part1', ... in /routes/index.js` file so that we return the value of `promise1` from `/myLib/myModule.js` file.
### Task 2

If you click on *Check Part 2* on the main page at `localhost:3000`, you should get a message like `Result: [object Promise][object Promise]`. First fix `functionPart2` in `myLib/myModule.js` and then fix `router.get('/part2', ...` in `/routes/index.js` file so that we return the concatenation of the values returned by `promise2a` and `promise2b`.
### Task 3

If you click on *Check Part 3* with *good123* or *Check Part 3* with *good12* on the main page at `localhost:3000`, you should get the message `Not implemented yet`. Provide the definition of `functionPart3` as described in `myLib/myModule.js`. Once this is done, fix `router.get('/part3/:word',...` in `/routes/index.js` file as described there.
### Task 4

In this part we are going to use the file system module from Node.js. For this task you have to chain promises to read multiple files as described in part `router.get('/part4/:file',...` in `/routes/index.js` file. Once the task is done, by clicking on *Check Part 4* with *file1.txt* it should give the result `Content of file2.txt` but by clicking on *Check Part 4* with *file2.txt* it should give an error message saying that the file was not found.
### Bonus

Install the Node.js package `axios` to make requests to URLs, [see here](https://www.npmjs.com/package/axios). Read the documentation to learn how to make requests to any URL and get its response through a promise. Use such promise to make some requests to some URLs and check the response object in order to extract the URL you are making the request to.

Read documentation about promises to find a method that given an array of promises it tells us which one is fulfilled first and use such method to do five requests/promises to different URLs to find out which one gives a response first. Then create the route `/compete` in `/routes/index.js` file that gives the winner URL as result parameter in the line of code

```js
res.render('solution', { result: winnerURLHere });
```

In case of an error we should report the error with the line of code
```js
res.render('solution', { result: errorHere });
```
**Tasks 1-4 are to be presented as Lab Task 5**
