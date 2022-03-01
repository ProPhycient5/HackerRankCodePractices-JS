// Question: https://www.hackerrank.com/challenges/js10-arrows/problem?isFullScreen=true

//Solution:
const modifyArray = (nums) =>{
	return (nums.map((num) => {
		if (num % 2 == 0){
			return num * 2;
		} else {
			return num * 3;
		}
	}))
}