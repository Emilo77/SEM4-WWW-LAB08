const express = require('express');

const router = express.Router();
const fsPromise = require('fs/promises');
const myFunctions = require('../myLib/myModule');

/* GET home page. */
router.get('/', (req, res) => {
    res.render('main');
});

router.get('/part1', (req, res) => {
    /* TODO Part 1: Fix this so that it can access the returned value of promise1.
      Once you get that value, change the code so that the value is printed on the console and
      pass as result parameter below. Promise promise1 is in myLib/myModule.js but you do not
      have to do anything there. All changes for part 1 are to be done here in this get request. */
    myFunctions.promise1.then((result) => console.log(result));
    /* previous line does not print the value returned by promise1,
    it is packed as a promise (something has to be fixed) */
    myFunctions.promise1.then((result) => res.render('solution', {result: result}));
});

router.get('/part2', (req, res) => {
    /* TODO Part 2: First fix functionPart2 in myLib/myModule.js so that we get the desired result.
      After that, change the code so that the value is printed on the console and
      pass as result parameter below. */
    // console.log(myFunctions.functionPart2());
    myFunctions.functionPart2().then((res2) => console.log(res2));
    /* previous line does not print the value returned by function2
      (something has to be fixed) */
    // res.render('solution', { result: myFunctions.functionPart2() }); // same issue here
    myFunctions.functionPart2().then((result) => res.render('solution', {result}));
});

router.get('/part3/:word', (req, res) => {
    const receivedWord = req.params.word;
    /* TODO Part 3: First provide definition of functionPart3 in /myLib/myModule.js file.
                 After that, fix this part so that we return the result of the promise returned
                 by functionPart3 when called with receivedWord as parameter. */
    myFunctions.functionPart3(receivedWord).then((result) => res.render('solution', {result}));
});

router.get('/part4/:file', (req, res) => {
    const fileToOpen = req.params.file;
    console.log(`File to open = ${fileToOpen}`);
    console.log(`fsPromise = ${fsPromise}`);
    /* TODO Part 4 (chaining promises)
        Use fsPromise above to extract the first string found in fileToOpen
        located in /txtFiles that appears before a comma.
        If no comma is found then read the string before the first break line character \n.
        Store such string in a variable call firstFile. Then, using the same fsPromise above,
        open firstFile located in /txtFiles folder and return its contents as result parameter
        in the line of code below. If there is an error opening firstFile then the error
        should be returned as result parameter below. */
    fsPromise.readFile(`./txtFiles/${fileToOpen}`, 'utf8')
        .then((result) => {
            const firstFile = result.split(',')[0];
            console.log(`firstFile = ${firstFile}`);
            return fsPromise.readFile(`./txtFiles/${firstFile}`, 'utf8');
        })
        .then((result) => res.render('solution', {result}))
        .catch((err) => res.render('solution', {result: err}));
});

router.get('/compete', (req, res) => {

    myFunctions.bonus().then((result) => {
            res.render('solution', {result: result.config.url});
        },
        (err) => {
            res.render('solution', {result: err})
        });

});
module.exports = router;
