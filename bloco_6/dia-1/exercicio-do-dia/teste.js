function pickPeaks(arr){
  
  let pos1 = [];
  let peaks1 = [];
  
  for (let index = 1; index < arr.length-1; index += 1) {
    console.log(index)
    if (arr[index] > arr[index-1] && arr[index] > arr[index+1]) {
      pos1.push(index);
      peaks1.push(arr[index]);
    }
  }
  const obj = {
    pos: pos1,
    peaks: peaks1
  };
  return obj;
}

console.log(pickPeaks([1,2,3,6,4,1,2,3,2,1]));