// Question: https://www.hackerrank.com/challenges/js10-class/problem?isFullScreen=true

Solution:
class Polygon {
     constructor(arr) {
         this.arr = arr;
     }
     perimeter(){
          let peri = 0;
          for (var i=0; i< this.arr.length; i++){
            peri += this.arr[i];
          }
         return peri;
     }   
}
