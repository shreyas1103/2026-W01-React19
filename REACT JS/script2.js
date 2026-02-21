let numbers = [1, 2, 3, 4, 5];

// count odd and even numbers
let oddCount = 0;
let evenCount = 0;
// approach #1
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) evenCount++;
    else oddCount++;
}
// approach #2
for (let num of numbers) {
  if (num % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}
// approach #3
for(let i in numbers) {
    i%2==0? evenCount++ : oddCount++;
}

// approach #4
let even_array = numbers.filter(function(item,index){
    if(item%2==0) return true;
}).length;
