export function initializeSidebar() {
    let closeElements = document.querySelectorAll('[id="data"]');
    let closeSldier = document.querySelectorAll('[class="user-slider"]');
    let icon = document.querySelectorAll('[id="icon"]');

    let slider = false;
    let menu = true;

    let user = document.getElementById('user');
    let pages = document.getElementById('pages');
    let data = document.getElementById('data');
    let forms = document.getElementById('forms');
    let table = document.getElementById('table');
    let maps = document.getElementById('maps');
    let components = document.getElementById('components');

    
    let userSlider = document.querySelectorAll('.slider-container');

    userSlider.forEach(item =>{
        let slider = item.parentElement.querySelector('.user-slider');

        
    }) 

    user.addEventListener('click', () => {
        let userSlider = document.getElementById('user-slider');

        if (menu == false) {
            return;
        }
        userSlider.classList.toggle('remove');
    });

    pages.addEventListener('click', () => {
        let userSlider = document.getElementById('pages-slider');
        if (menu == false) {
            return;
        }
        userSlider.classList.toggle('remove');
    });

    components.addEventListener('click', () => {
        console.log(slider);
        let userSlider = document.getElementById('components-slider');

        if (menu == false) {
            return;
        }
        userSlider.classList.toggle('remove');
    });

    forms.addEventListener('click', () => {
        console.log(slider);
        let userSlider = document.getElementById('forms-slider');

        if (menu == false) {
            return;
        }
        userSlider.classList.toggle('remove');
    });

    table.addEventListener('click', () => {
        console.log(slider);
        let userSlider = document.getElementById('table-slider');

        if (menu == false) {
            return;
        }
        userSlider.classList.toggle('remove');
    });

    maps.addEventListener('click', () => {
        console.log(slider);
        let userSlider = document.getElementById('maps-slider');

        if (menu == false) {
            return;
        }
        userSlider.classList.toggle('remove');
    });

    let closeMenu = document.getElementById('close-menu');

    let closeMenuSpan =document.getElementById('close-menu-span');

    closeMenu.addEventListener('click', () => {
        menu = !menu;

        if(closeMenuSpan.textContent == 'more_vert'){
            closeMenuSpan.textContent = 'menu';
        }
        else{
            closeMenuSpan.textContent = 'more_vert';
        }

        closeElements.forEach(element => {
            element.classList.toggle('remove');
        });

        closeSldier.forEach(element => {
            element.classList.toggle('remove');
        });

        icon.forEach(element => {
            element.classList.toggle('remove');
        });
    });
}
