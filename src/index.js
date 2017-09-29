module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let res = true;

  str.split('').forEach(bracket => {
    if(bracketsConfig.find((el) => {
      return el[0] === bracket && el[1] !== bracket;
    })) {
      stack.push(bracket);
    } else if(bracketsConfig.find((el) => {
      return el[1] === bracket && el[0] !== bracket
    })) {
      let confPair = bracketsConfig.find((el) => {
          return el[1] === bracket
      })
      if(stack.pop() !== confPair[0]) {
        res = false;
      }
    } else if(bracketsConfig.find((el) => {
        return el[0] === bracket && el[1] === bracket;
      })) {
        if(stack[stack.length - 1] === bracket) {
          stack.pop();
        } else {
          stack.push(bracket);
        }
    }
  })

  if(stack.length !== 0){
    return false;
  }
  return res;
}
