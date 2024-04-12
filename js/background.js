const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]; 

//our goal -> js에서 html로 이미지 추가
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
//append -> 가장 마지막에 생성, prehend -> 가장 앞에 생성