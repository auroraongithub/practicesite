const toggle = document.getElementById('toggleDark');
const toggle2 = document.getElementById('toggleDark2');
const body = document.querySelector('body');
const projects = document.querySelector('.projects section');
const menuBtn = document.getElementById("menubutton");
const subMenu = document.querySelector(".all-items");

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
        projects.style.color = 'black';
        projects.style.borderColor = 'black';
    } else {
        body.style.background = '#0a0a0a';
        body.style.color = 'white';
        body.style.transition = '1s';
        projects.style.color = 'white';
        projects.style.borderColor = 'white';
    }
});

toggle2.addEventListener('click', function() {
    this.classList.toggle2('bi-moon');
    if (this.classList.toggle2('bi-brightness-high-fill')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
        projects.style.color = 'black';
        projects.style.borderColor = 'black';
    } else {
        body.style.background = '#0a0a0a';
        body.style.color = 'white';
        body.style.transition = '1s';
        projects.style.color = 'white';
        projects.style.borderColor = 'white';
    }
});

// toggle the active class on the button to show/hide the menu
menuBtn.addEventListener('click', () => {
    subMenu.classList.toggle('active');
  });
  
  // hide the menu when the window width is greater than 840px
  window.addEventListener('resize', () => {
    if (window.innerWidth > 840) {
        menuBtn.classList.remove('active');
    }
  });
