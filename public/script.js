


const showGames = async() => {
    const gameJSON = await getJSON();
    if(gameJSON == "") {
        return;
    }

    let gameDiv = document.getElementById("gameList");



gameJSON.forEach((game) => {
  // Create a game section element for each game
  let gameSection = document.createElement("div");
  gameSection.className = "game";

  // Create an image element for the game's image
  let image = document.createElement("img");
  image.src = "https://games-0oe9.onrender.com/"  + game.img;
  image.alt = game.name;
  

  // Create elements for game details
  let title = document.createElement("h2");
  title.textContent = game.name;

  let year = document.createElement("p");
  year.innerHTML = `<strong>Year:</strong> ${game.year}`;

  let reviews = document.createElement("p");
  reviews.innerHTML = `<strong>Reviews:</strong> ${game.reviews}`;

  let developer = document.createElement("p");
  developer.innerHTML = `<strong>Developer:</strong> ${game.developer}`;

  let cost = document.createElement("p");
  cost.innerHTML = `<strong>Cost:</strong> ${game.cost}`;

  let awards = document.createElement("p");
  awards.innerHTML = '<strong>Award: </strong>' + game.awards;
  

  // Append the elements to the game section
  gameSection.appendChild(image);
  gameSection.appendChild(title);
  gameSection.appendChild(year);
  gameSection.appendChild(reviews);
  gameSection.appendChild(developer);
  gameSection.appendChild(cost);
  gameSection.appendChild(awards);

  // Append the game section to the gameDiv
  gameDiv.appendChild(gameSection);
});

};

const getJSON = async () => {
    try {
        let response = await fetch("https://games-0oe9.onrender.com/api/videogames");
        return await response.json();
    } catch(error) {
        console.log("trouble seeing json");
        return "";
    }
};


function moveContainers() {
    const gameContainers = document.querySelectorAll('.game-container');

    gameContainers.forEach(container => {
        const randomX = Math.floor(Math.random() * 200) - 100; // Random horizontal movement
        const randomY = Math.floor(Math.random() * 200) - 100; // Random vertical movement

        container.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
}

function resetContainerPositions() {
    const gameContainers = document.querySelectorAll('.game-container');

    gameContainers.forEach(container => {
        container.style.transform = 'translate(0, 0)';
    });
}

// Move containers every 15 seconds
setInterval(() => {
    moveContainers();
    setTimeout(() => {
        resetContainerPositions();
    }, 1000);
}, 15000);


window.onload = () => {
    showGames();

    
};


