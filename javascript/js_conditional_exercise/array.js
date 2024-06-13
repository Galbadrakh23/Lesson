console.log("=======Exercise-1======");

let fruits = ["Apple", "Banana", "Orange", "Kiwi", "Grape"];
console.log("First Fruit", fruits[0]);
console.log("Last Fruit :", fruits[4]);
console.log("Middle Fruit :", fruits[2]);

console.log("=======Exercise-2======");

let array = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];

let oddCount = 0;
let evenCount = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}
console.log("Сондгой тоонуудын тоо: " + oddCount);
console.log("Тэгш тоонуудын тоо: " + evenCount);

console.log("=======Exercise-3======");

let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];

let length = arrayOfNumbers.length;
let sum = 0;

console.log("Length", length);

for (let i = 0; i < arrayOfNumbers.length; i++) {
  sum += arrayOfNumbers[i];
}
let avarage = sum / arrayOfNumbers.length;
console.log("Нийлбэр утга нь", sum); // 1456
console.log("Дундаж утга нь", avarage);

// Тэгш тоонуудын нийлбэрийг олох
let evenSum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] % 2 === 0) {
    evenSum += arrayOfNumbers[i];
  }
}

console.log("Тэгш тоонуудын нийлбэр: " + evenSum);
// Сондгой тоонуудын үржвэрийг олох
let oddProduct = 1;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] % 2 !== 0) {
    oddProduct *= arrayOfNumbers[i];
  }
}

console.log("Сондгой тоонуудын үржвэр: " + oddProduct);
// Хамгийн их тоог олох
let maxNumber = arrayOfNumbers[0];
for (let i = 1; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] > maxNumber) {
    maxNumber = arrayOfNumbers[i];
  }
}

console.log("Хамгийн их тоо: " + maxNumber);
// Хамгийн бага тоог олох
let minNumber = arrayOfNumbers[0];
for (let i = 1; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] < minNumber) {
    minNumber = arrayOfNumbers[i];
  }
}

console.log("Хамгийн бага тоо: " + minNumber);
