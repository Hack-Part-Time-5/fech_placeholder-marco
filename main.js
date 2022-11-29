let template = document.getElementById('template').content;
console.log(template);
let fragment = new DocumentFragment();
let container_cards = document.querySelector('.container_cards');



let path = 'https://jsonplaceholder.typicode.com/comments';

fetch(path)
    .then(response => response.json())
    .then(data => {
        let filtrado = data.filter(el => {
            return el.postId >= 90;
        })
        

        filtrado.forEach(el => {
            const clone = template.firstElementChild.cloneNode(true);

            let h5 = clone.querySelector('.card-title');
            let h6 = clone.querySelector('.card-subtitle');
            let p = clone.querySelector('.card-text');
            
            fragment.appendChild(clone)   
            container_cards.appendChild(fragment)

            h5.textContent = `${el.name}`;
            h6.textContent = `${el.email}`;
            p.textContent = `${el.body}`

        });


})