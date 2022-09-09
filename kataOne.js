const sumLargestNumbers = function(data) {
  //Below variables will be largest numbers index later
  let firstIndex = 0;
  let secondIndex = 0;

  //find largest number in arrays index to later push out of array to find second largest number
  for (let i = 0 ; i <= data.length ; i ++){
    if (data[i] >= data [firstIndex]){
      firstIndex = i;
      
    }
  }
  //push largest index# into a new variable firstLNumber
  let firstLNumber = data.splice(firstIndex, 1)[0];
  //find largest number after first largest number taken out of array
   for (i = 0 ; i <= data.length ; i++){
    if (data[i] >= data[secondIndex]){
      secondIndex = i;
    }
  }
  //push second largest index# into a new variable secondLNumber
let secondLnumber = data.splice(secondIndex, 1)[0];
return firstLNumber + secondLnumber;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));