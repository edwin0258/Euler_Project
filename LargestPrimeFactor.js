function checkPrime(num){
  for(var x = 2;x < num;x++){
    if(num % x === 0){
      return false;
    }
  }
  console.log(num);
  return true;
}

for(i = 0;i < 600851475143;i++){
  if(600851475143 % i === 0){
    possible_num = 600851475143 / i;
    if(checkPrime(possible_num)){ break; }
  }
}