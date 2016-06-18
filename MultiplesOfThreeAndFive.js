var sum = 0;
for(var x = 0;x < 1000;x++){
	(x % 3 === 0 || x % 5 === 0) ? sum+=x : null;
}
console.log(sum);