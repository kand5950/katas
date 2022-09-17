const camelCase = function(input) {
  
  
  let letterAfterSpace = '';

  for (let i = 0 ; i < input.length ; i++){
    if (input[i] === " "){
      letterAfterSpace += input[++i].toUpperCase();
    } else {
      letterAfterSpace += input[i];
    }
   
  }
  return letterAfterSpace;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));