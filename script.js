function calculateMinCost() {
  //your code here
  let cost = 0;

	while (set.length > 1) {
	  let fmin = Number.MAX_VALUE;
	  let smin = Number.MAX_VALUE;
	
	  for (let i of set) {
	    if (i < fmin) {
	      smin = fmin;
	      fmin = i;
	    } else if (i < smin) {
	      smin = i;
	    }
	  }
	
	  let opCost = fmin + smin;
	  set.push(opCost);
	  cost += opCost;
	
	  // Remove the first occurrence of fmin and smin from the array
	  set.splice(set.indexOf(fmin), 1);
	  set.splice(set.indexOf(smin), 1);
	}
	return cost;  
  
}  