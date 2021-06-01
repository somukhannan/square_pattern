const middleLines = function (arr) {
  const count = arr.length;
  let result = '';
  for (let i = 0; i < count; i++) {
    result += arr[i] + ' '.repeat(count) + '' + arr[count - 1 - i]+'\n';
  }
  return result;
}

const firstLine = (arr) =>arr.reduce((i,c) => i+c)+'\n';

const square = (arr) => {
  return firstLine(arr) + middleLines(arr.slice(1,-1)) + firstLine(arr.slice().reverse());
  
}
console.log(square(['a', 'b']));
console.log(square(['a', 'b', 'c']));
console.log(square(['a', 'b', 'c', 'd','e']));
