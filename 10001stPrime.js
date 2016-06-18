x = 2; primes = [2];
prime = true;
while(primes.length < 10001){
	prime = true;
	if(x % 2 === 0){
		prime = false;
	}
	//1000 can be changed depending on how far out prime is..
	for(var i = 3;i < 1000;i+=2){
		if(x % i === 0 && x != i){
			prime = false;
		}
	}
	if(prime === true){
		primes.push(x);
	}
	x++;
}