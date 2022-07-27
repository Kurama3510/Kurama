// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

    let tenelements = ['hi', 10, 3.14, 'Where are you', 1/2, 5^6, 'RaKaMaKaFo', "hi", "nice", "cool"]
        console.log(tenelements[0]);
        console.log(tenelements[1]);
        console.log(tenelements[2]);
        console.log(tenelements[3]);
        console.log(tenelements[4]);
        console.log(tenelements[5]);
        console.log(tenelements[6]);
        console.log(tenelements[7]);
        console.log(tenelements[8]);
        console.log(tenelements[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

    let book1 = {
        title: 'HarryPotter',
        pageCount: 257,
        genre: 'Fentezi'

    }
    console.log(book1);

    let book2 = {
        title: 'Naryto',
        pageCount: 720,
        genre: 'Anime'

    }
    console.log(book2);

    let book3 = {
        title: 'Full metal alchimest',
        pageCount: 64,
        genre: 'Anime'

    }
    console.log(book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

    let book4 = {
        title: 'Darling in the Franks',
        pageCount: 64,
        genre: 'Anime',
        auhors:  [
            {name: 'Tomas Shelbi', age:31 }
        ]

    }
    console.log(book4);

    let book5 = {
        title: 'One Piese',
        pageCount: 64,
        genre: 'Anime',
        auhors:  [
            {name: 'Artyr Shelbi', age:31 }
         ]
    }
    console.log(book5);

    let book6 = {
        title: 'Magic Fight',
        pageCount: 64,
        genre: 'Anime',
        auhors: [
            {name: 'Jhon Shelbi', age:31 }
        ]
    }
    console.log(book6);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

    let users = [
    {name: 'Naryto', username: 'Naryka228_', password: 'Uzumaki_1_2'},
    {name: 'Kurosaki', username: 'Ichini_01', password: 'fsdshjgfds'},
    {name: 'Saitama', username: 'Sa_Ita_Ma', password: 'WWKDfuu'},
    {name: 'Gojo', username: 'Satori', password: '0fdsajgs'},
    {name: 'Itachi', username: 'Anbyboy', password: 'IzAnammi'},
    {name: 'Bamblbee', username: 'SHmel', password: '228_228'},
    {name: 'Minato', username: 'Pers_ik', password: 'TroN_I_O'},
    {name: 'Tanjiro', username: 'Kamado0', password: 'Y_B_I_C_A'},
    {name: 'Inosuke', username: 'Tatarforas', password: 'jssjkaw'},
    {name: 'Kakashi', username: 'Sempai', password: 'Shidori'},

    ];
    console.table(users,['password']);