import { sprintf } from "sprintf-js";


let epoch = new Date().getTime();

console.log(epoch)
console.log(sprintf("%X", epoch));

let hour= parseInt(epoch/1000/60/60%60)+9;
let minute = parseInt(epoch/1000/60%60);
let second = parseInt(epoch/1000%60);
console.log(hour + ":" + minute + ":" + second);
console.log(sprintf("%02d:%02d:%02d",hour, minute, second));