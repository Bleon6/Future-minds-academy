export function settings() {

    function setActiveColor(color) {
        document.documentElement.style.setProperty('--active-color', color);
        localStorage.setItem('activeColor', color);
    }

    function setLeftMenuBackgroundImage(imageUrl) {
        document.documentElement.style.setProperty('--leftmenu-background-image', imageUrl);
        localStorage.setItem('leftMenuBackgroundImage', imageUrl);
    }

    function setLeftMenuBackgroundColor(color) {
        document.documentElement.style.setProperty('--leftmenu-background-color', color);
        localStorage.setItem('leftMenuBackgroundColor', color);
    }

    let setGreen = document.getElementById('set-green');
    let setPurple = document.getElementById('set-purple');
    let setBlue = document.getElementById('set-blue');
    let setOrange = document.getElementById('set-orange');

    setGreen.addEventListener('click', ()=>{
        setActiveColor('green');
    })

    setPurple.addEventListener('click', ()=>{
        setActiveColor('purple');
    })

    setBlue.addEventListener('click', ()=>{
        setActiveColor('lightblue');
    })

    setOrange.addEventListener('click', ()=>{
        setActiveColor('orangered');
    })

    let img1 = document.getElementById('img-1');
    let img2 = document.getElementById('img-2');

    img1.addEventListener('click', ()=>{
        setLeftMenuBackgroundImage('url(images/sidebar-1.jpg)');
    })

    img2.addEventListener('click', ()=>{
        setLeftMenuBackgroundImage('url(images/sidebar-2.jpg)');
    })

    let whiteSide = document.getElementById('white-side');
    let blackSide = document.getElementById('black-side');

    whiteSide.addEventListener('click',()=>{
        setLeftMenuBackgroundColor('linear-gradient(rgba(189, 189, 189, 0.8),rgba(199, 199, 199, 0.8))');
    });

    blackSide.addEventListener('click',()=>{
        setLeftMenuBackgroundColor('linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8))');
    });

    let settings = document.getElementById('settings');
    let settingBox = document.getElementById('setting-box');

    settings.addEventListener('click', ()=>{
        settingBox.classList.toggle('remove');
    });

    window.addEventListener('load', () => {
        const activeColor = localStorage.getItem('activeColor');
        if (activeColor) setActiveColor(activeColor);

        const leftMenuBackgroundImage = localStorage.getItem('leftMenuBackgroundImage');
        if (leftMenuBackgroundImage) setLeftMenuBackgroundImage(leftMenuBackgroundImage);

        const leftMenuBackgroundColor = localStorage.getItem('leftMenuBackgroundColor');
        if (leftMenuBackgroundColor) setLeftMenuBackgroundColor(leftMenuBackgroundColor);
    });
}
