// 1.Check odd or even

function isEven(num){
    if (num%2 == 0){
        console.log(`Number ${num} is Even`);
    }
    else {
        console.log(`Number ${num} is Odd`);
    }
}
let num=5
isEven(num)

// 2. Largest number in array
function largestNumber(arr){
    let largest = arr[0];
    for (let i=1; i<arr.length; i++){
        if (arr[i] > largest){
            largest = arr[i];
        }
    }
    console.log(`The largest number is ${largest}`);
}
let arr =[122,83,28,90,32]
largestNumber(arr)

// 3. factorial of number
function factorial(num){
    let fact = 1
    for(let i=1; i<=num; i++){
        fact *= i;
    }
    console.log(`The factorial of ${num} is ${fact}`);
}
factorial(12)

// 4. vowel
function countVowel(str){
    let count=0;
    for(let i=0; i<str.length;i++){
        if(str[i]== 'a' || str[i]== 'e' || str[i]== 'i' || str[i]== 'o' || str[i]== 'u' || str[i]== 'A' || str[i]== 'E' || str[i]== 'I' || str[i]== 'O' || str[i]== 'U'){
            count++;
        }
    }
    console.log(`The number of vowels in "${str}" is ${count}`);
}
countVowel("Abdul Kalami")

// 5. FizzBuzz
function fizzBuzz(num){
    for(let i=1; i<=num; i++){

        if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
        }
        else if(i%3==0){
        console.log("Fizz");
       }
       else if(i%5==0){
        console.log("Buzz");
       }
       else{
        console.log(i);
       }

}
}
fizzBuzz(20)
