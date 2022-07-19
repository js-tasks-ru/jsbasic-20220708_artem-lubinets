function sumSalary(salaries) {
  let sum = 0;
  for(k in salaries) {
    if (typeof salaries[k] === 'number' && isFinite(salaries[k])) {
      sum+=salaries[k];

    }
    
  }
  return sum;
}
