// JavaScript Code
const counter = document.querySelector(".counter-number");
async function update() {
    let response = await fetch("https://kwivo4r4fvqcve2czb55cuti6u0gbrho.lambda-url.ca-central-1.on.aws/");
    let data = await response.json();
    counter.innerHTML='body:${data}';
}
updateCounter();

