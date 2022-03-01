// Question: https://www.hackerrank.com/challenges/js10-date/problem?isFullScreen=true

//Solution:
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function getDayName(dateString) {
    let dayName;
    const d = new Date(dateString).getDay();
    dayName = days[d]; 
    return dayName;
}


function main() {
    const d = +(readLine());
    
    for (let i = 0; i < d; i++) {
        const date = readLine();
        
        console.log(getDayName(date));
    }
}