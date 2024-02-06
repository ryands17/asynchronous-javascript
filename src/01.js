setTimeout(() => {
  console.log(1);
});

Promise.resolve().then(() => console.log(2));

Promise.resolve().then(() =>
  setTimeout(() => {
    console.log(3);
  }),
);

new Promise(() => console.log(4));

setTimeout(() => {
  console.log(5);
});
