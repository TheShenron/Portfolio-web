console.log("From main.js file .. Welcome")
// logotype or something with text 
document.querySelector("#hamIcon").addEventListener("click" , ()=>{
    document.querySelector(".menu_sidebar").classList.toggle("show")
})



let icons = document.querySelectorAll(".iconWithoutLink")
console.log(icons)

let icons_div = document.querySelectorAll(".icons_div")
console.log(icons_div)

let togle = true
icons.forEach((el,ind)=>{
    el.addEventListener("click" , ()=>{
        RemoveClass()
       
        if(togle){
            icons_div[ind].classList.remove("icon_div_hide")
            togle = false
        }else{
            icons_div[ind].classList.add("icon_div_hide")
            togle = true
        }
        
    })
})


function RemoveClass (){
    icons_div.forEach((el,ind)=>{
        el.classList.add("icon_div_hide")
    })
}


