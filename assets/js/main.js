class News {
    constructor (name , text, author, date, id) {
        this.name = name;
        this.date = date;
        this.text  = text;
        this.author = author;
        this.id = id;
    }
}

let allNews = [new News("Blazar высвечивает новых звезд", "21.09.2023", "В Музее Москвы открылась четвертая ярмарка молодого искусства blazar, где можно найти работы более 120 художников до 35 лет по умеренным ценам", "Гульназ", "1"), new News("Юбилейная выставка Кабакова стала выставкой памяти художника","22.09.2023","Главная цель экспозиции «Илья и Эмилия Кабаковы. Завтра мы взлетим» в Тель-Авивском музее изобразительных искусств — напомнить зрителям: искусство, пожалуй, единственное, что держит нас на человеческом уровне", "Лягушка", "2")]
let news;
const news_content = document.querySelector('.news');
allNews.forEach(n => {
    news =
    `<div class="newss">
        <div class="header_news">
            <h2 class="name" id="name"> ${n.name}</h2>
            <h4 class="date" id="date"> ${n.date}</h4>
        </div>
        <p class="text" id="text"> ${n.text}</p>
        <div class="footer">
            <h3 class="author" id="author">${n.author}</h3>
            <h4 class="id" id="date"> ${n.id}</h4>
        </div>
    </div>`
    news_content.innerHTML += news;
})

const modal = document.querySelector('.modal')

const openModal = (() => {
    modal.classList.remove("hidden");
})

const closeModal = (() => {
    modal.classList.add("hidden");
})
document.querySelector('.open_modal').addEventListener("click", openModal)
document.querySelector('.close_modal').addEventListener("click", closeModal)

const form = document.querySelector('#create_news')

form.addEventListener('submit', (a) =>{
    a.preventDefault()
    const formData = new FormData(form)
    news =  `<div class="newss">
        <div class="header_news">
            <h2 class="name" id="name"> ${formData.get('name')}</h2>
            <h4 class="date" id="date"> ${formData.get('date')}</h4>
        </div>
        <p class="text" id="text"> ${formData.get('text')}</p>
        <div class="footer">
            <h3 class="author" id="author">${formData.get('author')}</h3>
            <h4 class="id" id="date"> ${formData.get('id')}</h4>
        </div>
    </div>`
    news_content.innerHTML += news
    a.target.reset();
    modal.classList.add("hidden");
})
