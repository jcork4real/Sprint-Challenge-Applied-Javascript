// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

// Use your function to create a card for each of the articles and add the card to the DOM.

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {

   const cardContainer = document.querySelector('.cards-container');
    response.data.articles.bootstrap.forEach(item => {
                
                    const newCard = cardMaker(item);
                    cardContainer.append(newCard);
                })
    })

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {

      const cardContainer = document.querySelector('.cards-container');
         response.data.articles.javascript.forEach(item => {
                     
                         const newCard = cardMaker(item);
                         cardContainer.append(newCard);
                     })
 
         })

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
     
    const cardContainer = document.querySelector('.cards-container');
    response.data.articles.jquery.forEach(item => {
                              
        const newCard = cardMaker(item);
          cardContainer.append(newCard);
                              })
          
                  })
axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
              
                        const cardContainer = document.querySelector('.cards-container');
                           response.data.articles.node.forEach(item => {
                                       
                                           const newCard = cardMaker(item);
                                           cardContainer.append(newCard);
                                       })
                   
                           })
axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
                       
const cardContainer = document.querySelector('.cards-container');
 response.data.articles.technology.forEach(item => {
                                                
        const newCard = cardMaker(item);
     cardContainer.append(newCard);
             })
       })


const cardMaker = (someObject) =>{
    
    const card = document.createElement('div');
    card.classList.add('card');
   
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = someObject.headline;

    const author = document.createElement('div');
    author.classList.add('author');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
    img.setAttribute('src', someObject.authorPhoto);

    const authorsName = document.createElement('span')
    authorsName.textContent = someObject.authorName; 


    //append
    card.append(headline)
    headline.append(author)
    author.append(imgContainer)
    imgContainer.appendChild(img)
    img.append(authorsName)
    


    return card
}