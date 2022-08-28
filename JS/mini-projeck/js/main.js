// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then(users => {
//         for (const user of users) {
//             let div = document.createElement('div');
//             div.innerText = `${user.id} ${user.name}`;
//             let btn = document.createElement('button');
//             btn.innerText = 'Click';
//             div.appendChild(btn)
//             btn.onclick = function () {
//                 location.href = `user-details.html?id=${user.id}`;
//             };
//
//
//             document.body.appendChild(div);
//         }
//     });




fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {

        let main = document.createElement('div');
        main.classList.add('wrapper');

        for (const item of data) {

            let a = document.createElement('a');
            a.href = `user-details.html?id=${item.id}`;
            a.innerText = "Click me pls)";

            let child = document.createElement('div');
            let p = document.createElement('p');
            child.classList.add('child');
            p.append(`${item.id} -- ${item.name}`)
            child.append(p, a);
            main.append(child);

        }

        document.body.append(main);
    });