const resolve = require('enhanced-resolve');
const path = require('path');
const myResolve = resolve.create.sync({
  extensions: ['.js', '.json', '.node', '.css']
});
console.log(myResolve('/Users/yash/Documents/Developer/Dr. Rashmi Gupta Website/src/app', 'tailwindcss'));
