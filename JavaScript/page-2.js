let bookingBubble = document.getElementById('bookingImg');
let journalismBubble = document.getElementById('journalismImg');
let snakeBubble = document.getElementById('snakeImg');
let sudokuBubble = document.getElementById('sudokuImg');
let habitBubble = document.getElementById('habitImg');
let sortBubble = document.getElementById('sortImg');
let modal = document.getElementById('modal');
let modalInfoSection = document.getElementById('modalInfo');
let modalCloseBtn = document.getElementById('closeModal');

modalCloseBtn.addEventListener('click', toggleModalOff);

bookingBubble.addEventListener('click', () => {
    fillModal('bookingSystem')
})
journalismBubble.addEventListener('click', () => {
    fillModal('journalism');
})
snakeBubble.addEventListener('click', () => {
    fillModal('snake');
})
sudokuBubble.addEventListener('click', () => {
    fillModal('sudoku');
})
habitBubble.addEventListener('click', () => {
    fillModal('habit');
})
sortBubble.addEventListener('click', () => {
    fillModal('sort');
})

function toggleModalOff(){
    modal.style.display = "none";
}

function fillModal(project){
    modalInfoSection.innerHTML = "";
    let h3 = document.createElement('h3');
    let para = document.createElement('p');
    let img = document.createElement('img');
    // let githubLink = document.createElement('a');
    // let externalLink = document.createElement('a');
    switch (project){
        case 'bookingSystem':
            h3.textContent = "Booking System for Local Field"
            para.textContent = "Created a booking system for a local field, using the Materialize framework and Google Suite to create a form that's integrated with a Google calendar and Google sheets 'database'. The form has complete validation, checking whether there is already a booking on a specific date and pitch before populating available times. Customer information is autofilled from the Google Sheets database. The user is able to add multiple pitches onto one booking, as well as press a repeat button to repeat a given booking across multiple weeks."
            img.src = "./Assets/bookingscreenshot.png";
            break;
        case 'journalism':
            h3.textContent = "Journalism Project"
            para.textContent = "During a Futureproof group project, we created a website that would allow users to input short posts about a topic they are interested in, as well as connecting the site to a gif API so that users can add gifs to a post. Instead of using a database we just used a json file in the backend that is written to when a post request occurs. This server side repository is deployed using heroku. "
            img.src = "./Assets/journalism.png";
            break;
        case 'sudoku':
            h3.textContent = "Sudoku Generator and Solver"
            para.textContent = "Created the classic sudoku game, starting from solving a given input sudoku and then removing different amounts of numbers to make the generated sudoku harder or easier to solve. Added logic to check whether the users input is correct after submitting their solution, and if they are incorrect allow the user to ask where their input is incorrect to have another go at solving the given puzzle."
            img.src = "./Assets/dokuscreenshot.png";
            break;
        case 'snake':
            h3.textContent = "Snake in JavaScript"
            para.textContent = "Created the classic snake game in a web application using HTML canvas. I also deployed a Postgres SQL database using heroku to record high scores."
            img.src = "./Assets/snake screenshot.png";
            break;
        case 'habit':
            h3.textContent = "Coming Soon"
            para.textContent = "Loading..."
        case 'sort': 
            h3.textContent = "Coming Soon"
            para.textContent = "Loading..."     
    }
    modalInfoSection.append(h3);
    if (img.src !== ""){
        modalInfoSection.append(img);
    }
    modalInfoSection.append(para);
    modal.style.display = "flex";
    
}
