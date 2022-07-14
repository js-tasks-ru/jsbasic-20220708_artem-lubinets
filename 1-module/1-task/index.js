function factorial(n) {
  let res = 1;
  if (n in [1,0]){
    return 1;
  }
  
  for(let i = 2; i <= n; i++) {
    res = res*i;
    
  }
  return res;
}
