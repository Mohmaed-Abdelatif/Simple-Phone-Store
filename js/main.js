let mainImge = document.querySelector(".container .imge img");
let icons = document.querySelectorAll(".icons img")
let container = document.querySelector(".container");

icons.forEach((icon)=>{
    icon.onclick = function(){
        mainImge.src = icon.dataset.src;
        container.style.background = icon.dataset.color;
    }
});



//second way to change imge and background bot i must add onclick function in html:-

// let mainImge = document.querySelector(".container .imge img");
// let container = document.querySelector(".container");

// function phones(newsrc){
//     mainImge.src =newsrc;
// }
// function backColor(color){
//     container.style.background = color
// }
