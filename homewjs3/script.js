// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

    // let x=10
    // console.log(x)
    // if (x !== 0){
    // console.log("Victori")
    // }   if (x === 0){
    // console.log("Error")
    // }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

//1. Основний спосіб виконання ДЗ
//
//     let time = prompt("Send mess")
//
//         if (time >=0 && time <=15){
//             console.log('First')
//         }else if (time >15 && time<=30){
//             console.log('Second')
//         }else if (time>30 && time <=45){
//             console.log('Third')
//         }else if (time>45 && time<=59){
//             console.log('4-th')
//         }else {
//             console.log('Error')
//         }
//

    // 2. Щось пробував побавитись но так і не зрозумів
    //
    // switch(time) {
    //     case (time > 0 && time <15):
    //         console.log(1);
    //         break;
    //     case (time > 30 && time <=30):
    //         console.log(2);
    //         break;
    //     case (time > 45 && time <=45):
    //         console.log(3);
    //         break;
    //     case (time > 59 && time <=59):
    //         console.log(4);
    //         break;
    //     default:
    //         console.log('Error');
    // }
    ////////////    ЯКЩО МОЖНА ПОЯСНІТЬ ЦЕЙ МОМЕНТ ЯКИЙ Я ТУТ НАКАРЛЯКАВ Я НЕ РОЗУМІЮ ЧОМУ ТУТ В ЛЮБОВУ ВИПАДКУ ВИВОДИТЬ ERROR

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

//     let day =prompt("Send day")
//     switch (day){
//         case "1":
//             console.log('Monday');
//             break;
//         case "2":
//             console.log('Tuesday');
//             break;
//         case "3":
//             console.log('Wednesday');
//             break;
//         case "4":
//             console.log('Thursday');
//             break;
//         case "5":
//             console.log('Friday');
//             break;
//         case "6":
//             console.log('Saturday');
//             break;
//         case "7":
//             console.log('Sunday');
//             break;
//         default:
//             console.log('Error');
//     }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

            // let x = prompt("Send x=")
            // let y = prompt("Send y=")
            //
            //
            // if(x>y){
            //     console.log(x)
            // }else if (y>x){
            //     console.log(y)
            // }else if (x==y){
            //     console.log('The same')
            // }else{
            //     console.log('Error')
            // }
            //
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

    let x = null || 'default'
console.log(x)
