module.exports = function multiply(first, second) {
  
  var digit;
  var additive = 0;
  var currentNumber;
  var itemString = "";
  
  for( var i = 0; i<second.length; i++){
    
    for(var j = 0; j < first.length; j++){
      digit = first[first.length - j - 1];
      digit = digit * second[i];
      currentNumber = parseInt(digit%10) + additive;
    
      if(currentNumber/10 >= 1){
        additive = parseInt(digit/10) + 1;
        currentNumber = parseInt(currentNumber%10);
      }else{
        additive = parseInt(digit/10);
      }
      itemString = itemString + currentNumber;
    }
    itemString += additive; 
    itemString = itemString.split("").reverse().join("");
    
  }

  return itemString;
}

