// Question: https://www.hackerrank.com/challenges/js10-loops/problem?isFullScreen=true

// Solution:

function vowelsAndConsonants(s) {
    
let res = s.match(/[aeiou]/ig).join("");
let res2 = s.match(/[^aeiou]/ig).join("");

 for (var i = 0; i < res.length; i++) {
   console.log(res[i]);
 }
 for (var i = 0; i < res2.length; i++) {
   console.log(res2[i]);
 }
    
}

