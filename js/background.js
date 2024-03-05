const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const chosenImageFile = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement("img");

backgroundImage.src = `img/${chosenImageFile}`;

document.body.style.backgroundImage = `url('img/${chosenImageFile}')`;