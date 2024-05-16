// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.link');

//     menuToggle.addEventListener('click', function() {
//         navLinks.classList.toggle('active');
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const link = document.querySelector('.link');

    menuToggle.addEventListener('click', () => {
        link.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
});
