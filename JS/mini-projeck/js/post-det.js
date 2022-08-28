// На странице post-details.html:
// 7 Вывести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(data => {

        let btn = document.createElement('button');
        btn.innerText = 'comment of current post';
        let btnDiv = document.createElement('div');
        btnDiv.classList.add('comment-btn');
        btnDiv.append(btn);
        let main = document.createElement('div');
        main.classList.add('main');
        let mainComDiv = document.createElement('div');
        mainComDiv.classList.add('main-comment')

        for (const value in data) {

            let child = document.createElement('div');
            child.append(`${value} : ${data[value]}`);
            main.append(child);
        }

        btn.onclick = function (){
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(response => response.json())
                .then(data => {

                    for (const item of data) {
                        let mainComDivItem = document.createElement('div');
                        mainComDivItem.append(item.body);
                        mainComDiv.append(mainComDivItem);
                    }

                });
        };

        document.body.append(main, btnDiv,mainComDiv);

    })