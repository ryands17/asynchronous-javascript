import { promisify } from 'util';

const sleep = promisify(setTimeout);

const data = new Array(1000).fill(0);

async function processJSON(data) {
  return await Promise.all(
    data.map(async (_, index) => {
      // process JSON
      for (let i = 0; i < 1000; i++) {
        await sleep(1000);
        return index;
      }
    }),
  );
}

const resp = await processJSON(data);
console.log(resp);
