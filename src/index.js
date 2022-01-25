module.exports = function check(str, bracketsConfig) {
  // your solution
  const myArr = [];
  for (let i = 0; i < str.length; i++) {
    let symb = str[i];
    bracketsConfig.forEach((item) => { if (item[0] === symb) myArr.push(item[1]) });
    if (symb === myArr[myArr.length - 1]) myArr.pop();
  }
  return (myArr.length === 0) ? true : false;


}
