const curser = document.querySelector("#curser")
document.addEventListener("mousemove" , (e)=>{
    let Pleft = e.pageX + 4;
    let Pright = e.pageY + 4;

    curser.style.left = Pleft+"px";
    curser.style.top = Pright+"px";
})

const links = document.querySelectorAll("nav > div:nth-child(2) > ul > li")

links.forEach((el)=>{
    el.addEventListener("mouseenter" , ()=>{
        curser.classList.add("large")
    })
})

links.forEach((el)=>{
    el.addEventListener("mouseleave" , ()=>{
        curser.classList.remove("large")
    })
})