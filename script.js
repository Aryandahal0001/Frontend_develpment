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
        image: "./images/my_pic.jpg",
        title: "Animated Navbar",
        description: "A responsive navigation bar with smooth animations and toggle functionality.",
    },
    {
        image: "./images/my_pic.jpg",
        title: "Landing Page",
        description: "A responsive website built with HTML, CSS, and JavaScript.",
    },
    {
        image: "./images/my_pic.jpg",
        title: "Portfolio Template",
        description: "A portfolio website showcasing creative works and skills.",
    },
];

const container = document.getElementById("myproject");
container.classList.add("project-grid")

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "card project-card";
    card.innerHTML = `
        <div class="card-image-wrapper">
            <img src="${project.image}" alt="${project.title}" class="card-image" />
        </div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-description">${project.description}</p>
    `;
    container.appendChild(card);
});
