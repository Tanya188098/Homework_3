document.write('<h3>Задача №1</h3> ');

let arr = [];
let index = 0;
while (true) {
    let num = prompt('Enter a number');
    if (!num) {
        break;
    }
    arr[index] = num;
    index++;
}
document.write('Заданный пользователем массив: ', arr + '</br>');
//Сортировка массива по возрастанию
arr.sort(function(a, b) {
  return a - b;
});
let arr1 = arr;
document.write('Отсортированный по возрастанию: ', arr1 + '</br>');

//Удаление элементов из массива включительно
arr1.splice(2,3);
document.write('Удаление 2-4-го элементов(включительно): ', arr1);

//Задача 2
document.write('<h3>Задача №2</h3>');

let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sum1 = 0;
let pos = 0;
let min = array[0];
let min_i = 0;
let max = array[0];
let max_i = 0;
let neg = 0;
let kol1 = 0;
let kol2 = 0;
let sum2 = 0;
let sum3 = 0;
let mul = 1;


document.write('Задан массив: ', array + '</br>')

for (let i = 0; i < array.length; i++) {
    //Сумма и количество положительных элементов
    if (array[i] > 0) {
        sum1 += array[i];
        pos++;
    }

    //Минимальный элемент массива и его порядковый номер.
    if (min > array[i]) {
        min = array[i];
        min_i = i;
    }

    //максимальный элемент массива и его порядковый номер
    if (max < array[i]) {
        max = array[i];
        max_i = i;
    }

    //Определить количество отрицательных элементов.
    if (array[i] < 0) {
        neg++;
    }

    //Найти количество нечетных положительных элементов и их сумму.
    if (array[i] > 0 && array[i] % 2 === 1) {
        kol1++;
        sum2 += array[i];
    }

    //Найти количество четных положительных элементов и их сумму.
    if (array[i] > 0 && array[i] % 2 === 0) {
        kol2++;
        sum3 += array[i];
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
document.write('Сумма положительных чисел: ', sum1 + '</br>');
document.write('Количество положительных элементов: ', pos + '</br>');

document.write('<pr>b)</pr>');
document.write('Минимальное число: ', min + '</br>');
document.write('Индекс минимального числа: ', min_i + '</br>');

document.write('<pr>c)</pr>');
document.write('Максимальное число: ', max + '</br>');
document.write('Индекс максимального числа: ', max_i + '</br>');

document.write('<pr>d)</pr>');
document.write('Количество отрицательных чисел: ', neg + '</br>');

document.write('<pr>e)</pr>');
document.write('Количество нечетных положительных чисел: ', kol1 + '</br>');

document.write('<pr>f)</pr>');
document.write('Количество четных положительных чисел: ', kol2 + '</br>');

document.write('<pr>g)</pr>');
document.write('Сумма четных положительных элементов: ', sum3 + '</br>');

document.write('<pr>h)</pr>');
document.write('Сумма нечетных положительных элементов: ', sum2 + '</br>');

document.write('<pr>i)</pr>');
document.write('Произведение положительных чисел: ', mul + '</br>');

document.write('<pr>j)</pr>');
document.write('Обнулить элементы массива, кроме максимального ' + array);
