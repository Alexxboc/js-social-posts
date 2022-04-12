/* 
Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
*/

// Creo un array di oggetti che rappresenti il post

const posts = [
    {
        post_id: 1,
        user_name: 'Alessandro Boccardi',
        user_img: 'https://picsum.photos/200',
        date: '03/12/2022',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        main_img: 'https://picsum.photos/800/400',
        likes: '50'
    },

    {
        post_id: 2,
        user_name: 'Antonella Riccio',
        user_img: 'https://picsum.photos/200',
        date: '05/10/2022',
        text: 'Viva la vida',
        main_img: 'https://picsum.photos/800/400',
        likes: '1200'
    },

    {
        post_id: 3,
        user_name: 'Santiago Boccardi',
        user_img: 'https://picsum.photos/200',
        date: '22/01/2022',
        text: 'Mi piace super mario 👨🏻!',
        main_img: 'https://picsum.photos/800/400',
        likes: '150'
    },

    {
        post_id: 4,
        user_name: 'Santiago Boccardi',
        user_img: 'https://picsum.photos/200',
        date: '22/01/2022',
        text: 'Oggi alla partita di calcio ho fatto goal e abbiamo vinto ⚽️',
        main_img: '',
        likes: '2150'
    },

    {
        post_id: 5,
        user_name: 'Giuliana Bianchi',
        user_img: 'https://picsum.photos/200',
        date: '22/01/2022',
        text: '👵🏻 👵🏻 👵🏻',
        main_img: '',
        likes: '20'
    },

    {
        post_id: 6,
        user_name: 'Federico Boccardi',
        user_img: 'https://picsum.photos/200',
        date: '22/01/2022',
        text: 'Buongiorno Kafèèèèèè ☕️ ???',
        main_img: '',
        likes: '1'
    }
]

/* 
Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
*/

// Creo una funzione che generi il markup da inserire nell'html
function generatePostMarkup(post_date,user_post_name, user_post_img, post_text, main_post_img, post_id_number) {
    return `
    <div class="post">
                <div class="post_top">
                    <div class="post_top_img">
                        <img src="${user_post_img}" alt="">
                    </div>
                    <div class="user">
                        <div class="user_name">${user_post_name}</div>
                        <div class="date">${post_date}</div>
                    </div>
                </div>
                <div class="main_text">
                    <p>
                        ${post_text}
                    </p>
                </div>
                
                <div class="post_img">
                    <img src="${main_post_img}" alt="">
                </div>

                <div class="post_bottom">
                    <a href="#" class="like_section" id="like-button-${post_id_number}">
                    
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>Mi Piace</span>
                        
                    </a>
                    <div class="like_views">
                        Piace a <strong class="counter" id="like-counter-${post_id_number}">${getRandomInteger()}</strong> persone
                    </div>
                </div>
            </div>
    `
}

// Creo una funzione che inserisca il markup nell'html
function generatePosts(array_object, dom_selector) {
    // Seleziono l'elemento della Dom dove inserire l'html
const postAreaElement = document.querySelector(dom_selector);
// console.log(postAreaElement);
// Ciclo l'array di oggetti
array_object.forEach(post => {
    // console.log(post);
    // Genero il markup per ogni singolo post
    const postMarkup = generatePostMarkup(post.date, post.user_name, post.user_img, post.text, post.main_img, post.post_id)
    // console.log(postMarkup)
    // Inserisco il markup nell'html
    postAreaElement.insertAdjacentHTML("beforeend", postMarkup)
})
}

// Invoco la funzione che inserisce il markup nell'html
generatePosts(posts, '.post_area')

/* 
Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. 
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
*/


function getRandomInteger() { 
    return Math.floor(Math.random() * (1480 - 1 + 1)) + 1; 
}





for(let i = 0; i < posts.length; i++) {
    const post = posts[i]
    const buttonElement = document.getElementById('like-button-' + post.post_id)
    console.log(buttonElement);
    const counterElement = document.getElementById('like-counter-' + post.post_id)
    console.log(counterElement);
    

    buttonElement.addEventListener('click', function(event) {
        event.preventDefault()
        
        buttonElement.classList.toggle('color_blue')
        counterElement.classList.toggle('color_blue')

        const strongInnerHtml = Number(counterElement.innerHTML)
        console.log(strongInnerHtml);

        if (counterElement.classList == 'counter color_blue') {
           
            counterElement.innerHTML = strongInnerHtml + 1;
        } else {
    
            counterElement.innerHTML = strongInnerHtml - 1;
        }
    })
}




