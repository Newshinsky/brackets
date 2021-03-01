module.exports = function check(str, bracketsConfig) {
  let newArr = [];
for (let i of bracketsConfig) {
i = i.toString().replace("," , "");
newArr.push(i);
}
console.log(newArr)
for (i = 0; i<str.length; i++){
	if (str.includes(newArr[i])) {
  str = str.replace(newArr[i], '');
  i = -1;
  }
  if (str.length == 0){
  return true;
  }
}
   return  false;
}
