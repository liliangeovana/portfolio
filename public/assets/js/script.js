document.addEventListener('DOMContentLoaded', function () {
    const toggleInput = document.getElementById('toggle');
    const toggleHandle = document.getElementById('toggleHandle');

    toggleInput.addEventListener('change', function () {
        const isChecked = toggleInput.checked;
        const translateValue = isChecked ? 'translate-x-full' : 'translate-x-0';
        toggleHandle.classList.toggle(translateValue);
    });
});

//Scroll
function contactClick() {
    document.getElementById('contactMe').scrollIntoView({ behavior: 'smooth' });
}

function aboutMeClick(){
    document.getElementById('textApresentation').scrollIntoView({ behavior: 'smooth' });

    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

function projectClick(){
    document.getElementById('projectSession').scrollIntoView({ behavior: 'smooth' });

    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}


document.getElementById('contact').addEventListener('click', contactClick);
document.getElementById('contactMobile').addEventListener('click', contactClick);
document.getElementById('contactProfile').addEventListener('click', contactClick);
document.getElementById('apresentation').addEventListener('click', aboutMeClick);
document.getElementById('apresentationMobile').addEventListener('click', aboutMeClick);
document.getElementById('projects').addEventListener('click', projectClick);
document.getElementById('projectsMobile').addEventListener('click', projectClick);
