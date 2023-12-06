const midContent = document.getElementsByClassName("mid-content")[0];
const introduction = document.getElementsByClassName("introduction")[0];

const navContent = document.getElementsByClassName("right")[0];
const navLink = document.querySelectorAll(".nav-links li");
const specialist = document.getElementById("specialist");
const dpCont = document.getElementsByClassName("dp-cont")[0];

const nameHolder = ["expertise","project","education","experience"];

if(navContent){
    let clickedContent = nameHolder.indexOf(navContent.classList[1]);
    navLink[clickedContent].classList.add("active");
    midContent.classList.add("active");
    introduction.classList.add("active");
    dpCont.classList.add("active");
    //dpCont.appendChild(specialist);
}else{
    dpCont.style.display="block";
}
