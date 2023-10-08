// Exercise #3: Min Numbers
let numbers = [100, 20, 3, 1000];
let minNumber = 0;

// Start coding here
for( let i = 0 ; i < numbers.length ; i = i + 1)
{ if (numbers[i] < numbers[i - 1]){ minNumber = numbers[i] }
}

console.log(minNumber)