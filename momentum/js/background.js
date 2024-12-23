const bakimages = [
    "haho.jpeg",
    "jy.jpeg",
    "bk.jpeg"
];

const choiceImage = bakimages[Math.floor(Math.random() * bakimages.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choiceImage}`;  

document.body.appendChild(bgImage); //html에 선언안해도 선언을 해준다.