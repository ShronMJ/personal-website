const bar_x = document.querySelector("#menu");
const navlinks = document.querySelector('.nav-links');
const body = document.querySelector('body');

const seemore_project = document.querySelectorAll("#project .main-content .card span");
const bg_project = document.querySelectorAll("#project .main-content .card .card-bg");
const h3_project = document.querySelectorAll("#project .main-content .card h3");
const p_project = document.querySelectorAll("#project .main-content .card p");

const footer = document.querySelectorAll("footer .footer-top div");

/*Navigation-------------------------------------------- */
const barClass = "fa-solid fa-bars fa-fade";
const xmarkClass = "fa-solid fa-xmark";

bar_x.addEventListener('click',(e)=>{
    e.stopPropagation();
    if(bar_x.className===barClass){
        bar_x.className = xmarkClass;
        navlinks.classList.add("active");
    }else{
        bar_x.className = barClass;
        navlinks.classList.remove("active");
    }
})

body.addEventListener('click', (e)=>{
    if(body.offsetWidth <= 840){
        let clicked = e.target;
        if(!clicked.classList.contains("fa-bars") && !clicked.classList.contains("nav-links")){
            bar_x.className = barClass;
            navlinks.classList.remove("active");
        }
    }else{  navlinks.classList.add("active"); }
})

/**Project------------------------------------------------------------------------- */
for (let i = 0; i < seemore_project.length; i++) {
    seemore_project[i].addEventListener("click", ()=>{
        bg_project[i].classList.toggle("active");
        if(seemore_project[i].innerHTML==="see more.."){
            seemore_project[i].innerHTML = "back";
            seemore_project[i].style.marginLeft = "32px";
        }else{
            seemore_project[i].innerHTML = "see more..";
            seemore_project[i].style.marginLeft = "15px";
        }  
        p_project[2*i +1].classList.toggle("active");
        p_project[2*i].classList.toggle("active");
        h3_project[i].classList.toggle("active");
    })
}

//Footer----------------------------------------------------------------------------/

for(let i=0;i<footer.length;i++){
    footer[i].addEventListener("click", ()=>{
        footer[i].classList.toggle("active");
        footer[1-i].classList.toggle("active");
    })
}