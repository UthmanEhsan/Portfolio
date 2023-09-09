
// Responsive
const navbar = document.querySelector("nav")

var mobile_nav = document.querySelector(".mobile-navbar-btn")
function navToggle() {
    navbar.classList.toggle("active")
}

mobile_nav.addEventListener("click", () => navToggle())



let body_El = document.querySelector("#heading")
        let arr_text = ['Web Designer', 'Web Developer', "Backend Developer"];
        let arr_index = 0;
        let char_index = 5;
        function update_animation() {
            char_index++;
            body_El.innerHTML =  arr_text[arr_index].slice(0, char_index) + "</span></h1>"
            if(char_index == arr_text[arr_index].length){
                arr_index++
                char_index = 0
            }
            if(arr_index == arr_text.length){
                arr_index = 0
            }
            setTimeout(update_animation,200);
        }
        update_animation()



VanillaTilt.init(document.querySelectorAll(".skills_card"), {
    max: 50,
    speed: 400,
    glare: true,
    "max-glare": 1,

}); VanillaTilt.init(document.querySelectorAll(".pro_item"), {
    max: 25,
    speed: 400,
    // glare: true,
    // "max-glare": 1,

});




/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('header',{}); 
sr.reveal('button',{delay: 200}); 
sr.reveal('.hero_img',{delay: 400}); 

// /*SCROLL ABOUT*/
sr.reveal('.project',{}); 
sr.reveal('.card',{delay: 400}); 
sr.reveal('.card-content',{delay: 300}); 

// /*SCROLL SKILLS*/
sr.reveal('.skills',{}); 
sr.reveal('.skills_item',{}); 
sr.reveal('.skills_card',{interval: 200}); 

// /*SCROLL WORK*/
sr.reveal('footer',{interval: 200}); 

