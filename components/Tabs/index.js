// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>



axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then( response => {
        const divTopicsElement = document.querySelector('.topics');
        response.data.topics.forEach( item => {
            let elementContainer = createTab(item);

            divTopicsElement.append(elementContainer);
        });
    })
    .catch( err => {
            console.log('Error:', err)
        })      

        const createTab = (someObject) => {
            const divElement = document.createElement('div');
            divElement.classList.add('tab');
            divElement.textContent = someObject

            return divElement;
        }