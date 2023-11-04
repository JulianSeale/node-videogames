const express = require("express");
const app = express();
app.use(express.static("public"));

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html")
});

app.get("/api/videogames",(req,res) =>{
const games = [];
games[0] = {
    name: "The Witcher 3: Wild Hunt",
      year: "2015",
      reviews: "4.8",
      developer: "CD Projekt Red",
      cost: "$49.99",
      awards:  "Best Role-Playing Game",
      img: "images/witcher3.jpg",
};

games[1] = {
    name: "Red Dead Redemption 2",
    year: "2018",
    reviews: "4.9",
    developer: "Rockstar Games",
    cost: "$59.99",
    awards: "Game of the Year",
    img: "images/reddead2.jpg",
};

games[2] = {
    name: "The Legend of Zelda: Breath of the Wild",
    year: "2017",
    reviews: "4.7",
    developer: "Nintendo",
    cost: "$59.99",
    awards: "Game of the Year",
    img: "images/zeldabotw.jpg",
};

games[3] = {
    name: "Minecraft",
    year: "2011",
    reviews: "4.7",
    developer: "Mojang Studios",
    cost: "$26.95",
    awards: "Golden Joystick Award for Game of the Year",
    img: "images/minecraft.jpg",
};

games[4] = {
    name: "Super Mario Odyssey",
    year: "2017",
    reviews: "4.8",
    developer: "Nintendo",
    cost: "$59.99",
    awards: "Game of the Year",
    img: "images/marioodyssey.jpg",
};

games[5] = {
    name: "The Last of Us Part II",
      year: 2020,
      reviews: 4.7,
      developer: "Naughty Dog",
      cost: "$59.99",
      awards: "Game of the Year",
      img: "images/lastofus2.jpg",
};

res.json(games);
});

app.listen(3000, () => {
    console.log("Im listen")
});