let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for(i = 0; i < input.length; i++){
  if (input[i] === 'e') {
    resultArray.push(input[i])
  }
  if (input[i] === 'u') {
    resultArray.push(input[i])
  }
  for(j = 0; j < vowels.length; j++){
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);
