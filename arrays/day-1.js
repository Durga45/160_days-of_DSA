function secondlargest(arr){
  const n=arr.length
  let largest=-1
  let secondlargest=-1
  for(let i=0;i<n;i++){
    if(arr[i]>largest){
      secondlargest=largest
      largest=arr[i]
    }else if(arr[i]>secondlargest && arr[i]!=largest){
      secondlargest=arr[i]
    }
  }
  return secondlargest
}