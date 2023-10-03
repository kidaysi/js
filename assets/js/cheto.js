let news = []

let name = document.getElementById('name')
let author = document.getElementById('author')
let text = document.getElementById('text')
let date = document.getElementById('date')
let button = document.getElementById('button')

let news_list = document.querySelector('.news')
function showArray(arr) {
    arr.forEach(x => {
        news_list.insertAdjacentHTML('beforeend',
            `<div class="newss">
        <div class="header_news">
        <h2 class="name"> ${x.name}</h2>
        <h4 class="date"> ${x.date}</h4>
        </div>
        <p class="text"> ${x.text}</p>
        <div class="footer">
        <h3 class="author"> ${x.author}</h3>
        </div>
    </div>`)
    })
}

function addNews(){
    let object = {
        id: 9,
        name: name.value,
        author: author.value,
        date: date.value,
        text: text.value
    }

    news.push(object)
    news_list.innerHTML = ''
    name.value = ''
    author.value = ''
    date.value = ''
    text.value = ''
    showArray(news)
}

button.addEventListener('click', addNews)
//
// class News {
//     constructor(name, date, text, author, id) {
//         this.name = name;
//         this.date = date;
//         this.text = text;
//         this.author = author;
//         this.id = id;
//     }
// }
// let all_news = [new News("Мы учим Js","12.12.12","Уже в процессе","Нияз","1"),new News("Новости","12.12.12","JS очень удобный","Автор","2"),new News("Я эксперт паутины","12.12.12","экспертное мнение","Эксперт","3")]
// let news;
// const news_container = document.querySelector('.news');
// all_news.forEach(n => {
//     news = `<div class="newss">
//         <div class="header_news">
//         <h2 class="name"> ${n.name}}</h2>
//         <h4 class="date"> ${n.date}</h4>
//         </div>
//         <p class="text"> ${n.text}</p>
//         <div class="footer">
//         <h3 class="author">${n.author}</h3>
//         <h4 class="date"> ${n.id}</h4>
//         </div>
//     </div>`
//     news_container.innerHTML += news
// })
// const modal = document.querySelector('.modal')
//
// const openModal = (()=> {
//     modal.classList.remove("hidden");
// })
// const closeModal = (()=> {
//     modal.classList.add("hidden");
// })
// document.querySelector('.open_modal').addEventListener("click", openModal)
// document.querySelector('.close_modal').addEventListener("click", closeModal)
//
// const form1 = document.querySelector('#create_news')
//
// form1.addEventListener('submit', (e) =>{
//     e.preventDefault()
//     const formData = new FormData(form1)
//     news =
//         `<div class="newss">
//         <div class="header_news">
//         <h2 class="name"> ${formData.get('name')}</h2>
//         <h4 class="date"> ${formData.get('date')}</h4>
//         </div>
//         <p class="text"> ${formData.get('text')}</p>
//         <div class="footer">
//         <h3 class="author">${formData.get('author')}</h3>
//         <h4 class="date">${formData.get('id')}</h4>
//         </div>
//     </div>`
//     news.innerHTML += news
//     e.target.reset();
//     modal.classList.add("hidden");
// })