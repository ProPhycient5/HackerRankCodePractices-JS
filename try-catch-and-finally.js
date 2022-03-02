// Question: https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem?isFullScreen=true

// Solution:
function reverseString(s) {
    let str = s;
    try {
       str= s.split('').reverse().join('');
    }
    catch(err) {
      console.log(err.message);
    }
    finally {
           console.log(str); 
    }
}