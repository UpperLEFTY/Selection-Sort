// [5, 1, 12, -5, 16, 2, 12, 14]

function selectionSort(arr){
var minIndex, temp,
len = arr.length;
  for(var i = 0; i < len; i++){
    minIndex = i;
for(var  j = i+1; j<len; j++){
       if(arr[j]<arr[minIdx]){
          minIdx = j;
       }
    }
