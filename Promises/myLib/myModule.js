const myFunctions = {};
const axios = require('axios').default;

/* PART 0 */
/* Nothing to be done here. Only understand the function f0 and get familiar with promises. */
function f0() {
  // We omit the reject parameter in the promise. We do not use it
  const promise0 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('A message delivered after few seconds');
    }, 5000);
  });
  console.log('Getting a message... (please wait)');
  promise0.then((resultMessage) => {
    console.log(`Here is the message: ${resultMessage}`);
  });
  console.log('Some other stuff');
}
f0();

/* PART 1 */
/* Nothing to change here in promise1 */
// We omit the reject parameter in the promise. We do not use it
myFunctions.promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('You have finished part 1!');
  }, 2000);
});

/* PART 2 */
/* Nothing to change here in promise2a */
// We omit the reject parameter in the promise. We do not use it
const promise2a = new Promise((resolve) => {
  setTimeout(() => {
    resolve('You have ');
  }, 2000);
});
/* Nothing to change here in promise2b */
// We omit the reject parameter in the promise. We do not use it
const promise2b = new Promise((resolve) => {
  setTimeout(() => {
    resolve('finished part 2!');
  }, 1000);
});
/* TODO: Fix functionPart2 so that it returns the concatenation
of the values returned by promise2a and promise2b */
myFunctions.functionPart2 = () => {
  const value1 = promise2a;
  const value2 = promise2b;
  return value1.then((result) => value2.then((result2) => result + result2));
};

/* PART 3 */
myFunctions.functionPart3 = (word) => {
  console.log(`Call to functionPart3 with word: ${word}`);
  /* TODO: Return a promise that, after 2 seconds, resolves with returned value
     "Good word" if word ends with "123" and that rejects with returned value
     "Bad word" if the word does not end with "123" */
  return new Promise((resolve) => {
    setTimeout(() => {
      if (word.endsWith('123')) {
        resolve('Good word');
      } else {
        resolve('Bad word');
      }
    }, 2000);
  });
};

/* PART 4 */
myFunctions.bonus = async () => {
  const urls = [
    'https://www.youtube.com/?hl=pl&gl=PL',
    'https://www.wikipedia.org',
    'https://www.facebook.com',
    'https://usosweb.mimuw.edu.pl/kontroler.php?_action=home/index',
    'https://moodle.mimuw.edu.pl/my/',
    'http://localhost:8000',
  ];
  return Promise.any([
    axios.get(urls[0]),
    axios.get(urls[1]),
    axios.get(urls[2]),
    axios.get(urls[3]),
    axios.get(urls[4]),
  ]);
}


module.exports = myFunctions;
