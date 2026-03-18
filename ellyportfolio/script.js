const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.onclick = () => {

navMenu.classList.toggle("active");

};



// Smooth scroll

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){
const href = this.getAttribute("href");

// Only intercept in-page hash links; allow normal page navigation for files/URLs.
if (!href || !href.startsWith("#")) {
return;
}

const target = document.querySelector(href);
if (!target) {
return;
}

e.preventDefault();
target.scrollIntoView({
behavior:"smooth"
});

});

});


window.addEventListener("scroll", function(){

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.background = "#060624";
navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";

}
else{

navbar.style.background = "transparent";
navbar.style.boxShadow = "none";

}

});


document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});