document.write('<h3>Задача №1</h3> ');

let arr = [];
let len = arr.length;
len = prompt('Enter a length of array');

for(let i = 0; i < len; i++){
    arr.push(prompt('Enter a number')); //добавление эл-в массива в конец
}

document.write('Длина массива: ', len + '</br>');
document.write('Заданный пользователем массив: ', arr + '</br>');

//Сортировка массива по возрастанию
arr.sort(function(a, b) {
  return a - b;
});
let arr1 = arr;
document.write('Отсортированный по возрастанию: ', arr1 + '</br>');

//Удаление элементов из массива включительно
arr1.splice(1,3);
document.write('Удаление 2-4-го элементов(включительно): ', arr1);

//Задача 2
document.write('<h3>Задача №2</h3>');

let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sumPos = 0;
let pos = 0;
let min = array[0];
let minIndex = 0;
let max = array[0];
let maxIndex = 0;
let neg = 0;
let kolOdd = 0;
let kolEven = 0;
let sumEven = 0;
let sumOdd = 0;
let mul = 1;


document.write('Задан массив: ', array + '</br>')

for (let i = 0; i < array.length; i++) {
    //Сумма и количество положительных элементов
    if (array[i] > 0) {
        sumPos += array[i];
        pos++;
    }

    //Минимальный элемент массива и его порядковый номер.
    if (min > array[i]) {
        min = array[i];
        minIndex = i;
    }

    //максимальный элемент массива и его порядковый номер
    if (max < array[i]) {
        max = array[i];
        maxIndex = i;
    }

    //Определить количество отрицательных элементов.
    if (array[i] < 0) {
        neg++;
    }

    //Найти количество нечетных положительных элементов и их сумму.
    if (array[i] > 0 && array[i] % 2 === 1) {
        kolOdd++;
        sumOdd += array[i];
    }

    //Найти количество четных положительных элементов и их сумму.
    if (array[i] > 0 && array[i] % 2 === 0) {
        kolEven++;
        sumEven += array[i];
    }

    //Найти произведение положительных элементов.
    if (array[i] > 0) {
        mul *= array[i];
    }
}

//Обнулить элементы массива, кроме максимального 
for (let i = 0; i < array.length; i++) {
    if (array[i] < max) {
        array[i] = 0;
    }
}

document.write('<pr>a)</pr> ');
document.write('Сумма положительных чисел: ', sumPos + '</br>');
document.write('Количество положительных элементов: ', pos + '</br>');

document.write('<pr>b)</pr>');
document.write('Минимальное число: ', min + '</br>');
document.write('Индекс минимального числа: ', minIndex + '</br>');

document.write('<pr>c)</pr>');
document.write('Максимальное число: ', max + '</br>');
document.write('Индекс максимального числа: ', maxIndex + '</br>');

document.write('<pr>d)</pr>');
document.write('Количество отрицательных чисел: ', neg + '</br>');

document.write('<pr>e)</pr>');
document.write('Количество нечетных положительных чисел: ', kolOdd + '</br>');

document.write('<pr>f)</pr>');
document.write('Количество четных положительных чисел: ', kolEven + '</br>');

document.write('<pr>g)</pr>');
document.write('Сумма четных положительных элементов: ', sumEven + '</br>');

document.write('<pr>h)</pr>');
document.write('Сумма нечетных положительных элементов: ', sumOdd + '</br>');

document.write('<pr>i)</pr>');
document.write('Произведение положительных чисел: ', mul + '</br>');

document.write('<pr>j)</pr>');
document.write('Обнулить элементы массива, кроме максимального ' + array);
