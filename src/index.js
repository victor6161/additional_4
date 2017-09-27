module.exports = function multiply(first, second) {
  
  var digit;
  var additive = 0;
  var currentNumber;
  var itemString = "";
  
  var itemsString = [];
  

    for(let i = 0; i < second.length; i++){
      additive = 0;
    for(let j = 0; j < first.length; j++){
      digit = first[first.length - j - 1];
      digit = digit * second[i];
      currentNumber = digit + additive;
    
      if(currentNumber> 9){
        additive = parseInt(currentNumber/10)   ;
        currentNumber = parseInt(currentNumber%10);
      }else{
        additive = parseInt(currentNumber/10);
      }
      itemString = itemString + currentNumber;
    }
      itemString += additive; 
      itemString = itemString.split("").reverse().join("");
      itemsString.push(itemString);
      
      itemString='';
    }
    let k = 0;
    itemsString = itemsString.reverse(); 
    for(let i = 0; i < itemsString.length ; i++ ){
      
      for( let ii = 0; ii< k; ii++){//цикл для добавления нулей в начало
        itemsString[i] = itemsString[i] + "0"; 
      }
      itemsString[i] = itemsString[i].split("").reverse().join("");
      k++;
      //console.log(itemsString[i]);
    }
    
    let lastNumber ='' + itemsString[itemsString.length - 1];
    //lastNumber самое big number почся
    //lastNumber 
    let test =  itemsString[itemsString.length - 2];
    for( let i = 0; i < lastNumber.length; i++ ){
      for( let ii = 0 ; ii <itemsString.length; ii++){
        if(!itemsString[ii][i]){
            itemsString[ii] = itemsString[ii]  + '0';
        }
      }
    }
    for(let i = 0; i < itemsString.length ; i++ ){
      console.log(itemsString[i]);
    }
    
    let len = itemsString[0].length;
    var finalNumber = [];
    let resultColumn;
    let add = 0;
    for(let i = 0; i < len; i++){
      resultColumn = 0;
      for(let ii = 0; ii < itemsString.length; ii++){
        
        resultColumn += parseInt(itemsString[ii][i]) ;
      }
      resultColumn += add;
         if(resultColumn > 9){
          finalNumber.push(resultColumn%10);
          add = parseInt(resultColumn/10);
        }else{
          finalNumber.push(resultColumn);
          add = 0;
        }
      //console.log(resultColumn);
    }
   
    if(!finalNumber[finalNumber.length -1 ]){
      finalNumber[finalNumber.length -1 ] ='';
    }

 



    
    
    return finalNumber.reverse().join("");
}

