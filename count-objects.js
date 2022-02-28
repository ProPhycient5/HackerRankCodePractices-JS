//Question: https://www.hackerrank.com/challenges/js10-count-objects/problem?isFullScreen=true

//Solution:
function getCount(objects) {
    let count = 0;
    objects.forEach(function(item) { 
    if (item.x === item.y){
      count++;  
    }  
});
return count;
}