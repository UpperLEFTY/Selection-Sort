// [5, 1, 12, -5, 16, 2, 12, 14]
//Index = Indx

function selectionSort(arr){
var minIndx, temp,
len = arr.length;
  for(var i = 0; i < len; i++){
    minIndx = i;
for(var  j = i+1; j<len; j++){
       if(arr[j]<arr[minIndx]){
          minIndx = j;
       }
    }
temp = arr[i];
    arr[i] = array[minIndx];
    arr[minIndx] = temp;
  }
  return arr;
}
