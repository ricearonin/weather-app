console.log('Starting Application');

setTimeout(() => {
  console.log('Inside of Callback');
}, 2000);

setTimeout(() => {
  console.log('NoDelay');
}, 0);

console.log('Finishing up');

/*

Callback Functions
function is passed as an argument to a function after a task is completed.


*/
