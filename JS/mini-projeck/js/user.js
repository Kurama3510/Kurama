// На странице user-details.html:
// 4 Вывести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.


////////////////////////////////////////////////////////////////////////////////////////////////////
// Скажу що намагався робити декілька раз ніяк не міг зібратись з думками і логічно все розставити//
////////////////////////////////////////////////////////////////////////////////////////////////////
// let url = new URL(location.href);
// console.log(url);
// let id = url.searchParams.get('id');
// console.log(id);
//
// fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//
//     .then(resp => resp.json())
//     .then(info => {
//         let div = document.createElement('div');
//         for (const infoElement in info) {
//             let divInfo = document.createElement('div');
//             divInfo.innerText = info[infoElement] ;
//             div.appendChild(divInfo);
//             let btn = document.createElement('button')
//             btn.innerText = 'post of curren user'
//             div.appendChild(btn);
//
//
//
//         }
//
//         document.body.appendChild(div);
//
//     });

/////////////////////////////////////////////////////////////////////////////
// Але після цього моменту дойшов до невликого, так би мовити  просвітлення//
/////////////////////////////////////////////////////////////////////////////
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         return response.json()
//     })
//
//     .then(posts => posts.map(post => {
//
//         let div = document.createElement('div');
//         div.innerText = `${localStorage.getItem('posts')}`;
//
//         let btn = document.createElement('button');
//         btn.innerText = 'post of current user';
//         div.appendChild(btn);
//
//         btn.onclick = function () {
//             let click = JSON.stringify(post);
//             localStorage.setItem('posts', click)
//         };
//
//         document.body.appendChild(div);
//     }));


let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(data => {

        let mainDiv = document.createElement('div');
        mainDiv.classList.add('user-block');
        let titDiv = document.createElement('div');
        titDiv.classList.add('title-block');
        let btn = document.createElement('button');
        let btnDiv = document.createElement('div');
        btnDiv.classList.add('user-btn');
        btn.innerText = 'post of current user'.toUpperCase();
        btnDiv.append(btn);

        function recursion(element) {
            for (const value in element) {
                if (typeof element[value] !== 'object'){
                    let p = document.createElement('p');
                    p.classList.add('user-item');
                    p.append(`${value} : ${element[value]}`);
                    mainDiv.append(p);
                } else {
                    recursion(element[value]);
                }
            }
        }

        recursion(data);

        btn.onclick = function (){
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(data => {

                    for (const item of data) {
                        let anchor = document.createElement('a');
                        anchor.innerText = 'Information';
                        anchor.href = `post-details.html?id=${id}`;

                        let titDivIt = document.createElement('div');
                        titDivIt.append(item.title, anchor);
                        titDiv.append(titDivIt);

                    }

                });
        };

        document.body.append(mainDiv, btnDiv, titDiv);
    })


