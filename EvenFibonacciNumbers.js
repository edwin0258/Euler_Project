var x = 1;var y = [1];
sum = 0;
while(x < 4000000){
	y.push(x);
	x=x+y[y.length-2];
	if(x % 2 === 0){
		sum+=x;
	}
}
console.log(sum);