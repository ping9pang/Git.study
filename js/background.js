const bakimages = [
    "haho.webp",
    "jy.jpeg",
    "pug.jpeg",
];

console.log(Math.floor(Math.random() * bakimages.length))
const choiceImage = bakimages[Math.floor(Math.random() * bakimages.length)];

const bgImage = document.createElement("img");
// background의 이미지를 바꾼다?

bgImage.src = `img/${choiceImage}`  

document.body.appendChild(bgImage); //html에 선언안해도 선언을 해준다.