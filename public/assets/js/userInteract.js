//DARK/CLEAR MODE
var toggle = document.getElementById('toggle');

    toggle.addEventListener('change', function() {
        var handle = document.getElementById('toggleHandle');
       
        
        if (toggle.checked) {
            document.documentElement.classList.add('dark');
        } else {

            document.documentElement.classList.remove('dark');
        }

        handle.style.transform = toggle.checked ? 'translateX(100%)' : 'translateX(0)';
    });
    

//Scroll
// Objeto para lidar com a navegação
var mobileMenu = document.getElementById('mobile-menu')
mobileMenu.classList.toggle('hidden');

var navigation = {
    scrollIntoViewSmooth: function(elementId) {
        document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' }); 
    }
};

// Funções específicas de clique
function contactClick() {
    navigation.scrollIntoViewSmooth('contactMe');
    mobileMenu.classList.toggle('hidden');

}

function aboutMeClick() {
    navigation.scrollIntoViewSmooth('textApresentation');
    mobileMenu.classList.toggle('hidden');
}

function projectClick() {
    navigation.scrollIntoViewSmooth('projectSession');
    mobileMenu.classList.toggle('hidden');
}

// Adicionando ouvintes de evento usando Event Delegation
document.body.addEventListener('click', function(event) {
    if (event.target.id === 'contact' || event.target.id === 'contactProfile' || event.target.id === 'contactMobile') {
        contactClick();
    } else if (event.target.id === 'apresentation' || event.target.id === 'apresentationMobile') {
        aboutMeClick();
    } else if (event.target.id === 'projects' || event.target.id === 'projectsMobile') {
        projectClick();
    }
});
