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
        user_name: 'Alessandro',
        user_last_name: 'Boccardi',
        user_img: 'https://picsum.photos/200',
        date: '03/12/2022',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        main_img: 'https://picsum.photos/800/400',
        likes: '50'
    },

    {
        post_id: 2,
        user_name: 'Antonella',
        user_last_name: 'Riccio',
        user_img: 'https://picsum.photos/200',
        date: '05/10/2022',
        text: 'Viva la vida 😍',
        main_img: 'https://picsum.photos/800/400',
        likes: '1200'
    },

    {
        post_id: 3,
        user_name: 'Santiago',
        user_last_name: 'Boccardi',
        user_img: 'https://picsum.photos/200',
        date: '10/01/2022',
        text: 'Mi piace super mario 👨🏻!',
        main_img: 'https://picsum.photos/800/400',
        likes: '150'
    },

    {
        post_id: 4,
        user_name: 'Gioele',
        user_last_name: 'Boccardi',
        user_img: '',
        date: '11/07/2022',
        text: 'Oggi alla partita di calcio ho fatto goal e abbiamo vinto ⚽️',
        main_img: '',
        likes: '2150'
    },

    {
        post_id: 5,
        user_name: 'Giuliana',
        user_last_name: 'Bianchi',
        user_img: 'https://picsum.photos/200',
        date: '07/18/2022',
        text: '👵🏻 👵🏻 👵🏻',
        main_img: '',
        likes: '20'
    },

    {
        post_id: 6,
        user_name: 'Federico',
        user_last_name: 'Boccardi',
        user_img: '',
        date: '09/25/2022',
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
function generatePostMarkup(post_date,user_post_name, user_last_name, user_post_img, post_text, main_post_img, post_id_number) {
    return `
    <div class="post">
                <div class="post_top">
                    <div class="post_top_img" >
                        <img src="${user_post_img}" alt="" id="image-${post_id_number}">
                    </div>
                    <div class="user">
                        <div class="user_name">${user_post_name} ${user_last_name}</div>
                        <div class="date">${changeDate(post_date)}</div>
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
                    
                        
        
        
        
// Creo una funzione che generi un numero random per i likes del post
function getRandomInteger() { 
    return Math.floor(Math.random() * 10000) 
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
    const postMarkup = generatePostMarkup(post.date, post.user_name, post.user_last_name, post.user_img, post.text, post.main_img, post.post_id)
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


// Dichiaro una variabile per un array vuoto dove verranno salvati gli id dei post ai quali metterò like
const likesIdList = []

// Ciclo all'interno dell'array di oggetti posts
posts.forEach((post) => {
        
       // Seleziono l'elemento like button attraverso il suo id
       const buttonElement = document.getElementById('like-button-' + post.post_id)
       // console.log(buttonElement);
       // Seleziono l'elemento like counter attraverso il suo id
       const counterElement = document.getElementById('like-counter-' + post.post_id)
       // console.log(counterElement);
    // Seleziono l'elemento user img attraverso il suo id
        const userImgElement = document.getElementById('image-' + post.post_id) 
        // console.log(userImgElement);
        // Dichiaro una variabile per le iniziali del nome
        const nameInitials = post.user_name.charAt(0).toUpperCase() + post.user_last_name.charAt(0).toUpperCase()
        // console.log(nameInitials);
        // console.log(post.user_img);
        if(post.user_img === '') {
            userImgElement.outerHTML = `<div class="initials_container">
            <strong class="initials">${nameInitials}</strong>
        </div>
        `;
        }
        // Invoco la funzione che cambia la data 
        // post.date = changeDate(post.date)
        // console.log(post.date);
        
    // Creo un evento al click del bottone
        buttonElement.addEventListener('click', function(event) {
            // Prevengo il comportamento di default
            event.preventDefault()
             //  console.log(this);
            // Aggiungo la classe che colora il bottone al click
            this.classList.toggle('color_blue')
            // Trasformo il counter in numero
            const strongInnerHtml = Number(counterElement.innerHTML)
            // console.log(strongInnerHtml);
            // Verifico quando il contatore deve incrementare o decrementare
            if (this.classList.contains('color_blue')) {
             // Incremento di uno il contatore
                counterElement.innerHTML = strongInnerHtml + 1;
                // Tengo traccia degli id dei post ai quali ho messo like
                 likesIdList.push(post.post_id)
                 
             } else {
              // Sottraggo di uno il contatore
                 counterElement.innerHTML = strongInnerHtml - 1;
                 likesIdList.pop(post.post_id)
             }
 
             console.log(likesIdList);
         })
  })
 
//  Creo una funzione che cambi il formato della data
 function changeDate (object_date) {
     let euroDate = new Date(object_date)
     return `${euroDate.getDate()}/${euroDate.getMonth() + 1}/${euroDate.getFullYear()}`
 }
        
        


        
        
     
