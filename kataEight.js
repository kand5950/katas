const repeatNumbers = function(data) {
  let endResult = "";
  let rows = data.length
  for (let i = 0 ; i < rows ; i++){
    for (let j = 0 ; j < data[i][1] ; j++){
    endResult += data[i][0];
}
  if(++i < rows){
    endResult += ', ';
    --i;
  }
  }
  return endResult;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));