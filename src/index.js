// 'main.js' will be generated by webpack
// production files will be in 'dist' folder

// npm install -D webpack webpack-cli
// uppercase D for dev depencency, webpack-cli for command line interface to use webpack commands in our scripts

import message from "./message.js";
import "./css/style.css";
// npm run build
// now css we added will be included in 'bundle.js'

console.log(message.text);
console.log(message);

// npm run build  // we run "build" script in package.json

const hello = () => console.log("hello");
