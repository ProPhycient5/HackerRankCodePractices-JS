//Question: https://www.hackerrank.com/challenges/js10-switch/problem?isFullScreen=true

//Solution:
function getLetter(s) {
    let letter;
    const setA = new Set(["a", "e", "i", "o", "u"]);
    const setB = new Set(["b", "c", "d", "f", "g"]);
    const setC = new Set(["h", "j", "k", "l", "m"]);
    const setD = new Set(["n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]);
    
    switch (true){
        case setA.has(s[0]):
         letter="A";
         break;
        case setB.has(s[0]):
         letter="B";
         break; 
        case setC.has(s[0]):
         letter="C";
         break; 
        case setD.has(s[0]):
         letter="D";
         break;  
    } 
    // Write your code here
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}