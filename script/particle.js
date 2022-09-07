console.log("ParticleJS Running...")

let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight


let particlesArray;

// Get Mouse Position
let mouse = {
    x:null,
    y:null,
    radius: (canvas.height/80) * (canvas.width/80)
}

// window.addEventListener("mousemove" , ()=>{
//     mouse.x = event.x
//     mouse.y = event.y
// })

// create partical
class Partical {
    constructor (x , y , directionX , directionY , size , color) {
        this.x = x
        this.y = y
        this.directionX = directionX
        this.directionY = directionY
        this.size = size
        this.color = color
    }


    // method to drow individual particle
    drow(){
        ctx.beginPath()
        ctx.arc(this.x , this.y , this.size , 0 , Math.PI*2 , false)
        ctx.fillStyle = "#FFC052 " 
        ctx.fill()
    }


    //check particle position  , check mouse position  move the particle drow the particle
    update() {
        // check if particle still within canvas
        if(this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX
        }

        if(this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY
        }

        // circle collision
        let dx = mouse.x - this.x
        let dy = mouse.y - this.y
        let distance = Math.sqrt(dx*dx + dy*dy)
        if(distance < mouse.radius + this.size){
            if(mouse.x < this.x && this.x < canvas.width - this.size*10){
                this.x += 10
            }

            if(mouse.x > this.x && this.x > this.size*10){
                this.x -= 10
            }

            if(mouse.y < this.y && this.y < canvas.height - this.size*10){
                this.y += 10
            }

            if(mouse.y > this.y && this.y > this.size*10){
                this.y -= 10
            }
        }
        // move particle
        this.x += this.directionX
        this.y += this.directionY
        // drow particle
        this.drow()
    }

}

// create particle array
function init(){
    particlesArray = []
    let numberOfParticles = (canvas.width * canvas.height) / 9000
    for(let x = 0 ; x < numberOfParticles  ; x++){
        let size = (Math.random() * 5) + 1
        let x = (Math.random() * ( (innerWidth - size * 2) - (size * 2) ) + size * 2  )
        let y = (Math.random() * ( (innerHeight - size * 2) - (size * 2) ) + size * 2  )
        let directionX = (Math.random() * 5 ) - 2.5
        let directionY = (Math.random() * 5 ) - 2.5
        let color = ""

        particlesArray.push(new Partical(x,y,directionX,directionY,size,color) )
    }
}

// animate

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,innerWidth,innerHeight);

    for(let x = 0 ; x < particlesArray.length ; x++){
        particlesArray[x].update()
    }
    connect()
}

//connect
function connect () {
    let opacity = 1
    for(let a = 0 ; a < particlesArray.length ; a++){
        for(let b = a ; b < particlesArray.length ; b++){
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x ) ) +
            ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y ) )
            
            if(distance < (canvas.width/7) * (canvas.height/7)){
                opacity = 1 - (distance/20000)
                ctx.strokeStyle = "rgba(225,192,82,"+opacity+")"
                ctx.lineWidth = 1
                ctx.beginPath()
                ctx.moveTo(particlesArray[a].x , particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x , particlesArray[b].y);
                ctx.stroke()
            }

        }
    }
}

window.addEventListener("resize" , ()=>{
    canvas.width = innerWidth
    canvas.height = innerHeight
    mouse.radius = ((canvas.height/80) * (canvas.height/80))
    init()
})


window.addEventListener("mouseout" , ()=>{
        mouse.x = undefined
        mouse.y = undefined
})

init()
animate()