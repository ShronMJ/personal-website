const totalNav = 4;
const navLink = [];

const midContent = document.getElementsByClassName("mid-content");
const navContent = document.getElementsByClassName("right")[0];
for(let i=0; i<4;i++){
    navLink[i] = document.getElementsByClassName("nav-links")[i];
}




console.log("midContent: ",midContent);
console.log("navContent: ",navContent);
console.log("navLink: " + navLink[0].innerHTML);