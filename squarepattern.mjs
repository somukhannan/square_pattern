const charac = (arr, val) => '' + arr[val - 1];

const middleLines = function (arr) {
  var count = arr.length - 2;
  var result = '';
  for (var i = 0; i < count; i++) {
    var val = (arr.length - 1) - i;
    result += arr[i + 1] + ' '.repeat(count) + charac(arr,val)+'\n';
  }
  return result;
}

const firstLine = (arr) =>arr.reduce((i,c) => i+c)+'\n';

const square = (arr) => {
  return firstLine(arr) + middleLines(arr) + firstLine(arr.reverse());
}
console.log(square(['a', 'b']));
console.log(square(['a', 'b', 'c']));
console.log(square(['a', 'b', 'c', 'd','e']));