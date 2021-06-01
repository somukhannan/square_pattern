const middleline = (val,index,arr) => val + ' '.repeat(arr.length) + arr[arr.length - 1 - index]+'\n';

const middleLines = function (arr) {
  const lines = arr.map(middleline);
  return lines.join('');
}

const firstLine = (arr) =>arr.reduce((i,c) => i+c)+'\n';

const square = (arr) => {
  return firstLine(arr) + middleLines(arr.slice(1,-1)) + firstLine(arr.slice().reverse());
}

console.log(square(['a', 'b']));
console.log(square(['a', 'b', 'c']));
console.log(square(['a', 'b', 'c', 'd','e']));
