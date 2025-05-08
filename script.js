const text = "Hey I am Aaryan✌️";
const typedText = document.getElementById('about_me_title');
let index = 0;

function typeText() {
    typedText.textContent += text.charAt(index);
    index++;
    if (index < text.length) {
        setTimeout(typeText, 150);
    }
     else {
        setTimeout(() => {
            typedText.textContent = '';
            index = 0;
            typeText();
        }, 1000); // Wait 1s before restarting
    }
}

typeText();
const projects = [
    {
        image :"./images/ludo_game_project_photo.jpg",
        title :"Flappy Bird",
        discription :"This is a flappy bird game made using HTML, CSS and JavaScript. The game is simple and easy to play. The objective of the game is to fly the bird through the pipes without hitting them.",
    },
    {
        image :"./images/ludo_game_project_photo.jpg",
        title :"Ludo Game",
        discription :"This is a ludo game made using HTML, CSS and JavaScript. The game is simple and easy to play. The objective of the game is to get all your pieces to the finish line before your opponents.",
    },
    {
        image :"./images/ludo_game_project_photo.jpg",
        title :"Snake Game",
        discription :"This is a snake game made using HTML, CSS and JavaScript. The game is simple and easy to play. The objective of the game is to eat the food and grow the snake without hitting the walls or itself.",
    },
    {
        image :"./images/ludo_game_project_photo.jpg",
        title :"tic-tac-toe",
        discription :"This is a tic-tac-toe game made using HTML, CSS and JavaScript. The game is simple and easy to play. The objective of the game is to get three in a row before your opponent."
    },
];

const container = document.getElementById("myprojects");
projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.discription}</p>
    `;
    card.style.width = "30vw";
    container.appendChild(card);
});