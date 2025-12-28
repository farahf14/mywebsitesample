const navSlide =() => {
    const navMobile = document.querySelector('.nav-mobile')
    const navBar = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    navMobile.addEventListener ('click',() => {
        navBar.classList.toggle('nav-active')

    });
}

navSlide();

// scrolling effect //
 document.querySelectorAll('.outer').forEach(el => {
	let content = el.querySelector('.content');

	repeatContent(content, el.offsetWidth);

	let slider = el.querySelector('.loop');
	slider.innerHTML = slider.innerHTML + slider.innerHTML;
});

    
function repeatContent(el, till) {
    let html = el.innerHTML;
    let counter = 0; // prevents infinite loop
    
    while (el.offsetWidth < till && counter < 100) {
        el.innerHTML += html;
        counter += 1;
    }
};

