const Texts = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'TYPESCRIPT', 'MONGOOSE', '_REACT',
    'BOOTSTRAP', 'SASS',
    'CHAKRA-UI', 'NODEJS', 'MONGODB',
    'EXPRESS-JS', 'GIT/GITHUB', 'HEROKU'
];

const tag = ()=>{

    var tagCloud = TagCloud('.Sphere', Texts, {

        // Sphere radius in px
    
        radius: innerWidth > 800 ? 230 : innerWidth > 750 ? 180 : innerWidth > 400 ? 170 : innerWidth > 300 ? 160 : 140,
    
        // animation speed
        // slow, normal, fast
        maxSpeed: 'fast',
        initSpeed: 'fast',
    
        // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
        direction: 135,
    
        // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
        keep: true
    
    });


}


window.addEventListener("resize" , ()=>{
    document.querySelector(".Sphere").innerHTML=""
    tag()
})

tag()




// Giving color to each text in sphere
var color = '#FFFFFF';
document.querySelector('.Sphere').style.color = color;