const images = ["clouds_01.jpg", "clouds_02.jpg", "clouds_03.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
