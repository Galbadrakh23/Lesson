console.log("=======Exercise-1======");

let fruits = ["Apple", "Banana", "Orange", "Kiwi", "Grape"];

console.log("First Fruit", fruits[0]);
console.log("Last Fruit :", fruits[4]);
console.log("Middle Fruit :", fruits[2]);

console.log("=======Exercise-2======");

let array = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let sondgoi;
let tegsh;

console.log("Array", array);
for (let i = 0; i < 10; i += 1) {
  console.log("Array Numbers", array[i]);
}

for (let i = 0; i <= 10; i += 1) {
  if (array[i] % 2 !== 0) {
    console.log("Сондгой тоонууд нь:", array[i]);
    sondgoi++;
  }
}
console.log("Сондгой тоонуудын нийлбэр нь", sondgoi);

for (let i = 0; i <= 10; i++) {
  if (array[i] % 2 === 0) {
    console.log("Тэгш тоонууд нь:", array[i]);
    tegsh++;
  }
}
console.log("Нийт сондгой", sondgoi);
console.log("Нийт тэгш", tegsh);

// Ex - 3
console.log("=======Exercise-3======");

let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];

let length = arrayOfNumbers.length;
let sum = 0;

console.log("Length", length);

for (let i = 0; i < arrayOfNumbers.length; i++) {
  sum += arrayOfNumbers[i];
}

console.log(sum); // 1456
