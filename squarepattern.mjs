//var square =
const spaceCount = function (space) {
  var k = '';
  for (var i = 0; i < space; i++) {
    k = k + ' ';
  }
  return k;
};

const charac = function (arr, val) {
  var k = '';
  for (var j = val; j > 0; j--) {
    k = k + arr[j - 1];
    return k;
  }
};

const middleLines = function (arr) {
  var count = arr.length - 2;
  var spaces = spaceCount(count);
  var result = '';
  for (var i = 0; i < count; i++) {
    var firstCharacter = arr[i + 1];
    var secondCharacter = charac(arr,(arr.length - 1) - i);
    result += firstCharacter + spaces + secondCharacter+'\n';
  }
  return result;
}

const lastLine =(arr) => arr.reduce((i,c) => c+i);

const firstLine = (arr) =>arr.reduce((i,c) => i+c)+'\n';

const square = (arr) => {
  return firstLine(arr) + middleLines(arr) + lastLine(arr);
}
console.log(square(['a', 'b']));
console.log(square(['a', 'b', 'c']));
console.log(square(['a', 'b', 'c', 'd','e']));
