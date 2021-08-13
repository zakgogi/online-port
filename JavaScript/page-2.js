let toggleGameButton = document.getElementById('revealCanvas');
toggleGameButton.addEventListener('click', () => {
    let main = document.getElementById('mainSection');
    let game = document.getElementById('gameSection');
    let canvas = document.getElementById('game');
    let width = Math.floor(window.innerWidth*0.42);
    let height = window.innerHeight;
    console.log(window.innerHeight)
    if (window.innerHeight*1.1 > width){
        height = width;
    } else {
        height = height*0.6;
    }
    canvas.height = height;
    canvas.width = width;
    if (!game.style.display || game.style.display === "none"){
        main.style.display = "none";
        game.style.display = "flex";
        toggleGameButton.textContent = "Back to normal"
    } else {
        main.style.display = "block";
        game.style.display = "none";
        toggleGameButton.textContent = "Make things more exciting.."
    }
    
})

let modal = document.getElementById('modal');
let modalInfoSection = document.getElementById('modalInfo');
let modalCloseBtn = document.getElementById('closeModal');

modalCloseBtn.addEventListener('click', toggleModalOff);

let projectList = ['bookingSystem', 'journalism', 'snake', 'sudoku', 'habit', 'sort', 'portfolio'];
for (let i = 0; i < projectList.length; i++){
    let currentBubble = document.getElementById(`${projectList[i]}Img`);
    currentBubble.addEventListener('click', () => {
        fillModal(projectList[i]);
    })
}


function toggleModalOff(){
    modal.style.display = "none";
}

function fillModal(project){
    let modal = document.getElementById('modal');
    let modalInfoSection = document.getElementById('modalInfo');
    modalInfoSection.innerHTML = "";
    let h3 = document.createElement('h3');
    let para = document.createElement('p');
    let img = document.createElement('img');
    let githubIcon = document.createElement('img');
    let githubLink = "";
    let externalLink = "";
    let externalIcon = document.createElement('img');
    let linkDiv = document.createElement('div');
    switch (project){
        case 'bookingSystem':
            h3.textContent = "Booking System for Local Field"
            para.textContent = "Created a booking system for a local field, using the Materialize framework and Google Suite to create a form that's integrated with a Google calendar and Google sheets 'database'. The form has complete validation, checking whether there is already a booking on a specific date and pitch before populating available times. Customer information is autofilled from the Google Sheets database. The user is able to add multiple pitches onto one booking, as well as press a repeat button to repeat a given booking across multiple weeks."
            img.src = "./Assets/bookingSystem.gif";
            break;
        case 'journalism':
            h3.textContent = "Journalism Project"
            para.textContent = "During a Futureproof group project, we created a website that would allow users to input short posts about a topic they are interested in, as well as connecting the site to a gif API so that users can add gifs to a post. Instead of using a database we just used a json file in the backend that is written to when a post request occurs. This server side repository is deployed using heroku. From the Github link above there's a link to the server repo in the Readme to check that out."
            img.src = "./Assets/journalism.png";
            githubLink = "https://github.com/zakgogi/journalism-lap-1-client";
            externalLink = "https://sazjournalismproject.netlify.app/";
            break;
        case 'sudoku':
            h3.textContent = "Sudoku Generator and Solver"
            para.textContent = "Created the classic sudoku game, starting from solving a given input sudoku and then removing different amounts of numbers to make the generated sudoku harder or easier to solve. Added logic to check whether the users input is correct after submitting their solution, and if they are incorrect allow the user to ask where their input is incorrect to have another go at solving the given puzzle."
            img.src = "./Assets/dokuscreenshot.png";
            githubLink = "https://github.com/zakgogi/sudoku-solver-and-generator";
            externalLink = "https://zaksudoku.netlify.app/";
            break;
        case 'snake':
            h3.textContent = "Snake in JavaScript"
            para.textContent = "Created the classic snake game in a web application using HTML canvas and pure JavaScript, one of my personal JavaScript projects. After lap 2 of the Futureproof course, I also deployed a Postgres SQL database using heroku to record high scores."
            img.src = "./Assets/snake screenshot.png";
            githubLink = "https://github.com/zakgogi/snake-db";
            externalLink = "https://zaksnakejs.netlify.app/";
            break;
        case 'habit':
            h3.textContent = "Stride - Habit Tracking App";
            para.textContent = "In my second project at futureproof we created an application where you could add and track your day to day habits. For this project we implemented an authentication process where usernames, emails and encrypted passwords were stored in a Heroku Postgres database, as well as using Json Web Tokens on login. I added some other features, like the ability to send an email reminder using the SendGrid API, as well as using Heroku scheduler to run a function daily at midnight to reset habit streaks and reset daily times completed back to 0. From the Github link above there's a link to the client repo in the Readme to check that out. If you want to test the application but don't want to sign up, we have a seeded account - (username: Steven Ride, password: stride)."
            img.src = "./Assets/stride.png"
            githubLink = "https://github.com/The-Br0grammer/server";
            externalLink = "https://the-stride.netlify.app/profile/";
            break;
        case 'sort': 
            h3.textContent = "React Sorting Visualizer"
            para.textContent = "Created an application with react to visualize sorting algorithms. The array thats being sorted is being stored as the change of state on each pass of the chosen sorting algorithm. I also added a range value slider to be able to adjust the speed of the sorting process. This project is ongoing..."
            img.src = "./Assets/sorting.png";
            githubLink = "https://github.com/zakgogi/sorting-visualizer";
            externalLink = "https://zak-sorting-visualizer.netlify.app/";    
            break ;
        case 'portfolio':
            h3.textContent = "This Portfolio Website"
            break;
    }
    modalInfoSection.append(h3);
    if (img.src !== ""){
        modalInfoSection.append(img);
    }
    if (githubLink !== ""){
        githubIcon.src = "./Assets/github.png";
        githubIcon.classList.add('modalIcon');
        githubIcon.addEventListener("click", () => {
            window.location.assign(githubLink)
        })
        linkDiv.append(githubIcon);
    }
    if (externalLink !== ""){
        externalIcon.src = "./Assets/externalLink.png";
        externalIcon.classList.add('modalIcon');
        externalIcon.addEventListener("click", () => {
            window.location.assign(externalLink);
        })
        linkDiv.append(externalIcon);
    }
    modalInfoSection.append(linkDiv);
    modalInfoSection.append(para);
    modal.style.display = "flex";
    
}
