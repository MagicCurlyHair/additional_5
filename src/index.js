module.exports = function check(str, bracketsConfig) {
  let bracketArr = [];
  let openingBracket;
  let closingBracket;
  let lastBracket;
  for (let i = 0; i < str.length; i++){
    // iterates over bracketsConfig and gets current opening and closing brackets
    for (let j = 0; j < bracketsConfig.length; j++){
      openingBracket = bracketsConfig[j][0];
      closingBracket = bracketsConfig[j][1];
      // if current bracket is an opening bracket
      if (str[i] == openingBracket){
        /* checks if openingBracket is equal to closing bracket and if
        it is the last item of bracketArr; if it is - pops it*/
        if (openingBracket == closingBracket && bracketArr[bracketArr.length - 1] == openingBracket){
            bracketArr.pop();
          }
        // if previous test is failed - pushes opening bracket to bracketArr
        else {
          bracketArr.push(openingBracket);
        }
      }
      // checks if current bracket is a closing bracket
      else if (str[i] == closingBracket){
        // pops last bracket from array and checks if it was a proper opening bracket
        lastBracket = bracketArr.pop();
        if (lastBracket != openingBracket){
          return false;
        }
      }
    }
  }
  // returns false if there are unclosed brackets in array
  if (bracketArr.length != 0){
    return false;
  }
  return true;
}
