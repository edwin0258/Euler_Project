x = 1;
//square each number then add to other numbers
exp_first_num = 0;
//add all numbers then square
exp_later_num = 0;
while(x <= 100){
	exp_first_num+=Math.pow(x,2);
	exp_later_num+=x;
	x++;
}
exp_later_num = Math.pow(exp_later_num,2);
console.log("Squaring first: " + exp_first_num);
console.log("Squaring last: " + exp_later_num);
console.log("Dif: " + (exp_later_num - exp_first_num));