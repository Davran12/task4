// ! #1
let arr = ["Polina", "Mirdin", "Azret", "Aliia", "Aidana"];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "Mirdin" || arr[i] === "Aliia") {
    console.log(arr[i]);
  }
}
// ! #2
let numbers = [];
for (let i = 1; i <= 10; i++) {
  numbers.push(i);
}
console.log(numbers);
// ! #3
for (let i = 50; i <= 99; i++) {
  console.log(i);
}
// ! #4
for (let i = 99; i >= 50; i--) {
  console.log(i);
}
// ! #5
let fruits = ["pen", "pineapple", "apple", "pen"];
let count = fruits[0];
for (let i = 1; i < fruits.length; i++) {
  if (fruits[i].length > count.length) {
    count = fruits[i];
  }
}
console.log(count);
// ! #6
let fruits1 = ["pen", "pineapple", "apple", "pen"];
let count1 = fruits1[0];
for (let i = 1; i > fruits1.length; i++) {
  if (fruits1[i].length < count1.length) {
    count1 = fruits1[i];
  }
}
console.log(count1);
// ! #7 Не смог сделать:(
// ! #8
const array = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    console.log(array[i][j]);
  }
}
