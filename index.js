let typed = new Typed('.typing-effect',{
    strings:["Web Developer","Data Analysist","Web Designer","Data Scientist"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("li a").forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add("active");
    }
})