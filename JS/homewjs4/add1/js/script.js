// --створити масив з:
// - з 5 числових значень

// let number = [1,2,3,4,5,]

// - з 5 стічкових значень

// let string = ["Q","W","E","R","T",]

// - та вивести його в консоль

// console.log(string,number)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//     console.log(array[0]);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :

// let number2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

// let i = 0;
// while (i < number2.length) {
//     document.write(`<div>${number2[i]}</div>`);
//     i++;
// }

//     2. перебрати його циклом for

// for (let i = 0; i > number2.length; i++) {
//     document.write(`<div>${number2[i]}</div>`);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i < number2.length) {
//     document.write(`<div>${number2[i]}</div>`);
//     i += 2;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < number2.length; i += 2) {
//     document.write(`<div>${number2[i]}</div>`);
//
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

//    let i = 0;
//    while (i < number2.length) {
//        if (number2[i] % 2 === 0) {
//            document.write(`<div>${number2[i]}</div>`);
//
//        }
//        i++;
//    }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (let i = 0; i < number2.length; i++) {
//     if (number2[i] % 2 === 0) {
//         document.write(`<div>${number2[i]}</div>`);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < number2.length; i++) {
//     if (number2[i] % 2 === 0) {
//         number2[i] = "okten"
//         document.write(`<div>${number2[i]}</div>`);
//     }
// }

// 8. вивести масив в зворотньому порядку.

// for (let i = number2.length-1; i >= 0;i--) {
//         document.write(`<div>${number2[i]}</div>`);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let number = [1,2,3,4,5,6,7,8,9,0]
// for (let i = 0; i < number.length; i++) {
//     console.log(number[i])
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let string = ["Q","W","E","R","T","Y","U","I","O","P"]
// for (let i = 0; i < string.length; i++) {
//     console.log(string[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let array = [1, "q", 2, "w", 3, "e", 4, "r", 5, "t",];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let array = [1, "q", 2, "w", 3, "e", 4, "r", 5, "t", true, false, true,];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "boolean") {
//         document.write(`<div>${array[i]}</div>`);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let array = [1, "q", 2, "w", 3, "e", 4, "r", 5, "t", true, false, true,];
// for (let i =0; i<array.length;i++) {
//     if (typeof array[i] === "number") {
//         document.write(`<div>${array[i]}</div>`);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let array = [1, "q", 2, "w", 3, "e", 4, "r", 5, "t", true, false, true,];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "string") {
//         document.write(`<div>${array[i]}</div>`);
//
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let mark1 = [];
// mark1[0] = 1;
// mark1[1] = "Hi";
// mark1[2] = true;
// mark1[3] = 2;
// mark1[4] = "Ky";
// mark1[5] = false;
// mark1[6] = 3;
// mark1[7] = "Ok";
// mark1[8] = true;
// mark1[9] = 4;
//
// for (let i = 0; i < mark1.length; i++) {
//     document.write(`<div>${mark1[i]}</div>`);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 11; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 101; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
//
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 101; i+=2) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
//
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

    // for (let i = 0; i < 101; i+=2) {
    //     console.log(i);
    //     document.write(`<div>${i}</div>`);
    //
    // }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

    // for (let i = 1; i < 101; i+=2) {
    //     console.log(i);
    //     document.write(`<div>${i}</div>`);
    //
    // }

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {name: 'Naruto', page: 720, authors: ['Masasi', 'Kisimoto'], genre: 'Anime'},
    {name: 'BorutoSenko', page: 732, authors: 'Vanga', genre: 'Manga'},
    {name: 'Voruto', page: 213, authors: ['Akaze', 'Rengoku'], genre: ['Anime','OVA','Chibi']},
    {name: 'DarutoUrokad', page: 325, authors: 'Gudini', genre: 'Manga'},
    {name: 'Faruto', page: 432, authors: ['Kamado', 'Agatsuma'], genre: ['Anime','OVA','Chibi']},
    {name: 'Garuto', page: 345, authors: 'Dopstoevskii', genre: 'OVA'},
    {name: 'HarutoKamado', page: 456, authors: ['Hushibiro', 'Inosuke'], genre: ['Anime','OVA','Chibi']},
    {name: 'Raruto', page: 766, authors: 'Mizynoto', genre: 'OVA'},
    {name: 'WarutoMizuno', page: 654, authors: ['Ichigo', 'Kurosaki'], genre: 'Anime'},
    {name: 'Taruto', page: 435, authors: 'ABABAGALAMAGA', genre: 'Chibi'},
    {name: 'Karuto', page: 534, authors: ['Oda', 'Mangakka'], genre: ['Anime','OVA','Chibi']},
    {name: 'LarutoNakaha', page: 324, authors: 'AC/DC', genre: 'Chibi'},
    {name: 'Paruto', page: 534, authors: ['Gojo', 'Satori'], genre: 'Anime'},
    {name: 'CarutoTakada', page: 214, authors: 'STRAOSFERA', genre: 'OVA'},
    {name: 'Zaruto', page: 375, authors: ['Minato', 'Namikaze'], genre: ['Anime','OVA','Chibi']},
    {name: 'XarutoTerauc', page: 653, authors: 'Tompson', genre: 'OVA'},

];
// -знайти наібльшу книжку.

 for (const book of books) {
    for (const bookKey in book) {
        if (Math.max(book['pages'])){
        }
    }
}

