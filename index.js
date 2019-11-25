// Add your functions here

function map(arr,ab){
  let r=[];
  for(let i=0 ; i<r.length ; i++){
    let arrays=arr[i];
    r.push(ab(arrays));
  }
  return r;
}
