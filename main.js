//Task 1

// function arrayLength(array){
//     let length = 0 ;
//     for(let i in array){
//         length++;
//     }
//     return length;
// }
// let array = [1, 2, 3, 4, 5];
// console.log(arrayLength(array));

//Task 2

// function arrayElement( array,element){
//     return array.includes(element);
// }
// let names = ["Ahmed" ,"Mohamed" ,"sayed"];
// console.log(arrayElement("Ahmed"));
// console.log(arrayElement("Nayra"));


//Task 3
// function squarElements(arr){
//    let squar = [];
//    for (let i = 0 ; i< arr.length; i++){
//     squar.push(arr[i])*(arr[i]);
//    }
//    return squar;
// }
// let numbers = [1,2,3,4,];
// squars = squarElements(numbers);
// console.log(squarElements());


//Task 4

// function num(arr) {
//     let max = arr[0];
//     let min = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }

//     return { max: max, min: min };
// }

// const array = [1,2,3,4,5,7];
// const result = num(array);
// console.log(`Max: ${result.max}, Min: ${result.min}`);


//Task 5
// function sumOfArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// const array = [1,2,3,4];
// const sum = sumOfArray(array);
// console.log(sum);


//Task 6

// function averageOfArray (arr) {

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     return sum / arr.length;
// }
// const array = [1,2,3,4,5];
// const average = averageOfArray(array);
// console.log(average);


//Task 7

// function Arrays(array1, array2) {
//     return array1.concat(array2);
//   }
//   const array1 = [1, 2];
//   const array2 = [3,4];
//   const result = Arrays(array1, array2);
//   console.log(result); 
  



