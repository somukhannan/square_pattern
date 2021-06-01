const middleLine = () => 
(val, index, arr) => val + ' '.repeat(arr.length) + arr[arr.length - 1 - index];

const middleLines = (arr) => arr.map(middleLine());

const firstLine = (arr) => arr.join('')

const lastLine = (arr) => arr.slice().reverse().join('');
  
const square = (arr) => {
  const lines = [
    firstLine(arr),
    ...middleLines(arr.slice(1,-1)),
    lastLine(arr)
  ].join('\n')+'\n';
  return lines;
}

console.log(square(['a', 'b']));
console.log(square(['a', 'b', 'c']));
console.log(square(['a', 'b', 'c', 'd','e']));

