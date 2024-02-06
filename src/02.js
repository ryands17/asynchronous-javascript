setTimeout(() => {
  console.log('Execution of Timeout Callback Function');
});

setImmediate(() => {
  console.log('Execution of Immediate Callback Function');
});

process.nextTick(() => {
  console.log('Execution of NextTick Callback Function');
});

console.log('Execution of Main Module Ends');
