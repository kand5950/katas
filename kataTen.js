const multiplicationTable = function(maxValue) {
  let multiTableTemp = [];
  let multiTable = [];
  
  for (let i = 1 ; i <= maxValue ; i++){
    for (let j = 1 ; j <= maxValue ; j++){
      multiTableTemp.push(i*j);
      
    }

    multiTable += multiTableTemp.join(" ") + "\n" + "\n";
    multiTableTemp = [];

  }
  return multiTable;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));