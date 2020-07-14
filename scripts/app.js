const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-container');
    const navLinks = document.querySelectorAll('.nav-container__item');

    burger.addEventListener('click', () => {

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`; 
            }
    });


        nav.classList.toggle('nav-active');
     });


};

navSlide();