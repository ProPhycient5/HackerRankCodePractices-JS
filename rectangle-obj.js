// Question: https://www.hackerrank.com/challenges/js10-objects/problem?isFullScreen=true

//Solution:
function Rectangle(a, b) {
  let perimeter = 2 * (a + b);
  let area = a * b;
  const obj = {length: a, width: b, perimeter, area} 
  if (obj) {
     return obj;  
  }
}


function main() {
    const a = +(readLine());
    const b = +(readLine());
    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}