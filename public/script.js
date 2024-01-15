document.getElementById('menu-toggle').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

document.getElementById('close-menu').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', function() {
    var sobreMimLink = document.getElementById('sobreMimLink');
    var aboutMeDiv = document.querySelector('.aboutMe');

    sobreMimLink.addEventListener('click', function() {
        aboutMeDiv.classList.add('piscarBorda');

        setTimeout(function() {
            aboutMeDiv.classList.remove('piscarBorda');
        }, 500);
    });
});