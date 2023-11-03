function calculateMinCost(arr) {
  //your code here
arr.sort((a,b)=>a-b)

	let result=arr.reduce((a,b)=>{
		return a+b;
},a+b)
  
  console.log(result)
}  