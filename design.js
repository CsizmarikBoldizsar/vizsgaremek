let menuBtn = document.getElementById("menu");
let menu = document.getElementById("mobile-menu");

menuBtn.onclick = () =>{
    menu.classList.toggle("open")
}


function resize()
{
    let boxSize = Number(window.getComputedStyle(resultsContainer).getPropertyValue("--childWidth").split("px")[0]);
    resultsContainer.style.setProperty("--width",(Math.floor(window.innerWidth / boxSize) * boxSize) + "px")
}

let resultsContainer = document.getElementById("results");
window.onresize = resize

resize()