const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".darklight"),
      searchtoggle = document.querySelector(".searchtoggle"),
      sidebaropen = document.querySelector(".sidebarOpen"),
      sidebarclose = document.querySelector(".sidebarClose");

let getmode = localStorage.getItem("mode");
if(getmode && getmode === "dark-mode"){
    body.classList.add("dark")
}

modeToggle.addEventListener("click",()=>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if(!body.classList.contains("dark")){
        localStorage.setItem("mode","light-mode");
    }
    else{
        localStorage.setItem("mode", "dark-mode");
    }
});

searchtoggle.addEventListener("click",()=>{
    searchtoggle.classList.toggle("active");
})

sidebaropen.addEventListener("click", ()=>{
    nav.classList.add("active");
})

body.addEventListener("click", e =>{
    let clicked = e.target;
    if(!clicked.classList.contains("sidebarOpen") && !clicked.classList.contains("menu")){
        nav.classList.remove("active");
    }
})