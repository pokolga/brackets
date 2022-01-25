module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 === 1) return false;
  const myArr = [];
  for (let i = 0; i < str.length; i++) {
    let symb = str[i];
    if (symb === myArr[myArr.length - 1]) {
      myArr.pop();
    }
    else {
      bracketsConfig.forEach((item) => { if (item[0] === symb) { myArr.push(item[1]) } });
    }
  }
  return (myArr.length === 0) ? true : false;
}