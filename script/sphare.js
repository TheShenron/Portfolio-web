const Texts = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'TYPESCRIPT', 'MONGOOSE', 'REACT',
    'BOOTSTRAP', 'SASS',
    'CHAKRA-UI', 'NODEJS', 'MONGODB',
    'EXPRESS-JS', 'GIT/GITHUB', 'JQUERY', 'HEROKU', "AWS"
];

var tagCloud = TagCloud('.Sphere', Texts, {

    // Sphere radius in px

    radius: innerWidth > 850 ? 230 : 180,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',

    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,

    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: true

});

// Giving color to each text in sphere
var color = '#FFC052';
document.querySelector('.Sphere').style.color = color;