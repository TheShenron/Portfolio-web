let canvas = document.querySelector("#canvas")


function bubbles () {
    for (let x = 0; x < 10; x++) {
        let span = document.createElement("span")
        span.classList.add("bubble")
        let num = getRandomInt50()
        span.style.width = num + "px"
        span.style.height = num + "px"
        span.style.left = getRandomInt (1 , innerWidth) - 50 + "px";
        span.style.top = getRandomInt(1 , innerHeight) - 50 + "px";
        canvas.appendChild(span)
    }
}
bubbles()


function getRandomInt(min = 1, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function getRandomInt50(min = 1, max = 30) {
    return Math.floor(Math.random() * (max - min)) + min
}

window.addEventListener("click" , ()=>{
    canvas.innerHTML = ""
    bubbles()
})