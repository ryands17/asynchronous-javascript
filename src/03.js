setTimeout(() => {
  console.log('Execution of Timeout Callback Function');
});

setImmediate(() => {
  console.log('Execution of Immediate Callback Function');
});

new Promise(() => console.log('Execution of promise resolver 1'));

new Promise((res) => {
  console.log('Execution of promise resolver 2');
  res();
}).then(() => console.log('Execution of `then` chain resolver'));

process.nextTick(() => {
  console.log('Execution of NextTick Callback Function');
});

console.log('Execution of Main Module Ends');
