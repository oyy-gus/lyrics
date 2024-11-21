import { search } from "./src/index.js";

async function test() {
  const result = await search("viavallen", "toptopan");
  console.log(result.artist);
  console.log(result.title);
  console.log(result.lyrics);
}

test();