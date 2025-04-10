function reverse(arr,start,end){
  while(start<end){
    [arr[start],arr[end]]=[arr[end],arr[start]]
    start++
    end--
  }
  return arr
}
function rotateArray(arr,k){
  const n=arr.length
  k=k%n
  reverse(arr,0,k-1)
  reverse(arr,k,n-1)
  reverse(arr,0,n-1)
}
