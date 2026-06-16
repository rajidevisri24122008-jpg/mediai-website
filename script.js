// Smooth Scrolling

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});

// Contact Form

const form = document.querySelector('.contact-form');

form.addEventListener('submit', function(e){

    e.preventDefault();

    alert('Thank you! Your message has been sent.');

    form.reset();

});

// Hero Button

document.querySelector('.hero-btn')
.addEventListener('click', function(){

    document.querySelector('#pricing')
    .scrollIntoView({
        behavior:'smooth'
    });

});