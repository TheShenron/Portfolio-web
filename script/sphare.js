const Texts = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'TYPESCRIPT', 'MONGOOSE', 'REACT',
    'BOOTSTRAP', 'SASS',
    'CHAKRA-UI', 'NODEJS', 'MONGODB',
    'EXPRESS-JS', 'GIT/GITHUB', 'JQUERY', 'HEROKU', "AWS"
];

const tag = ()=>{

    var tagCloud = TagCloud('.Sphere', Texts, {

        // Sphere radius in px
    
        radius: innerWidth > 850 ? 230 : 180,
    
        // animation speed
        // slow, normal, fast
        maxSpeed: 'slow',
        initSpeed: 'fast',
    
        // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
        direction: 135,
    
        // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
        keep: true
    
    });


}



let s1 = innerWidth > 850 ? true : false
window.addEventListener("resize" , ()=>{
    let screen_size = innerWidth

    if(screen_size > 850){
        if(s1){
            s1 = false
            document.querySelector(".Sphere").innerHTML=""
            tag()
        } 
    }else{
        if(s1 == false){
            s1 = true
            document.querySelector(".Sphere").innerHTML=""
            tag()
        } 

    }
})

tag()




// Giving color to each text in sphere
var color = '#FFC052';
document.querySelector('.Sphere').style.color = color;