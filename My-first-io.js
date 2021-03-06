// Write a program that uses a single synchronous filesystem operation to
// read a file and print the number of newlines(\n) it contains to the
// console(stdout), similar to running cat file | wc - l.

// The full path to the file to read will be provided as the first
// command - line argument(i.e., process.argv[2]).You do not need to make
// your own test file.
const fs = require('fs');
const path = process.argv[2];
var str = fs.readFileSync(path, 'utf8')
const lines = str.split('\n');
console.log(lines.length - 1);

//methood 2

var str = fs.readFileSync(process.argv[2]).toString();
const lines = str.split('\n');
console.log(lines.length - 1);
