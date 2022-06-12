// Write in your own words the following:
// What are 3 things node.js has that the client side javascript doesn’t
// have. And the reasons why. - Global, process, non blocking, async. Node doesn't have window and runs on node (V8)
// What are 3 things the client side javascript has that node.js doesn’t
// have. And the reasons why - Window, document, blocking, sync. Js runs on the browser (V8 as well)

const assert = require("assert");

// console.log(global);
// console.log(global.console);
// global.a2 = "hi";
// console.log(global);

console.log(global.process.versions);
console.log(global.process.release);
//curl -O https://node

// console.log(assert);
// assert(5 > 7);

// console.log(Buffer);
// The buffers module provides a way of handling streams of binary data.
//converting a string to binary data
var buf = Buffer.from("hello");
console.log(buf);

//client side js
//window, document, alert,blur, fetch

console.log(globalThis);
